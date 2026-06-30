// Real hosting products referenced on commercial pages, for honest schema.org Product/Offer/ItemList.
// HONESTY RULES (Eric, IMPÉRATIF):
//  - brand/name = the REAL product (never "HTML5 Advent").
//  - NO rating / aggregateRating / Review here: the pages display no rating, so schema must not invent one.
//  - `offers` is emitted ONLY when a real, dated price is VISIBLE on the page that references it.
//    Contabo Cloud VPS list prices below are the genuine published EUR/month (12-month term, ex. VAT)
//    as of June 2026 - they are shown verbatim on the contabo-review page, which is the only page
//    that surfaces an Offer. Every other page emits Product WITHOUT Offer (no visible price).
//  - Providers with no firm price we display (Hetzner, OVH, DigitalOcean…) → Product, never an Offer.

export const PRODUCTS = {
  contabo: {
    name: 'Contabo VPS',
    brand: 'Contabo',
    category: 'VPS / virtual private server hosting',
    url: 'https://contabo.com/',
    description:
      'Unmanaged virtual private servers from a German provider, known for generous CPU, RAM and storage allocations at low monthly prices.',
    // Real, dated list prices (Contabo Cloud VPS, 12-month term, ex. VAT, EUR/month, June 2026).
    // Only emitted as Offer where these prices are shown in the page body (contabo-review).
    offers: [
      { sku: 'cloud-vps-10', name: 'Contabo Cloud VPS 10', price: '5.50' },
      { sku: 'cloud-vps-20', name: 'Contabo Cloud VPS 20', price: '7.50' },
      { sku: 'cloud-vps-30', name: 'Contabo Cloud VPS 30', price: '14.00' },
      { sku: 'cloud-vps-40', name: 'Contabo Cloud VPS 40', price: '25.00' },
    ],
    priceCurrency: 'EUR',
    // Date the listed prices were observed; surfaced as priceValidUntil context.
    priceObservedDate: '2026-06-01',
  },
  hetzner: {
    name: 'Hetzner Cloud',
    brand: 'Hetzner',
    category: 'Cloud / VPS hosting',
    url: 'https://www.hetzner.com/cloud',
    description:
      'European cloud and dedicated server provider known for strong price-to-performance and EU datacenters.',
  },
  ovh: {
    name: 'OVHcloud VPS',
    brand: 'OVHcloud',
    category: 'VPS / cloud hosting',
    url: 'https://www.ovhcloud.com/',
    description:
      'European hosting provider offering VPS, dedicated servers and a public cloud across global datacenters.',
  },
  digitalocean: {
    name: 'DigitalOcean Droplets',
    brand: 'DigitalOcean',
    category: 'Cloud / VPS hosting',
    url: 'https://www.digitalocean.com/',
    description:
      'Developer-focused cloud provider offering virtual machines (Droplets), managed databases and app platforms.',
  },
};

// Build a schema.org node for one product key.
// withOffers=true emits Offer(s) - ONLY pass true when the prices are visible on the page.
// asSoftwareApplication=true → SoftwareApplication (single-product review); else → Product.
export function productNode(key, { withOffers = false, asSoftwareApplication = false } = {}) {
  const p = PRODUCTS[key];
  if (!p) return null;
  const node = {
    '@type': asSoftwareApplication ? 'SoftwareApplication' : 'Product',
    name: p.name,
    brand: { '@type': 'Brand', name: p.brand },
    description: p.description,
    url: p.url,
  };
  if (asSoftwareApplication) {
    node.applicationCategory = 'WebApplication';
    node.operatingSystem = 'Linux';
  } else {
    node.category = p.category;
  }
  if (withOffers && Array.isArray(p.offers) && p.offers.length) {
    node.offers = p.offers.map((o) => ({
      '@type': 'Offer',
      name: o.name,
      sku: o.sku,
      price: o.price,
      priceCurrency: p.priceCurrency,
      priceValidUntil: '2026-12-31',
      url: p.url,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: p.brand },
    }));
  }
  return node;
}

// Build an ItemList of Products from an ordered list of product keys.
// No offers in list items (prices aren't shown per-item on comparison pages) → honest.
export function itemListNode(keys, listName) {
  const items = keys
    .map((key) => productNode(key, { withOffers: false }))
    .filter(Boolean);
  if (!items.length) return null;
  return {
    '@type': 'ItemList',
    name: listName,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item,
    })),
  };
}
