/**
 * Dressly By Nishat — All Collections Page
 * Route: /collections
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { prisma } from "@/lib/db";
import { CATEGORIES } from "@/lib/demo-data";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "All Collections — Dressly By Nishat",
  description:
    "Explore exclusive Dressly By Nishat collections — Luxury Organza Suits, Chiffon Embroidered Edition, Premium Lawn 3-Piece, Festive & Bridal Couture.",
};

export default async function CollectionsPage() {
  const curatedCollections = [
    {
      title: "Luxury Organza Suits",
      image: "/images/dressly/738759155_122236921304097859_517106012241883883_n.jpg",
      href: "/collections/organza-luxury-suits",
      tag: "ORGANZA SPECIAL",
      desc: "Intricately embroidered Pakistani organza 3-piece luxury suits with handwork dupattas.",
    },
    {
      title: "Chiffon Embroidered Edition",
      image: "/images/dressly/739118005_122236931624097859_3877426082371806523_n.jpg",
      href: "/collections/chiffon-embroidered-edition",
      tag: "HEAVY ZARI WORK",
      desc: "Pure chiffon designer suites with heavy zari, sequin, and thread needlework.",
    },
    {
      title: "Premium Lawn 3-Piece",
      image: "/images/dressly/743361783_122237467322097859_7772378286743424024_n.jpg",
      href: "/collections/premium-lawn-3piece",
      tag: "SUMMER ESSENTIALS",
      desc: "Breezy luxury lawn collections featuring digital printed & embroidered lawn kameez.",
    },
    {
      title: "Festive & Party Wear",
      image: "/images/dressly/741464699_122237170736097859_278617854425347317_n.jpg",
      href: "/collections/festive-party-wear",
      tag: "PARTY WEAR EDIT",
      desc: "Opulent festive 3-piece suits ideal for Holud, Receptions, and Wedding Party celebrations.",
    },
    {
      title: "Velvet & Silk Pret",
      image: "/images/dressly/755332243_122238524504097859_5178805553998092524_n.jpg",
      href: "/collections/velvet-silk-pret",
      tag: "ROYAL VELVET",
      desc: "Royal micro-velvet and pure silk unstitched & ready-to-wear designer suits.",
    },
    {
      title: "Bridal Special Collection",
      image: "/images/dressly/753865484_122238524498097859_5700651935379609574_n.jpg",
      href: "/collections/bridal-special-collection",
      tag: "BRIDAL COUTURE",
      desc: "Exclusive Pakistani bridal suits with heavy hand-embellished zari dupattas.",
    },
  ];

  // Also fetch DB categories so users can easily browse by category too
  let categories = await prisma.category.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  if (categories.length === 0) {
    categories = CATEGORIES.map((cat, i) => ({
      id: `demo-cat-${i}`,
      name: cat.name,
      slug: cat.slug,
      parentId: null,
      image: cat.image,
      sortOrder: i,
      isActive: true,
      seoTitle: null,
      seoDesc: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Collections" }]} />

        {/* Luxury Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#7a1b38]/50 bg-[#7a1b38]/10 text-[#7a1b38] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ DRESSLY BY NISHAT CURATIONS ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#7a1b38] font-heading">
            All Collections
          </h1>
          <div className="w-20 h-[2px] bg-[#d4af37] mx-auto mt-5" />
          <p className="text-neutral-600 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            Discover our curated seasonal edits, haute-couture bridal trousseau series, and authentic Pakistani 3-piece luxury suits.
          </p>
        </div>

        {/* Curated Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 mb-24">
          {curatedCollections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden rounded-sm shadow-luxury hover:shadow-gold-glow transition-all duration-500 aspect-[4/5] bg-neutral-900 block border border-[#e8e6e1]/40"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-3.5 border border-[#d4af37]/25 group-hover:border-[#d4af37]/70 transition-all duration-500 pointer-events-none z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[9.5px] uppercase tracking-[0.24em] font-bold mb-2.5">
                  ✦ {col.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-white group-hover:text-[#d4af37] transition-colors">
                  {col.title}
                </h2>
                <p className="text-xs md:text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
                <span className="text-[11px] text-[#d4af37] uppercase tracking-[0.16em] font-bold mt-4 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Category Switcher */}
        <div className="border-t border-black/10 pt-12 pb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-[#1a1a1a]">Shop by Category</h3>
            <Link
              href="/categories"
              className="text-xs uppercase tracking-widest font-bold text-[#7a1b38] hover:underline"
            >
              View All Categories →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="px-4 py-2 rounded-sm border border-black/15 bg-white hover:bg-[#7a1b38] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
