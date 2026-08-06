/**
 * Sew In Style by Farzana — Demo Product Data & Catalog
 * Sew In Style by Farzana | Premium Authentic Pakistani Luxury Suits & Designer Collections
 * All images served locally from /public/images/Sew In Style/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /public/images/Sew In Style/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/images/logo_hq.jpg",
  banner: "/images/banner.png",
  heroImage: "/images/728637838_1615289890013049_2658242435754841211_n_hq.jpg",
  img1: "/images/728637838_1615289890013049_2658242435754841211_n_hq.jpg",
  img2: "/images/728760397_1682205009864129_8763326460166934979_n_hq.jpg",
  img3: "/images/729139236_1750557062791862_7222316665621924949_n_hq.jpg",
  img4: "/images/730749821_1615344106197724_7135912925053885740_n_hq.jpg",
  img5: "/images/731031468_1904149560270689_3282748209998895624_n_hq.jpg",
  img6: "/images/731093476_27189608070706041_6749501909087384384_n_hq.jpg",
  img7: "/images/731808899_1334308374831843_7222113530617211681_n_hq.jpg",
  img8: "/images/732675634_955669617521797_2773457596092441066_n_hq.jpg",
  img9: "/images/733157142_1920826938559927_4791560861567041341_n_hq.jpg",
  img10: "/images/733209465_1571577664628184_4158579103692325024_n_hq.jpg",
  img11: "/images/733443298_1029214096246585_915180975862635647_n_hq.jpg",
  img12: "/images/734384536_1562219958955593_3047803468069606658_n_hq.jpg",
  img13: "/images/734664308_1669348764338039_7400307755056890326_n_hq.jpg",
  img14: "/images/734685929_959330833809272_6343974826253921814_n_hq.jpg",
  img15: "/images/731031468_1904149560270689_3282748209998895624_n_hq.jpg",
  img16: "/images/732675634_955669617521797_2773457596092441066_n_hq.jpg",
  img17: "/images/733157142_1920826938559927_4791560861567041341_n_hq.jpg",
};

// ═══════════════════════════════════════════
// Product Categories — Sew In Style by Farzana
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Luxury Organza Suits",
    slug: "organza-luxury-suits",
    description: "Intricately embroidered Pakistani organza 3-piece luxury suits with handwork dupattas.",
    image: ASSETS.img1,
    productCount: 5,
  },
  {
    name: "Chiffon Embroidered Edition",
    slug: "chiffon-embroidered-edition",
    description: "Pure chiffon designer suites with heavy zari, sequin, and thread needlework.",
    image: ASSETS.img2,
    productCount: 4,
  },
  {
    name: "Premium Lawn 3-Piece",
    slug: "premium-lawn-3piece",
    description: "Breezy luxury lawn collections featuring digital printed & embroidered lawn kameez with organza dupatta.",
    image: ASSETS.img6,
    productCount: 4,
  },
  {
    name: "Festive & Party Wear",
    slug: "festive-party-wear",
    description: "Opulent festive 3-piece suits ideal for Holud, Receptions, and Wedding Party celebrations.",
    image: ASSETS.img4,
    productCount: 4,
  },
  {
    name: "Velvet & Silk Pret",
    slug: "velvet-silk-pret",
    description: "Royal micro-velvet and pure silk unstitched & ready-to-wear designer suits.",
    image: ASSETS.img17,
    productCount: 3,
  },
  {
    name: "Bridal Special Collection",
    slug: "bridal-special-collection",
    description: "Exclusive Pakistani bridal suits with heavy hand-embellished zari dupattas & cutwork detail.",
    image: ASSETS.img16,
    productCount: 3,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-eid-2026",
    title: "Eid Couture Luxury 2026",
    slug: "eid-couture-2026",
    subtitle: "Exclusive Pakistani Organza & Chiffon 3-Piece Festive Drops",
    image: ASSETS.img16,
    itemCount: 8,
  },
  {
    id: "col-organza-royal",
    title: "Royal Organza Edition",
    slug: "royal-organza-edition",
    subtitle: "Lightweight Elegance with Heavy Embroidered Cutwork Dupattas",
    image: ASSETS.img1,
    itemCount: 6,
  },
  {
    id: "col-lawn-festive",
    title: "Festive Lawn & Chiffon",
    slug: "festive-lawn-chiffon",
    subtitle: "Vibrant Summer & Spring Luxury Suits for Everyday Glamour",
    image: ASSETS.img6,
    itemCount: 6,
  },
];

// ═══════════════════════════════════════════
// All Products — Sew In Style by Farzana Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  // --- ORGANZA LUXURY SUITS ---
  {
    id: "dn-001",
    name: "Pakistani Embroidered Organza 3-Piece Suit",
    slug: "pakistani-embroidered-organza-3piece-suit",
    price: 5800,
    compareAtPrice: 6500,
    image: ASSETS.img1,
    category: "Luxury Organza Suits",
    isNew: true,
  },
  {
    id: "dn-002",
    name: "Royal Pastel Pink Organza Festive Suit",
    slug: "royal-pastel-pink-organza-festive-suit",
    price: 6200,
    compareAtPrice: 7000,
    image: ASSETS.img8,
    category: "Luxury Organza Suits",
    isNew: true,
  },
  {
    id: "dn-003",
    name: "Lilac Floral Organza Cutwork Dupatta Suit",
    slug: "lilac-floral-organza-cutwork-dupatta-suit",
    price: 6800,
    compareAtPrice: 7800,
    image: ASSETS.img13,
    category: "Luxury Organza Suits",
  },
  {
    id: "dn-004",
    name: "Peach Silk Organza Embroidered Unstitched Suit",
    slug: "peach-silk-organza-embroidered-suit",
    price: 5500,
    compareAtPrice: 6200,
    image: ASSETS.img14,
    category: "Luxury Organza Suits",
  },

  // --- CHIFFON EMBROIDERED EDITION ---
  {
    id: "dn-005",
    name: "Chiffon Heavy Zari Embroidered 3-Piece Set",
    slug: "chiffon-heavy-zari-embroidered-3piece-set",
    price: 7500,
    compareAtPrice: 8500,
    image: ASSETS.img2,
    category: "Chiffon Embroidered Edition",
    isNew: true,
  },
  {
    id: "dn-006",
    name: "Royal Maroon Chiffon Designer Party Wear",
    slug: "royal-maroon-chiffon-designer-party-wear",
    price: 8200,
    compareAtPrice: 9500,
    image: ASSETS.img5,
    category: "Chiffon Embroidered Edition",
    isNew: true,
  },
  {
    id: "dn-007",
    name: "Deep Violet Chiffon Handwork Dupatta Suit",
    slug: "deep-violet-chiffon-handwork-dupatta-suit",
    price: 7900,
    compareAtPrice: 8800,
    image: ASSETS.img7,
    category: "Chiffon Embroidered Edition",
  },
  {
    id: "dn-008",
    name: "Royal Blue Sequined Chiffon Festive Suit",
    slug: "royal-blue-sequined-chiffon-festive-suit",
    price: 8500,
    compareAtPrice: 9800,
    image: ASSETS.img10,
    category: "Chiffon Embroidered Edition",
  },

  // --- PREMIUM LAWN 3-PIECE ---
  {
    id: "dn-009",
    name: "Rose Gold Embroidered Pakistani Lawn 3-Piece",
    slug: "rose-gold-embroidered-pakistani-lawn-3piece",
    price: 4500,
    compareAtPrice: 5200,
    image: ASSETS.img6,
    category: "Premium Lawn 3-Piece",
    isNew: true,
  },
  {
    id: "dn-010",
    name: "Mint Green Printed Lawn with Silk Dupatta",
    slug: "mint-green-printed-lawn-silk-dupatta",
    price: 4200,
    compareAtPrice: 4800,
    image: ASSETS.img9,
    category: "Premium Lawn 3-Piece",
  },
  {
    id: "dn-011",
    name: "Ivory White Premium Lawn Unstitched Suit",
    slug: "ivory-white-premium-lawn-unstitched-suit",
    price: 3900,
    compareAtPrice: 4500,
    image: ASSETS.img15,
    category: "Premium Lawn 3-Piece",
  },

  // --- FESTIVE & PARTY WEAR ---
  {
    id: "dn-012",
    name: "Emerald Green Pakistani Designer Festive Suit",
    slug: "emerald-green-pakistani-designer-festive-suit",
    price: 9200,
    compareAtPrice: 10500,
    image: ASSETS.img3,
    category: "Festive & Party Wear",
    isNew: true,
  },
  {
    id: "dn-013",
    name: "Festive Velvet Accent & Organza Party Suit",
    slug: "festive-velvet-accent-organza-party-suit",
    price: 9800,
    compareAtPrice: 11000,
    image: ASSETS.img4,
    category: "Festive & Party Wear",
  },
  {
    id: "dn-014",
    name: "Crimson Red Zari Threadwork Festive Set",
    slug: "crimson-red-zari-threadwork-festive-set",
    price: 8800,
    compareAtPrice: 9900,
    image: ASSETS.img12,
    category: "Festive & Party Wear",
  },

  // --- BRIDAL & VELVET SPECIAL ---
  {
    id: "dn-015",
    name: "Grand Eid Edition Luxury Chiffon Three-Piece",
    slug: "grand-eid-edition-luxury-chiffon-three-piece",
    price: 12500,
    compareAtPrice: 14500,
    image: ASSETS.img16,
    category: "Bridal Special Collection",
    isNew: true,
  },
  {
    id: "dn-016",
    name: "Exclusive Royal Velvet Pakistani Bridal Suit",
    slug: "exclusive-royal-velvet-pakistani-bridal-suit",
    price: 14500,
    compareAtPrice: 17000,
    image: ASSETS.img17,
    category: "Velvet & Silk Pret",
    isNew: true,
  },
  {
    id: "dn-017",
    name: "Champagne Gold Pakistani Bridal Pret Suit",
    slug: "champagne-gold-pakistani-bridal-pret-suit",
    price: 11800,
    compareAtPrice: 13500,
    image: ASSETS.img11,
    category: "Bridal Special Collection",
  },
];

// ═══════════════════════════════════════════
// Filtered Helper Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 8);
export const ORGANZA_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Luxury Organza Suits");
export const CHIFFON_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Chiffon Embroidered Edition");
export const LAWN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Premium Lawn 3-Piece");
export const BRIDAL_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Bridal Special Collection" || p.category === "Velvet & Silk Pret");

// Helper to filter by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "organza-luxury-suits":
      return ORGANZA_PRODUCTS;
    case "chiffon-embroidered-edition":
      return CHIFFON_PRODUCTS;
    case "premium-lawn-3piece":
      return LAWN_PRODUCTS;
    case "festive-party-wear":
      return ALL_PRODUCTS.filter((p) => p.category === "Festive & Party Wear");
    case "velvet-silk-pret":
      return ALL_PRODUCTS.filter((p) => p.category === "Velvet & Silk Pret");
    case "bridal-special-collection":
      return BRIDAL_PRODUCTS;
    case "new-arrivals":
      return NEW_ARRIVALS;
    case "featured":
      return FEATURED_PRODUCTS;
    default:
      return ALL_PRODUCTS;
  }
}
