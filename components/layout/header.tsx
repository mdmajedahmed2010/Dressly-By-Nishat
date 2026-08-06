"use client";

/**
 * Sew In Style by Farzana — Header Component
 * Sew In Style by Farzana | Premium Authentic Pakistani Luxury Suits & Designer Collections
 * Deep Maroon, Rose & Gold Elegance
 */

import Link from "next/link";
import Image from "next/image";
import { User, X } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";

const navLinks = [
  { href: "/collections/organza-luxury-suits", label: "Organza Suits" },
  { href: "/collections/chiffon-embroidered-edition", label: "Chiffon Edition" },
  { href: "/collections/premium-lawn-3piece", label: "Lawn Collection" },
  { href: "/collections/festive-party-wear", label: "Festive Wear" },
  { href: "/collections/bridal-special-collection", label: "Bridal Special" },
  { href: "/about", label: "About Us" },
];

const megaMenuData: Record<
  string,
  {
    categories: { label: string; href: string }[];
    styles: { label: string; href: string }[];
    featured: { title: string; subtitle: string; image: string; href: string };
  }
> = {
  "Organza Suits": {
    categories: [
      { label: "Shop All Organza Suits", href: "/collections/organza-luxury-suits" },
      { label: "Pakistani Embroidered Organza", href: "/collections/organza-luxury-suits" },
      { label: "Pastel Pink Organza", href: "/collections/organza-luxury-suits" },
      { label: "Cutwork Dupatta Organza", href: "/collections/organza-luxury-suits" },
    ],
    styles: [
      { label: "Unstitched 3-Piece Organza", href: "/collections/organza-luxury-suits" },
      { label: "Party Wear Organza Pret", href: "/collections/organza-luxury-suits" },
      { label: "Floral Handwork Organza", href: "/collections/organza-luxury-suits" },
    ],
    featured: {
      title: "Royal Organza Edition",
      subtitle: "Intricate cutwork dupattas & gold threadwork — From ৳5,500",
      image: "/images/728637838_1615289890013049_2658242435754841211_n.jpg",
      href: "/collections/organza-luxury-suits",
    },
  },
  "Chiffon Edition": {
    categories: [
      { label: "Shop All Chiffon Suits", href: "/collections/chiffon-embroidered-edition" },
      { label: "Heavy Zari Chiffon", href: "/collections/chiffon-embroidered-edition" },
      { label: "Royal Maroon Chiffon", href: "/collections/chiffon-embroidered-edition" },
    ],
    styles: [
      { label: "Sequined Chiffon Party Suit", href: "/collections/chiffon-embroidered-edition" },
      { label: "Pure Silk Chiffon Dupatta", href: "/collections/chiffon-embroidered-edition" },
    ],
    featured: {
      title: "Chiffon Heavy Zari Collection",
      subtitle: "Opulent thread & hand embroidery for reception & holud",
      image: "/images/728760397_1682205009864129_8763326460166934979_n.jpg",
      href: "/collections/chiffon-embroidered-edition",
    },
  },
  "Festive Wear": {
    categories: [
      { label: "Shop All Festive Wear", href: "/collections/festive-party-wear" },
      { label: "Emerald Green Designer Suit", href: "/collections/festive-party-wear" },
      { label: "Velvet Accent Festive Set", href: "/collections/festive-party-wear" },
    ],
    styles: [
      { label: "Holud & Mehndi Outfits", href: "/collections/festive-party-wear" },
      { label: "Wedding Guest Luxury Pret", href: "/collections/festive-party-wear" },
    ],
    featured: {
      title: "Festive & Party Wear 2026",
      subtitle: "Royal colors and heavy handwork embroidery for grand celebrations",
      image: "/images/729139236_1750557062791862_7222316665621924949_n.jpg",
      href: "/collections/festive-party-wear",
    },
  },
  "Bridal Special": {
    categories: [
      { label: "Shop All Bridal Suits", href: "/collections/bridal-special-collection" },
      { label: "Eid Couture Bridal Chiffon", href: "/collections/bridal-special-collection" },
      { label: "Exclusive Velvet Bridal Suit", href: "/collections/bridal-special-collection" },
    ],
    styles: [
      { label: "Reception & Bou-Bhat Pret", href: "/collections/bridal-special-collection" },
      { label: "Heavy Zari Bridal Dupatta", href: "/collections/bridal-special-collection" },
    ],
    featured: {
      title: "Exclusive Pakistani Bridal Pret",
      subtitle: "Heavy hand-embellished zari dupattas & velvet luxury suits",
      image: "/images/730749821_1615344106197724_7135912925053885740_n.jpg",
      href: "/collections/bridal-special-collection",
    },
  },
};

