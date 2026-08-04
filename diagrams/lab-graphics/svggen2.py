import sys, base64, re, pathlib
from playwright.sync_api import sync_playwright
html, png, svgout = sys.argv[1], sys.argv[2], sys.argv[3]
font_b64 = base64.b64encode(open("/tmp/virgil.woff2","rb").read()).decode()
BR=58  # brand band height
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(device_scale_factor=2)
    errs=[]; pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto("file://"+html); pg.wait_for_function("window.__ready===true", timeout=30000)
    pg.wait_for_timeout(1300)
    raw = pg.evaluate("document.getElementById('scene').outerHTML")
    b.close()
# parse W,H
m=re.search(r'viewBox="0 0 (\d+) (\d+)"', raw); W,H=int(m.group(1)),int(m.group(2)); newH=H+BR
open_tag=re.search(r'<svg[^>]*>', raw).group(0)
new_open=re.sub(r'height="\d+"', f'height="{newH}"', open_tag)
new_open=re.sub(r'viewBox="0 0 \d+ \d+"', f'viewBox="0 0 {W} {newH}"', new_open)
style=("<style>@font-face{font-family:'Virgil';"
       f"src:url(data:font/woff2;base64,{font_b64}) format('woff2');}}"
       "text{font-family:'Virgil',sans-serif;}</style>")
filler=f'<rect x="0" y="{H}" width="{W}" height="{BR}" fill="#0c0c10"/>'
domain=f'<text x="{W//2}" y="{H+38}" font-size="21" fill="#9a978f" text-anchor="middle" font-family="Virgil, sans-serif" letter-spacing="1">ryantmoore.ca</text>'
raw=raw.replace(open_tag, new_open+style+filler, 1)
raw=raw.replace("</svg>", domain+"</svg>", 1)
pathlib.Path(svgout).write_text(raw)
# rasterize stamped svg -> png (via <img> so font embeds)
htmlpath="/tmp/lab/_stamp.html"
pathlib.Path(htmlpath).write_text(f'<body style="margin:0;background:#0c0c10"><img id="i" src="file://{svgout}" width="{W}"></body>')
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(device_scale_factor=2)
    pg.goto("file://"+htmlpath); pg.wait_for_timeout(1200)
    pg.query_selector("#i").screenshot(path=png); b.close()
print(f"stamped {W}x{newH} kb={len(raw)//1024}", "errs:"+str(errs[-1]) if errs else "clean")
