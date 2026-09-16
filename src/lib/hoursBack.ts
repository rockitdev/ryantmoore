/**
 * Hours Back Calculator — pure calc module.
 *
 * No DOM, no side effects. Reusable server-side for audits.
 * Formula:
 *   Revenue block: annual_leak = opportunities/yr × recovery_rate × avg_value
 *   Time block:    annual_leak = instances/yr × (minutes/60) × loaded_hourly_cost
 *                  hours_saved  = instances/yr × (minutes/60)
 *
 * Every default is an EDITABLE ESTIMATE — never present as a guarantee.
 * Conservative defaults (under-promise).
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type BlockGroup = 'revenue' | 'time';

/** A single workflow block with its editable assumption. */
export type Block = {
  id: string;
  label: string;
  group: BlockGroup;
  /** One user-facing editable assumption per block. */
  assumption: {
    label: string;
    value: number;
    unit: string;
    min: number;
    max: number;
    step: number;
  };
  /** Whether this block is switched on. */
  enabled: boolean;
};

/** Inputs asked once from the user. */
export type UniversalInputs = {
  team_size: number;         // visible context, does not multiply formulas
  loaded_hourly_cost: number; // $/hr per person
  leads_per_week: number;
  avg_job_value: number;     // $
  close_rate: number;        // 0–100 (%)
  invoices_per_month: number;
  customer_base: number;     // active + past customers
};

export type BlockResult = {
  id: string;
  label: string;
  group: BlockGroup;
  annual_leak: number;  // dollars/year
  hours_saved: number;  // hours/year (0 for revenue blocks)
};

export type CalcResult = {
  hours_back_number: number; // total $/yr across all enabled blocks
  hours_per_year: number;    // total hours/yr (time blocks only)
  per_block: BlockResult[];  // results for all enabled blocks, sorted descending
  top_3: BlockResult[];      // top 3 by annual_leak
};

// ── Default block set (14 v1 blocks) ─────────────────────────────────────────

