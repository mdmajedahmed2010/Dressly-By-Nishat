/* eslint-disable */
"use client";

/**
 * Dressly By Nishat — Home UI Orchestrator
 * ড্রেসলি বাই নিশাত | Authentic Pakistani Luxury Suits & Designer Collections
 * All images served locally from /public/images/dressly/
 */

import { HeroSlider, type HeroSlide } from "@/components/home/hero-slider";
import { TrustBadges } from "@/components/home/trust-badges";
import { CategoryGrid, type CategoryItem } from "@/components/home/category-grid";
import { NewArrivalsGrid, type ArrivalsProduct } from "@/components/home/new-arrivals-grid";
import { LookbookSection, type LookbookLook } from "@/components/home/lookbook-section";
import { CollectionsShowcase, type CollectionShowcaseItem } from "@/components/home/collections-showcase";
import { TestimonialsCarousel, type Testimonial } from "@/components/home/testimonials-carousel";
import { EditorialSection } from "@/components/home/editorial-section";
import { ASSETS } from "@/lib/demo-data";

/* ──────────────── Static Data — Dressly By Nishat ──────────────── */

// Hero slides featuring local brand images
const heroSlides: HeroSlide[] = [
  {
    image: ASSETS.banner,
    title: "EXQUISITE PAKISTANI LUXURY SUITS",
    subtitle:
      "Exclusive authentic Organza, Chiffon & Lawn 3-Piece collections — tailored for elegance and festive celebrations.",
    link: "/collections/organza-luxury-suits",
    overline: "EID COUTURE 2026",
    color: "from-black/70",
  },
  {
    image: ASSETS.heroImage,
    title: "ROYAL CHIFFON & EMBROIDERED PRET",
    subtitle:
      "Heavy zari and thread needlework dupattas paired with fine embroidered kameez. Cash on Delivery across Bangladesh.",
    link: "/collections/chiffon-embroidered-edition",
    overline: "FESTIVE EDITION",
    color: "from-[#7a1b38]/70",
  },
  {
    image: ASSETS.img16,
    title: "BRIDAL & RECEPTION LUXURY",
    subtitle:
      "Opulent Pakistani bridal suits with heavy hand embellishments and intricate zari borders for your most special occasions.",
    link: "/collections/bridal-special-collection",
    overline: "BRIDAL SPECIAL",
    color: "from-[#1a080c]/70",
  },
  {
    image: ASSETS.img4,
    title: "PREMIUM LAWN 3-PIECE COLLECTION",
    subtitle:
      "Breezy, lightweight summer lawn suits with embroidered organza & silk dupattas.",
    link: "/collections/premium-lawn-3piece",
    overline: "SUMMER ESSENTIALS",
    color: "from-[#12241b]/70",
  },
];

// Verified Customer Reviews
const testimonials: Testimonial[] = [
  {
    quote:
      "Dressly By Nishat-এর Pakistani Organza 3-piece ড্রেসটা হাতে পেয়ে আমি জাস্ট অভিভূত! কাপড়ের কোয়ালিটি এবং দোপাট্টার এমব্রয়ডারি অবিকল ছবির মত। ঢাকায় ১ দিনেই ডেলিভারি পেয়েছি!",
    author: "Tazreen Nahar",
    designation: "Verified Buyer — Dhanmondi, Dhaka",
    stars: 5,
  },
  {
    quote:
      "পাকিস্তানি ডিজাইনার ড্রেস কিনতে আমি সবসময় Dressly By Nishat কেই ট্রাস্ট করি। শিফন হেভি ওয়ার্কের ড্রেসটা বিয়ের অনুষ্ঠানে সবাই অনেক পছন্দ করেছে। ১০০% অরিজিনাল কালেকশন!",
    author: "Nusrat Jahan",
    designation: "Verified Buyer — Chattogram",
    stars: 5,
  },
  {
    quote:
      "ইনবক্সে খুব দ্রুত রেসপন্স করেছে এবং ক্যাশ অন ডেলিভারিতে শপিং করতে পেরে খুব ভালো লেগেছে। ড্রেসলি বাই নিশাত সত্যিই প্রিমিয়াম কোয়ালিটি প্রদান করে।",
    author: "Farhana Sharmin",
    designation: "Verified Buyer — Uttara, Dhaka",
    stars: 5,
  },
  {
    quote:
      "নিশাতের প্রতিটা কালেকশন ইউনিক! ব্রাইডাল এবং পার্টি ওয়ার ড্রেসগুলোর ফিনিশিং দারুণ। বন্ধুদের সবাইকে রেকমেন্ড করেছি।",
    author: "Sabrina Yeasmin",
    designation: "Verified Buyer — Sylhet",
    stars: 5,
  },
];

