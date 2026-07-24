"use client";

/**
 * Dressly By Nishat — Footer Component
 * ড্রেসলি বাই নিশাত | Premium Authentic Pakistani Luxury Suits & Designer Collections
 */

import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const shopLinks = [
  { href: "/collections/organza-luxury-suits", label: "Luxury Organza Suits" },
  { href: "/collections/chiffon-embroidered-edition", label: "Chiffon Embroidered" },
  { href: "/collections/premium-lawn-3piece", label: "Premium Lawn 3-Piece" },
  { href: "/collections/festive-party-wear", label: "Festive & Party Wear" },
  { href: "/collections/velvet-silk-pret", label: "Velvet & Silk Pret" },
  { href: "/collections/bridal-special-collection", label: "Bridal Special Collection" },
];

const helpLinks = [
  { href: "/track-order", label: "Track Order" },
  { href: "/contact", label: "Contact Us" },
  { href: "/refund-policy", label: "Refund & Exchange Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/about", label: "About Us" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  return (
    <footer className="bg-[#fcfaf6] border-t border-[#7a1b38]/15">
      {/* Brand Newsletter Section — Deep Maroon */}
      <div className="bg-[#7a1b38] text-white py-16 md:py-20 border-y border-[#d4af37]/25 relative overflow-hidden">
        {/* Gold radial glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#d4af37]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3 text-center md:text-left max-w-lg">
              <span className="inline-block px-3 py-1 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#fcfaf6] text-[9.5px] uppercase tracking-[0.28em] font-bold">
                ড্রেসলি বাই নিশাত ক্লায়েন্ট সার্কেল
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-heading">
                Join Dressly By Nishat VIPs
              </h3>
              <p className="text-xs md:text-sm text-neutral-200 leading-relaxed font-sans">
                Subscribe to get early access to our newest Pakistani luxury suit releases, Eid drops,
                and exclusive client discounts directly to your inbox.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("ধন্যবাদ! আপনাকে Dressly By Nishat পরিবারে স্বাগতম!");
              }}
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3 items-stretch max-w-md shrink-0"
            >
              <input
                type="email"
                required
                placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                className="h-12 px-5 bg-neutral-900/90 border border-neutral-700/80 text-white text-xs placeholder:text-neutral-400 rounded-sm focus:outline-none focus:border-[#d4af37] w-full sm:w-72 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-7 bg-[#d4af37] hover:bg-[#c9a42e] text-[#7a1b38] text-xs font-bold uppercase tracking-[0.16em] rounded-sm transition-all shadow-lg active:scale-[0.98] cursor-pointer"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={typeof settings.store_logo === "string" && settings.store_logo ? settings.store_logo : "/images/dressly/logo.jpg"}
                alt="Dressly By Nishat"
                width={48}
                height={48}
                className="h-12 w-12 object-cover rounded-full ring-2 ring-[#d4af37]/40"
              />
              <div>
                <p className="text-[13px] font-extrabold text-[#7a1b38] uppercase tracking-wide">
                  Dressly By Nishat
                </p>
                <p className="text-[10px] text-[#7a1b38]/70 font-medium">ড্রেসলি বাই নিশাত</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Exclusive authentic Pakistani luxury 3-piece suits, organza, chiffon & designer lawn collections in Bangladesh. Trusted by 52K+ fashion lovers.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={settings.social_facebook || BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7a1b38]/60 hover:text-[#7a1b38] transition-colors flex items-center gap-2 text-xs font-bold"
                aria-label="Facebook Page"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7a1b38] mb-4">
              কালেকশনসমূহ
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#7a1b38] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7a1b38] mb-4">
              গ্রাহক সেবা
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#7a1b38] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7a1b38] mb-4">
              যোগাযোগ করুন
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground font-medium">
              <li>
                <a
                  href={`tel:${settings.store_phone || BUSINESS.PHONE}`}
                  className="hover:text-[#7a1b38] transition-colors"
                >
                  {settings.store_phone || BUSINESS.PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.store_email || BUSINESS.EMAIL}`}
                  className="hover:text-[#7a1b38] transition-colors"
                >
                  {settings.store_email || BUSINESS.EMAIL}
                </a>
              </li>
              <li className="leading-relaxed pt-1 text-[12px]">
                {settings.store_address || BUSINESS.ADDRESS}
              </li>
              <li className="pt-1">
                <a
                  href={BUSINESS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 bg-[#7a1b38]/10 text-[#7a1b38] text-[10px] font-bold rounded uppercase tracking-wider hover:bg-[#7a1b38] hover:text-white transition-all"
                >
                  Facebook Inbox order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#7a1b38]/15">
        <div className="container mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Dressly By Nishat (ড্রেসলি বাই নিশাত). All rights reserved.</p>
          <p>
            Cash on Delivery&nbsp;|&nbsp;Dhaka: ৳{settings.shipping_dhaka || 80}&nbsp;|&nbsp;
            Outside: ৳{settings.shipping_outside || 150}&nbsp;|&nbsp;100% Authentic Guaranteed
          </p>
        </div>
      </div>
    </footer>
  );
}