export const DEFAULT_BLOCKS: Block[] = [
  // ── Revenue-recovery blocks ──────────────────────────────────────────────
  {
    id: 'speed_to_lead',
    label: 'Speed-to-lead / missed-call text-back',
    group: 'revenue',
    assumption: {
      label: '% of weekly leads recovered with fast follow-up (est.)',
      value: 17.5,
      unit: '%',
      min: 1,
      max: 60,
      step: 0.5,
    },
    enabled: true,
  },
  {
    id: 'quote_followup',
    label: 'Quote / estimate follow-up',
    group: 'revenue',
    assumption: {
      label: '% of monthly quotes recovered by follow-up (est.)',
      value: 7.5,
      unit: '%',
      min: 1,
      max: 40,
      step: 0.5,
    },
    enabled: true,
  },
  {
    id: 'noshow_reducer',
    label: 'No-show reducer (reminders + rebook)',
    group: 'revenue',
    assumption: {
      label: '% of booked appointments prevented from no-showing (est.)',
      value: 9,
      unit: '%',
      min: 1,
      max: 40,
      step: 0.5,
    },
    enabled: true,
  },
  {
    id: 'database_reactivation',
    label: 'Database reactivation',
    group: 'revenue',
    assumption: {
      label: '% of past customers reactivated per year (est.)',
      value: 4,
      unit: '%',
      min: 0.5,
      max: 20,
      step: 0.5,
    },
    enabled: false,
  },
  {
    id: 'renewal_chaser',
    label: 'Renewal / maintenance chaser',
    group: 'revenue',
    assumption: {
      label: '% of customer base with an annual renewal you\'d otherwise miss (est.)',
      value: 10,
      unit: '%',
      min: 1,
      max: 40,
      step: 0.5,
    },
    enabled: false,
  },
  {
    id: 'referral_ask',
    label: 'Referral-ask automation',
    group: 'revenue',
    assumption: {
      label: 'Extra referred jobs per 100 completed jobs (est.)',
      value: 4,
      unit: 'per 100 jobs',
      min: 0.5,
      max: 20,
      step: 0.5,
    },
    enabled: false,
  },

  // ── Time-save blocks ──────────────────────────────────────────────────────
  {
    id: 'invoicing',
    label: 'Invoicing',
    group: 'time',
    assumption: {
      label: 'Minutes to create and send each invoice (est.)',
      value: 8,
      unit: 'min each',
      min: 1,
      max: 30,
      step: 1,
    },
    enabled: true,
  },
  {
    id: 'ar_followup',
    label: 'AR / overdue follow-up',
    group: 'time',
    assumption: {
      label: 'Minutes per overdue invoice follow-up (est.)',
      value: 12,
      unit: 'min each',
      min: 1,
      max: 60,
      step: 1,
    },
    enabled: true,
  },
  {
    id: 'status_updates',
    label: 'Proactive status updates',
    group: 'time',
    assumption: {
      label: 'Minutes per job spent on status calls / texts (est.)',
      value: 5,
      unit: 'min each',
      min: 1,
      max: 30,
      step: 1,
    },
    enabled: true,
  },
  {
    id: 'support_faq',
    label: 'Support / FAQ triage',
    group: 'time',
    assumption: {
      label: 'Support questions or tickets handled per week (est.)',
      value: 15,
      unit: 'per week',
      min: 1,
      max: 200,
      step: 1,
    },
    enabled: false,
  },
  {
    id: 'reporting_digest',
    label: 'Reporting / ops digest',
    group: 'time',
    assumption: {
      label: 'Reports or ops digests produced per week (est.)',
      value: 1,
      unit: 'per week',
      min: 0.5,
      max: 10,
      step: 0.5,
    },
    enabled: false,
  },
  {
    id: 'scheduling_dispatch',
    label: 'Scheduling / dispatch coordination',
    group: 'time',
    assumption: {
      label: 'Minutes to coordinate each booking or job dispatch (est.)',
      value: 7,
      unit: 'min each',
      min: 1,
      max: 45,
      step: 1,
    },
    enabled: false,
  },
  {
    id: 'review_requests',
    label: 'Review requests',
    group: 'time',
    assumption: {
      label: 'Minutes per job spent requesting and following up on reviews (est.)',
      value: 3,
      unit: 'min each',
      min: 1,
      max: 20,
      step: 1,
    },
    enabled: false,
  },
  {
    id: 'data_entry_sync',
    label: 'Cross-tool data entry / sync',
    group: 'time',
    assumption: {
      label: 'Manual data entries or cross-tool records synced per day (est.)',
      value: 10,
      unit: 'per day',
      min: 1,
      max: 200,
      step: 1,
    },
    enabled: false,
  },
];

// ── Per-block formula ─────────────────────────────────────────────────────────

/**
 * Calculate annual_leak and hours_saved for one block given the universal inputs.
 * Returns { annual_leak, hours_saved } — pure, no side effects.
 */
