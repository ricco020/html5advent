#!/usr/bin/env python3
"""Regenere src/data/lastmod.json : date du dernier commit qui change REELLEMENT le contenu servi d une URL.
Page = son fichier src/pages/... ; en plus, pour les pages dont le contenu vient d un composant partage :
  accueils        -> src/components/Home.astro (cartes) 
  index des guides -> src/components/GuidesList.astro et src/data/guides.js (liste)
  calculateur VPS -> src/components/VpsCalculator.astro et src/data/vps-calc.js
Le gabarit Article.astro n est PAS compte (il daterait 250 pages du meme jour).
Usage : python3 scripts/gen-lastmod.py   (a lancer avant le commit, les fichiers modifies non commites comptent pour aujourd hui)"""
import json, os, subprocess, datetime
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOC = ["fr", "es", "de", "it", "pt"]
def date(*files):
    sale = subprocess.run(["git", "status", "--porcelain", "--", *files], cwd=R, capture_output=True, text=True).stdout.strip()
    if sale:
        return datetime.date.today().isoformat()
    return subprocess.run(["git", "log", "-1", "--format=%cs", "--", *files], cwd=R, capture_output=True, text=True).stdout.strip()
out = {}
for d, _, fs in os.walk(os.path.join(R, "src/pages")):
    for f in fs:
        if not f.endswith(".astro") or f.startswith("["):
            continue
        rel = os.path.relpath(os.path.join(d, f), R)
        path = rel[len("src/pages/"):-len(".astro")]
        if path.endswith("index"):
            path = path[:-len("index")].rstrip("/")
        url = "https://html5advent.com/" + path
        deps = [rel]
        nu = path.split("/", 1)[1] if path.split("/")[0] in LOC and "/" in path else ("" if path in LOC else path)
        if nu == "":
            deps.append("src/components/Home.astro")
        elif nu == "guides":
            deps += ["src/components/GuidesList.astro", "src/data/guides.js"]
        elif nu == "tools/vps-size-calculator":
            deps += ["src/components/VpsCalculator.astro", "src/data/vps-calc.js"]
        dt = date(*deps)
        if dt:
            out[url] = dt
json.dump(dict(sorted(out.items())), open(os.path.join(R, "src/data/lastmod.json"), "w"), indent=0)
print(len(out), "URL")
