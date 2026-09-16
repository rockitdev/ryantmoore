/**
 * Hours Back Calculator — unit tests.
 * Run with: node --experimental-strip-types src/lib/hoursBack.test.ts
 */

import {
  calcHoursBack,
  calcBlock,
  DEFAULT_INPUTS,
  DEFAULT_BLOCKS,
  fmtDollars,
  fmtHours,
  type UniversalInputs,
  type Block,
} from './hoursBack.ts';

let passed = 0;
let failed = 0;

function assert(label: string, condition: boolean, detail?: string): void {
  if (condition) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.error(`  ✗ ${label}${detail ? ` — ${detail}` : ''}`);
    failed++;
  }
}

function approxEqual(a: number, b: number, tolerance = 0.01): boolean {
  if (b === 0) return Math.abs(a) < 1;
  return Math.abs(a - b) / Math.abs(b) < tolerance;
}

// ── Test 1: all blocks off = 0 ────────────────────────────────────────────────
console.log('\nTest 1: all blocks off → zero totals');
{
  const allOff: Block[] = DEFAULT_BLOCKS.map((b) => ({ ...b, enabled: false }));
  const result = calcHoursBack(DEFAULT_INPUTS, allOff);
  assert('hours_back_number = 0', result.hours_back_number === 0, `got ${result.hours_back_number}`);
  assert('hours_per_year = 0', result.hours_per_year === 0, `got ${result.hours_per_year}`);
  assert('per_block is empty', result.per_block.length === 0);
  assert('top_3 is empty', result.top_3.length === 0);
}

// ── Test 2: revenue block math ────────────────────────────────────────────────
console.log('\nTest 2: speed_to_lead revenue block formula');
{
  const inputs: UniversalInputs = {
    ...DEFAULT_INPUTS,
    leads_per_week: 20,
    avg_job_value: 1500,
    close_rate: 30,
  };
  const block: Block = {
    ...DEFAULT_BLOCKS.find((b) => b.id === 'speed_to_lead')!,
    enabled: true,
    assumption: { ...DEFAULT_BLOCKS.find((b) => b.id === 'speed_to_lead')!.assumption, value: 17.5 },
  };
  // expected: 20 * 52 * (17.5/100) * (30/100) * 1500 = 81,900
  const expected = 20 * 52 * (17.5 / 100) * (30 / 100) * 1500;
  const { annual_leak, hours_saved } = calcBlock(block, inputs);
  assert('annual_leak ≈ expected', approxEqual(annual_leak, expected), `got ${annual_leak}, expected ~${Math.round(expected)}`);
  assert('hours_saved = 0 for revenue block', hours_saved === 0);
}

// ── Test 3: time-save block math ──────────────────────────────────────────────
console.log('\nTest 3: invoicing time-save block formula');
{
  const inputs: UniversalInputs = {
    ...DEFAULT_INPUTS,
    invoices_per_month: 60,
    loaded_hourly_cost: 45,
  };
  const block: Block = {
    ...DEFAULT_BLOCKS.find((b) => b.id === 'invoicing')!,
    enabled: true,
    assumption: { ...DEFAULT_BLOCKS.find((b) => b.id === 'invoicing')!.assumption, value: 8 },
  };
  // expected: 60 * 12 * (8/60) * 45 = 2,160
  const expected_annual = 60 * 12 * (8 / 60) * 45;
  const expected_hours = 60 * 12 * (8 / 60);
  const { annual_leak, hours_saved } = calcBlock(block, inputs);
  assert('annual_leak ≈ expected', approxEqual(annual_leak, expected_annual), `got ${annual_leak}, expected ~${Math.round(expected_annual)}`);
  assert('hours_saved ≈ expected', approxEqual(hours_saved, expected_hours), `got ${hours_saved}, expected ~${expected_hours.toFixed(1)}`);
}

// ── Test 4: top_3 ranking ─────────────────────────────────────────────────────
console.log('\nTest 4: top_3 contains the highest-value blocks');
{
  const result = calcHoursBack(DEFAULT_INPUTS, DEFAULT_BLOCKS);
  assert('per_block sorted descending', result.per_block.every((b, i, a) => i === 0 || a[i - 1].annual_leak >= b.annual_leak));
  assert('top_3 length ≤ 3', result.top_3.length <= 3);
  if (result.top_3.length >= 2) {
    assert('top_3[0] ≥ top_3[1]', result.top_3[0].annual_leak >= result.top_3[1].annual_leak);
  }
  assert('hours_back_number > 0 with defaults', result.hours_back_number > 0);
  console.log(`    hours_back_number with default blocks = $${result.hours_back_number.toLocaleString()}/yr`);
  console.log(`    hours_per_year = ${result.hours_per_year}`);
  console.log(`    enabled block count = ${result.per_block.length}`);
  console.log(`    top_3 = [${result.top_3.map((b) => `${b.label}: $${b.annual_leak}`).join(', ')}]`);
}

// ── Test 5: database_reactivation revenue block ───────────────────────────────
console.log('\nTest 5: database_reactivation formula');
{
  const inputs: UniversalInputs = {
    ...DEFAULT_INPUTS,
    customer_base: 800,
    avg_job_value: 1500,
  };
  const block: Block = {
    ...DEFAULT_BLOCKS.find((b) => b.id === 'database_reactivation')!,
    enabled: true,
    assumption: { ...DEFAULT_BLOCKS.find((b) => b.id === 'database_reactivation')!.assumption, value: 4 },
  };
  // expected: 800 * 0.04 * 1500 = 48,000
  const expected = 800 * 0.04 * 1500;
  const { annual_leak } = calcBlock(block, inputs);
  assert('annual_leak ≈ expected', approxEqual(annual_leak, expected), `got ${annual_leak}, expected ${expected}`);
}

// ── Test 6: fmtDollars / fmtHours ─────────────────────────────────────────────
console.log('\nTest 6: formatting helpers');
{
  assert('fmtDollars(0)', fmtDollars(0) === '$0');
  assert('fmtDollars(500)', fmtDollars(500) === '$500');
  assert('fmtDollars(12345)', fmtDollars(12345) === '$12k');
  assert('fmtDollars(1_500_000)', fmtDollars(1_500_000) === '$1.5M');
  assert('fmtHours(120)', fmtHours(120) === '120 hrs');
}

// ── Test 7: all blocks on ─────────────────────────────────────────────────────
console.log('\nTest 7: all blocks on → total > any individual block');
{
  const allOn: Block[] = DEFAULT_BLOCKS.map((b) => ({ ...b, enabled: true }));
  const result = calcHoursBack(DEFAULT_INPUTS, allOn);
  assert('all 14 blocks in per_block', result.per_block.length === 14);
  assert('hours_per_year > 0', result.hours_per_year > 0);
  assert('hours_back_number ≥ top block', result.hours_back_number >= (result.top_3[0]?.annual_leak ?? 0));
  console.log(`    all-on hours_back_number = $${result.hours_back_number.toLocaleString()}/yr, ${result.hours_per_year} hrs/yr`);
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