export function calcBlock(
  block: Block,
  inputs: UniversalInputs
): { annual_leak: number; hours_saved: number } {
  const {
    loaded_hourly_cost,
    leads_per_week,
    avg_job_value,
    close_rate,
    invoices_per_month,
    customer_base,
  } = inputs;

  const a = block.assumption.value;
  const closeRate = close_rate / 100;
  const jobs_per_year = leads_per_week * 52 * closeRate;
  let annual_leak = 0;
  let hours_saved = 0;

  switch (block.id) {
    // ── Revenue blocks ──
    case 'speed_to_lead':
      // a = % of weekly leads recovered → a/100 of all leads convert after fast follow-up
      annual_leak = leads_per_week * 52 * (a / 100) * closeRate * avg_job_value;
      break;

    case 'quote_followup':
      // Proxy: all leads become quotes (leads/week × 4 weeks/mo × 12 mo)
      // a = % of those quotes recovered
      annual_leak = leads_per_week * 4 * 12 * (a / 100) * avg_job_value;
      break;

    case 'noshow_reducer':
      // a = % of booked appointments that no longer no-show
      annual_leak = jobs_per_year * (a / 100) * avg_job_value;
      break;

    case 'database_reactivation':
      // a = % of customer base reactivated per year
      annual_leak = customer_base * (a / 100) * avg_job_value;
      break;

    case 'renewal_chaser':
      // a = % of customer base with an annual renewal captured
      annual_leak = customer_base * (a / 100) * avg_job_value;
      break;

    case 'referral_ask':
      // a = extra referred jobs per 100 completed jobs
      annual_leak = jobs_per_year * (a / 100) * avg_job_value;
      break;

    // ── Time blocks ──
    case 'invoicing': {
      const instances = invoices_per_month * 12;
      const hrs = instances * (a / 60);
      annual_leak = hrs * loaded_hourly_cost;
      hours_saved = hrs;
      break;
    }

    case 'ar_followup': {
      // Assume ~15% of invoices go overdue
      const overdue_instances = invoices_per_month * 12 * 0.15;
      const hrs = overdue_instances * (a / 60);
      annual_leak = hrs * loaded_hourly_cost;
      hours_saved = hrs;
      break;
    }

    case 'status_updates': {
      // One status update per completed job
      const hrs = jobs_per_year * (a / 60);
      annual_leak = hrs * loaded_hourly_cost;
      hours_saved = hrs;
      break;
    }

    case 'support_faq': {
      // a = tickets per week; 6 min per ticket (seed default, baked in)
      const instances = a * 52;
      const hrs = instances * (6 / 60);
      annual_leak = hrs * loaded_hourly_cost;
      hours_saved = hrs;
      break;
    }

    case 'reporting_digest': {
      // a = reports per week; 90 min per report (seed default)
      const hrs = a * 52 * (90 / 60);
      annual_leak = hrs * loaded_hourly_cost;
      hours_saved = hrs;
      break;
    }

    case 'scheduling_dispatch': {
      // a = minutes per job booked
      const hrs = jobs_per_year * (a / 60);
      annual_leak = hrs * loaded_hourly_cost;
      hours_saved = hrs;
      break;
    }

    case 'review_requests': {
      // a = minutes per completed job
      const hrs = jobs_per_year * (a / 60);
      annual_leak = hrs * loaded_hourly_cost;
      hours_saved = hrs;
      break;
    }

    case 'data_entry_sync': {
      // a = records per day; 5 min per record; 260 working days
      const hrs = a * 260 * (5 / 60);
      annual_leak = hrs * loaded_hourly_cost;
      hours_saved = hrs;
      break;
    }

    default:
      break;
  }

  return {
    annual_leak: Math.max(0, Math.round(annual_leak)),
    hours_saved: Math.max(0, Math.round(hours_saved * 10) / 10),
  };
}

// ── Main entry point ──────────────────────────────────────────────────────────

/**
 * Calculate the full Hours Back result.
 * Only enabled blocks contribute to the totals.
 */
export function calcHoursBack(
  inputs: UniversalInputs,
  blocks: Block[]
): CalcResult {
  const per_block: BlockResult[] = blocks
    .filter((b) => b.enabled)
    .map((b) => {
      const { annual_leak, hours_saved } = calcBlock(b, inputs);
      return {
        id: b.id,
        label: b.label,
        group: b.group,
        annual_leak,
        hours_saved,
      };
    })
    .sort((a, z) => z.annual_leak - a.annual_leak);

  const hours_back_number = per_block.reduce((s, b) => s + b.annual_leak, 0);
  const hours_per_year =
    per_block
      .filter((b) => b.group === 'time')
      .reduce((s, b) => s + b.hours_saved, 0);

  const top_3 = per_block.slice(0, 3);

  return {
    hours_back_number: Math.round(hours_back_number),
    hours_per_year: Math.round(hours_per_year * 10) / 10,
    per_block,
    top_3,
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

export const DEFAULT_INPUTS: UniversalInputs = {
  team_size: 5,
  loaded_hourly_cost: 45,
  leads_per_week: 20,
  avg_job_value: 1500,
  close_rate: 30,
  invoices_per_month: 60,
  customer_base: 800,
};

/** Format a dollar amount as ~$X,XXX (no cents). */
export function fmtDollars(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000).toLocaleString()}k`;
  return `$${Math.round(n).toLocaleString()}`;
}

/** Format hours as ~X hrs. */
export function fmtHours(n: number): string {
  return `${Math.round(n).toLocaleString()} hrs`;
}
