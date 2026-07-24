/**
 * Dressly By Nishat — 404 Not Found Page
 * ড্রেসলি বাই নিশাত | Authentic Pakistani Luxury Suits & Designer Collections
 */

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#fdfaf5]">
      <div className="text-center space-y-8 max-w-lg">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#d4af37]/30 shadow-lg">
            <Image
              src="/images/dressly/logo.jpg"
              alt="Dressly By Nishat"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 404 Text */}
        <div className="space-y-3">
          <p className="text-8xl md:text-9xl font-bold text-[#7a1b38]/10 leading-none">404</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a0008]">
            পেজটি পাওয়া যাচ্ছে না
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা আর নেই। আমাদের হোম পেজে ফিরে যান।
          </p>
        </div>

        {/* Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7a1b38]/5 border border-[#d4af37]/20">
          <span className="text-[#d4af37] text-xs">✦</span>
          <p className="text-[11px] text-[#7a1b38] font-medium tracking-wide">
            Dressly By Nishat — Authentic Pakistani Luxury Suits & Designer Collections
          </p>
          <span className="text-[#d4af37] text-xs">✦</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-8 rounded-sm bg-[#7a1b38] text-[#fcfaf6] font-semibold text-sm hover:bg-[#5c132a] transition-all shadow-sm active:scale-[0.98] tracking-wide"
          >
            হোম পেজে যান
          </Link>
          <Link
            href="/collections/organza-luxury-suits"
            className="inline-flex items-center justify-center h-12 px-6 rounded-sm border-2 border-[#7a1b38]/30 text-[#7a1b38] text-sm font-semibold hover:bg-[#7a1b38]/5 hover:border-[#7a1b38] transition-all tracking-wide"
          >
            কালেকশন দেখুন
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-2 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <Link href="/about" className="hover:text-[#7a1b38] transition-colors font-medium">
            About Us
          </Link>
          <span className="text-[#d4af37]">·</span>
          <Link href="/contact" className="hover:text-[#7a1b38] transition-colors font-medium">
            Contact Us
          </Link>
          <span className="text-[#d4af37]">·</span>
          <a
            href="https://www.facebook.com/dresslybynishat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7a1b38] transition-colors font-medium"
          >
            Facebook Inbox
          </a>
        </div>
      </div>
    </div>
  );
}