/* ──────────────── Main Component ──────────────── */

export function HomeUI({
  dbProducts,
  dbCategories,
}: {
  dbProducts: any[];
  dbCategories: any[];
}) {
  // Local asset images for categories
  const localCategoryImages: string[] = [
    ASSETS.img1,
    ASSETS.img2,
    ASSETS.img6,
    ASSETS.img4,
    ASSETS.img17,
    ASSETS.img16,
  ];

  /* ── Map DB categories OR use Dressly By Nishat defaults ── */
  const defaultCategories: CategoryItem[] = [
    {
      name: "Luxury Organza Suits",
      slug: "organza-luxury-suits",
      productCount: 5,
      image: ASSETS.img1,
    },
    {
      name: "Chiffon Embroidered Edition",
      slug: "chiffon-embroidered-edition",
      productCount: 4,
      image: ASSETS.img2,
    },
    {
      name: "Premium Lawn 3-Piece",
      slug: "premium-lawn-3piece",
      productCount: 4,
      image: ASSETS.img6,
    },
    {
      name: "Festive & Party Wear",
      slug: "festive-party-wear",
      productCount: 4,
      image: ASSETS.img4,
    },
    {
      name: "Velvet & Silk Pret",
      slug: "velvet-silk-pret",
      productCount: 3,
      image: ASSETS.img17,
    },
    {
      name: "Bridal Special Collection",
      slug: "bridal-special-collection",
      productCount: 3,
      image: ASSETS.img16,
    },
  ];

  const mappedCategories: CategoryItem[] =
    dbCategories && dbCategories.length > 0
      ? dbCategories.map((c: any, i: number) => ({
          name: c.name,
          slug: c.slug,
          productCount: c._count?.products ?? 0,
          image: c.image || localCategoryImages[i % localCategoryImages.length],
        }))
      : defaultCategories;

  /* ── Map DB products OR use Dressly By Nishat defaults ── */
  const defaultProducts: ArrivalsProduct[] = [
    {
      id: "dn-p1",
      name: "Pakistani Embroidered Organza 3-Piece Suit",
      category: "Luxury Organza Suits",
      price: 6850,
      compareAtPrice: 7950,
      image: ASSETS.img1,
      slug: "pakistani-embroidered-organza-3piece-suit",
      tag: "BESTSELLER",
    },
    {
      id: "dn-p2",
      name: "Royal Pastel Pink Organza Festive Suit",
      category: "Luxury Organza Suits",
      price: 7200,
      compareAtPrice: 8500,
      image: ASSETS.img3,
      slug: "royal-pastel-pink-organza-festive-suit",
      tag: "NEW",
    },
    {
      id: "dn-p3",
      name: "Chiffon Heavy Zari Embroidered 3-Piece Set",
      category: "Chiffon Embroidered Edition",
      price: 7800,
      compareAtPrice: 8900,
      image: ASSETS.img2,
      slug: "chiffon-heavy-zari-embroidered-3piece-set",
      tag: "EXCLUSIVE",
    },
    {
      id: "dn-p4",
      name: "Rose Gold Embroidered Pakistani Lawn 3-Piece",
      category: "Premium Lawn 3-Piece",
      price: 4950,
      compareAtPrice: 5800,
      image: ASSETS.img6,
      slug: "rose-gold-embroidered-pakistani-lawn-3piece",
      tag: "SUMMER",
    },
    {
      id: "dn-p5",
      name: "Emerald Green Pakistani Designer Festive Suit",
      category: "Festive & Party Wear",
      price: 8500,
      compareAtPrice: 9800,
      image: ASSETS.img4,
      slug: "emerald-green-pakistani-designer-festive-suit",
      tag: "PARTY WEAR",
    },
    {
      id: "dn-p6",
      name: "Grand Eid Edition Luxury Chiffon Three-Piece",
      category: "Chiffon Embroidered Edition",
      price: 9200,
      compareAtPrice: 10800,
      image: ASSETS.img13,
      slug: "grand-eid-edition-luxury-chiffon-three-piece",
      tag: "EID SPECIAL",
    },
    {
      id: "dn-p7",
      name: "Exclusive Royal Velvet Pakistani Bridal Suit",
      category: "Bridal Special Collection",
      price: 13500,
      compareAtPrice: 15500,
      image: ASSETS.img17,
      slug: "exclusive-royal-velvet-pakistani-bridal-suit",
      tag: "BRIDAL",
    },
    {
      id: "dn-p8",
      name: "Champagne Gold Pakistani Bridal Pret Suit",
      category: "Bridal Special Collection",
      price: 14500,
      compareAtPrice: 16800,
      image: ASSETS.img16,
      slug: "champagne-gold-pakistani-bridal-pret-suit",
      tag: "LUXURY",
    },
  ];

  const mappedProducts: ArrivalsProduct[] =
    dbProducts && dbProducts.length > 0
      ? dbProducts.map((p: any) => {
          const img =
            p.variants?.[0]?.images?.[0] || ASSETS.img1;
          const pPrice = Number(p.variants?.[0]?.price ?? p.basePrice);
          return {
            id: p.id,
            name: p.name,
            category: p.category?.name || "Pakistani Luxury Suit",
            price: pPrice,
            compareAtPrice: Math.round(pPrice * 1.15),
            image: img,
            slug: p.slug,
          };
        })
      : defaultProducts;

  /* ── Lookbook section ── */
  const lookbookLooks: LookbookLook[] = [
    {
      id: "lb-1",
      image: ASSETS.img13,
      title: "Royal Organza Trousseau",
      subtitle: "Pakistani Embroidered Organza 3-Piece Suit",
      slug: "pakistani-embroidered-organza-3piece-suit",
      price: 6850,
      tag: "EID EDIT",
    },
    {
      id: "lb-2",
      image: ASSETS.img16,
      title: "Haute Couture Bridal Edition",
      subtitle: "Champagne Gold Pakistani Bridal Pret Suit",
      slug: "champagne-gold-pakistani-bridal-pret-suit",
      price: 14500,
      tag: "BRIDAL EDITION",
    },
    {
      id: "lb-3",
      image: ASSETS.img4,
      title: "Festive Glamour",
      subtitle: "Festive Velvet Accent & Organza Party Suit",
      slug: "festive-velvet-accent-organza-party-suit",
      price: 9800,
      tag: "FESTIVE PRET",
    },
  ];

  /* ── Collections showcase ── */
  const allCollections: CollectionShowcaseItem[] = [
    {
      title: "Luxury Organza Suits",
      image: ASSETS.img1,
      href: "/collections/organza-luxury-suits",
      tag: "ORGANZA SPECIAL",
    },
    {
      title: "Chiffon Embroidered Edition",
      image: ASSETS.img2,
      href: "/collections/chiffon-embroidered-edition",
      tag: "HEAVY ZARI WORK",
    },
    {
      title: "Premium Lawn 3-Piece",
      image: ASSETS.img6,
      href: "/collections/premium-lawn-3piece",
      tag: "SUMMER ESSENTIALS",
    },
    {
      title: "Festive & Party Wear",
      image: ASSETS.img4,
      href: "/collections/festive-party-wear",
      tag: "PARTY WEAR EDIT",
    },
    {
      title: "Velvet & Silk Pret",
      image: ASSETS.img17,
      href: "/collections/velvet-silk-pret",
      tag: "ROYAL VELVET",
    },
    {
      title: "Bridal Special Collection",
      image: ASSETS.img16,
      href: "/collections/bridal-special-collection",
      tag: "BRIDAL COUTURE",
    },
  ];

  return (
    <div className="flex flex-col bg-[#fdfcfa] overflow-hidden">
      {/* 1. HERO — Eager loaded */}
      <HeroSlider slides={heroSlides} />

      {/* 2. TRUST BADGES — Lightweight */}
      <TrustBadges />

      {/* 3. CATEGORY GRID */}
      <CategoryGrid categories={mappedCategories} />

      {/* 4. NEW ARRIVALS */}
      <NewArrivalsGrid products={mappedProducts} />

      {/* 5. LOOKBOOK */}
      <LookbookSection looks={lookbookLooks} />

      {/* 6. ALL COLLECTIONS */}
      <CollectionsShowcase collections={allCollections} />

      {/* 7. TESTIMONIALS */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* 8. EDITORIAL / BRAND STORY */}
      <EditorialSection />
    </div>
  );
}
