# BLUEPRINT — html5advent.com (13ᵉ site, actif dev/GEO autonome)

> Domaine expiré récupéré (DR51, niche HTML5/web-standards). Profil légacy PROPRE
> (Christian Heilmann DR69, atmarkit DR88, alsacreations DR71, openmatt, churchm.ag)
> MAIS contaminé (gambling + SEOExpress spam) → voir `disavow.txt`.
> RÔLE : actif GEO/trafic/autorité dev, **PAS un money-site** (niche non-commerciale, CA modeste assumé).

## ⛔ CONTRAINTE ANTI-PBN ABSOLUE
html5advent appartient au réseau d'Eric → **JAMAIS de lien depuis/vers les 12 autres sites**
(ni 301, ni éditorial, ni footer). Il reste **100 % autonome**. Sa valeur = son propre trafic, pas un boost réseau.

## IDENTITÉ / POSITIONNEMENT
Ressource sur le **web moderne / plateforme web** (HTML/CSS/JS, Web APIs, "what's new in the browser").
Fidèle à l'héritage : l'« advent calendar » de démos HTML5 (2010-2011).
**Hook différenciant** : revive un hub « Web Platform Advent » (24 démos/astuces) = aimant à backlinks → DR organique.

## STACK & INFRA
- **Astro static** (modèle coldwa.st), build `format: preserve`. Build sur **/tmp ext4**, jamais /mnt/c.
- Déploiement **Vercel** (gratuit, scope Eric). DNS → Vercel.
- **GA4 + GSC dès J0** (règle Eric impérative — via service-account `data/service-account.json` du repo NDD :
  GA4 propriété+stream+tag gtag, GSC vérif DNS TXT). Noter les IDs dans ce SPEC après création.
- **Multilingue FR/EN/ES** dès la création (règle Eric) + détection auto langue (Accept-Language, fallback EN,
  EN = locale prioritaire vu la niche dev). Slugs/hreflang/canonical par locale.

## PRÉSERVATION DU JUS LÉGACY (critique)
- Les backlinks pointent surtout vers la **racine** `http://html5advent.com/` (+ www + https).
- La racine DOIT répondre **200** (page d'accueil réelle). 301 propres : `http→https`, `www→apex`.
- Aucun lien légacy ne doit finir en 404. Pas de deep-paths légacy connus à mapper (contrairement à d'autres NDD).

## CONTENU — 1ʳᵉ vague (8-15 pages, kw validés DataForSEO AVANT écriture)
Dev long-tail KD bas, on-thème strict. Idées (à valider DataForSEO, logger keyword-validation-log.csv) :
- "Web platform features <année>" / nouveautés HTML-CSS-JS
- Guides Web APIs modernes (Canvas, Web Storage, Geolocation, WebSocket, Intersection Observer, View Transitions…)
- CSS moderne (container queries, :has(), nesting), JS moderne (modules, async)
- Hub "Web Platform Advent" (24 entrées) = pilier linkable
Règles contenu : honnêteté stricte (0 fab), **2 images vivantes** (hero + in-body, 2ᵉ légende vraie),
hero pas 2× /15 articles, schema TechArticle/FAQ.

## MONÉTISATION (modeste mais RÉELLE — mix référence + bas-funnel)
Le CA ne vient PAS des pages de pure référence (intention info) mais des **pages bas-funnel à intention
transactionnelle dev**. Donc le contenu DOIT mélanger 2 types :
- **~70 % référence/démo** (Web APIs, nouveautés HTML/CSS/JS, hub Advent) → trafic + autorité + GEO + backlinks. Convertit peu.
- **~30 % bas-funnel hosting/deploy** (ex: "meilleur VPS pour héberger un projet web 2026", "déployer un site
  Astro/static pas cher", "Contabo vs Hetzner pour dev", "hébergement pour app Node/PHP") → **c'est ÇA qui convertit.**
Programmes : **Contabo (EPC ~46€, jusqu'à 250€/vente) + Infomaniak (Awin pub 979469)** sur ces pages bas-funnel ;
optionnel cours dev / domaines si dispo. CTA par contenu, **≤2/article**, aligné, honnête.
Math réaliste : ~1000 visiteurs hosting-intent/mois → ~30-50 clics Contabo → ~15-25€/mois. Petit mais > 0.
Route `/go/[slug]` trackable (modèle coldwa). Vérifier chaque lien LIVE (curl → redirect aff_id).

## SEO / GEO
- schema.org complet (TechArticle/FAQ/Breadcrumb/Org), `llms.txt`, robots autorisant
  GPTBot/ClaudeBot/PerplexityBot/Google-Extended, sitemap, IndexNow à chaque publi.
- Maillage interne (entre guides + vers le hub Advent).

## INTÉGRATION GESTION QUOTIDIENNE (handoff)
- **Ajouter 1 entrée dans `scripts/cortex_sites.py` VELOCITY_SITES** (source unique → gsc-sync, velocity,
  dashboard, gsc-health, ahrefs-dr en dérivent automatiquement). slug=`html5advent`, repo_dir=`Html5Advent`,
  gsc=`sc-domain:html5advent.com` (ou URL-prefix), j0=date de mise en ligne, dr=51, niche dev.
  `hands_off=False` (géré par la session quotidienne).
- Velocity : site neuf → ramp prudent (≤1-2/j), piloté indexation GSC.

## ÉTAT / TODO (à cocher par l'exécutant)
- [ ] GSC vérifié (TXT) + GA4 créé (noter IDs ici)
- [ ] Vercel déployé, DNS, racine 200, 301 http/www OK
- [ ] disavow.txt soumis dans GSC
- [ ] 1ʳᵉ vague contenu (FR/EN/ES) live + indexNow
- [ ] CTA Contabo/Infomaniak câblés + vérifiés live
- [ ] llms.txt + schema + sitemap
- [ ] Entrée cortex_sites.py ajoutée
