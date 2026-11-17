#!/usr/bin/env python3
"""Etat d'indexation Google des pages a carte Contabo (API urlInspection, compte de service,
propriete https://html5advent.com/). Base du 16/11/2026 22:34 : 11 URL en
« Blocked due to other 4xx issue » (explorees 24/09-03/10, panne Vercel) et
tools/vps-size-calculator inconnue de Google. rc=0 si 0 Blocked 4xx."""
import sys
from google.oauth2 import service_account
from googleapiclient.discovery import build

SITE = "https://html5advent.com/"
CIBLES = ["", "guides", "tools/vps-size-calculator", "guides/how-much-does-a-vps-cost",
          "guides/best-cheap-vps", "guides/best-hosting-for-small-business",
          "guides/best-hosting-for-laravel", "guides/managed-wordpress-hosting",
          "guides/astro-hosting", "guides/static-website-hosting",
          "guides/vps-vs-dedicated-server", "guides/web-hosting-for-developers",
          "guides/wordpress-vps", "guides/nodejs-hosting", "guides/php-hosting",
          "guides/vps-hosting", "guides/contabo-review", "guides/vps-vs-cloud-hosting"]
CIBLES += sys.argv[1:]
cred = service_account.Credentials.from_service_account_file(
    "/mnt/c/Users/lerer/Desktop/NDD/data/service-account.json",
    scopes=["https://www.googleapis.com/auth/webmasters"])
svc = build("searchconsole", "v1", credentials=cred, cache_discovery=False)
bloquees = 0
for chemin in CIBLES:
    r = svc.urlInspection().index().inspect(
        body={"inspectionUrl": SITE + chemin, "siteUrl": SITE}).execute()
    i = r["inspectionResult"]["indexStatusResult"]
    etat = i.get("coverageState", "")
    print("/" + chemin, "|", etat, "|", i.get("lastCrawlTime", "")[:10], "|", len(i.get("referringUrls", [])), "liens |", "sitemap" if i.get("sitemap") else "hors sitemap")
    bloquees += "4xx" in etat
print("Blocked 4xx :", bloquees, "sur", len(CIBLES))
sys.exit(0 if bloquees == 0 else 1)