export function Header({ settings = {} }: { settings?: Record<string, unknown> }) {
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("dn_announcement_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => setShowAnnouncement(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem("dn_announcement_dismissed", "true");
  };

  const freeShippingThreshold = Number(settings.free_shipping_threshold || 5000);
  const announcementText =
    `✨ Sew In Style by Farzana — 100% Authentic Pakistani Luxury Suits | Free Express Delivery on orders over ৳${freeShippingThreshold.toLocaleString()} | Cash on Delivery Nationwide`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 border-b border-[#7a1b38]/15 shadow-sm transition-all duration-300">
      {/* Brand Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#7a1b38] text-[#fcfaf6] border-b border-[#d4af37]/30 text-center text-[9.5px] md:text-[10.5px] font-semibold tracking-[0.14em] md:tracking-[0.18em] uppercase py-2 md:py-2.5 px-6 relative">
          <p className="flex items-center justify-center gap-1.5 md:gap-2 truncate">
            <span className="text-[#d4af37] shrink-0">✦</span>
            <span className="md:hidden truncate">Sew In Style by Farzana • CASH ON DELIVERY</span>
            <span className="hidden md:inline">{announcementText}</span>
            <span className="text-[#d4af37] shrink-0">✦</span>
          </p>
          <button
            onClick={dismissAnnouncement}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#fcfaf6]/70 hover:text-[#fcfaf6] transition-colors p-1"
            aria-label="Close announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="relative">
        <div className="container mx-auto px-6 md:px-12 static">
          <div className="flex h-[72px] items-center justify-between">
            {/* Left: Mobile menu + Brand Logo + Name */}
            <div className="flex items-center gap-4">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <Image
                    src={typeof settings?.store_logo === "string" && settings.store_logo ? settings.store_logo : "/images/logo.jpg"}
                    alt="Sew In Style by Farzana"
                    width={44}
                    height={44}
                    className="h-11 w-11 object-cover rounded-full ring-2 ring-[#d4af37]/40 group-hover:ring-[#d4af37] transition-all duration-300"
                  />
                </div>
                <div className="hidden sm:block">
                  <p className="text-[13px] font-extrabold tracking-[0.08em] text-[#7a1b38] leading-tight uppercase">
                    Sew In Style by Farzana
                  </p>
                  <p className="text-[9px] font-medium tracking-[0.18em] text-[#7a1b38]/70 uppercase">
                    Sew In Style by Farzana
                  </p>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 static" aria-label="Main navigation">
              {navLinks.map((link) => {
                const hasMegaMenu = link.label in megaMenuData;
                const menu = megaMenuData[link.label];

                if (hasMegaMenu && menu) {
                  return (
                    <MegaMenu key={link.href} label={link.label} href={link.href} data={menu} />
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#141414]/80 hover:text-[#7a1b38] py-6 block transition-colors relative after:absolute after:bottom-1.5 after:left-0 after:w-full after:h-[1.5px] after:bg-[#d4af37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search + Cart + User */}
            <div className="flex items-center gap-1.5">
              <SearchBar />
              <CartButton />
              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#7a1b38]/70 hover:text-[#7a1b38] hover:bg-[#fcf5f7] transition-all"
                aria-label="My account"
              >
                <User className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
