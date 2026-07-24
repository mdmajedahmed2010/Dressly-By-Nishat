"use client";

/**
 * Dressly By Nishat — Short Brand Story Section (Homepage)
 * ড্রেসলি বাই নিশাত | Authentic Pakistani Luxury Suits & Designer Collections
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function EditorialSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fdfaf5] relative border-y border-[#d4af37]/30 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-[#d4af37]/20 hidden lg:block" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px 0px" }}
        className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 bg-[#7a1b38]/5 border border-[#d4af37]/30 rounded-sm -z-10 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shadow-md">
              <Image
                src="/images/dressly/image.jpg"
                alt="Dressly By Nishat — Luxury Pakistani Fashion"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-7 space-y-5 lg:pl-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#7a1b38] animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a1b38] font-bold">
                  ABOUT DRESSLY BY NISHAT
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-[#1a0008] font-heading">
                Dedicated to <span className="italic font-normal text-[#7a1b38]">Pakistani Luxury Fashion</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              Dressly By Nishat is a premier boutique destination in Bangladesh dedicated to curated authentic Pakistani luxury 3-piece suits, organza, embroidered chiffon, and designer lawn collections.
            </p>

            <div className="p-4 md:p-5 bg-white border-l-4 border-[#7a1b38] rounded-sm shadow-sm">
              <p className="text-xs md:text-sm text-[#1a0008] leading-relaxed font-medium italic">
                &ldquo;We empower women with elegant, culturally rich festive attire, bringing authentic Pakistani luxury suits with 100% guarantee and fast cash-on-delivery across Bangladesh.&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#7a1b38] hover:bg-[#5c132a] text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-luxury hover:shadow-gold-glow border border-[#d4af37]/40 active:scale-[0.98]"
              >
                Explore Collections
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7a1b38] border-b-2 border-[#d4af37] hover:border-[#7a1b38] pb-1 transition-all"
              >
                Read Full Story
                <ArrowRight className="h-3.5 w-3.5 text-[#d4af37]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
