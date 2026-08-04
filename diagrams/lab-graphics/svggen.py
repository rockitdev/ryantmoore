import sys, base64, re
from playwright.sync_api import sync_playwright
html, png, svgout = sys.argv[1], sys.argv[2], sys.argv[3]
font_b64 = base64.b64encode(open("/tmp/virgil.woff2","rb").read()).decode()
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(device_scale_factor=2)
    errs=[]; pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto("file://"+html)
    try: pg.wait_for_function("window.__ready===true", timeout=30000)
    except Exception as e: print("FAIL",e,errs[-3:]); b.close(); sys.exit(1)
    pg.wait_for_timeout(1300)
    pg.query_selector("#scene").screenshot(path=png)          # PNG for visual review
    raw = pg.evaluate("document.getElementById('scene').outerHTML")
    b.close()
# inject an @font-face style block right after the opening <svg ...>
style = ("<style>@font-face{font-family:'Virgil';"
         f"src:url(data:font/woff2;base64,{font_b64}) format('woff2');}}"
         "text{font-family:'Virgil',sans-serif;}</style>")
raw = re.sub(r'(<svg[^>]*>)', r'\1'+style, raw, count=1)
open(svgout,"w").write(raw)
print("OK png+svg", "errs:"+";".join(errs[-2:]) if errs else "clean", "svg_kb=%d"%(len(raw)//1024))
