"use client";

/**
 * BIBAZ — Product Card (Premium v4.0)
 * Enhanced with wishlist button, low stock badge, and hover action bar.
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { useQuickViewStore } from "@/store/quick-view-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { CURRENCY } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number | null;
  image: string;
  category?: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  images?: string[];
  secondaryImage?: string;
  isBestseller?: boolean;
  stock?: number;
}

function getSecondaryImage(
  image: string,
  images?: string[],
  explicitSecondary?: string
): string {
  if (explicitSecondary && explicitSecondary !== image) return explicitSecondary;
  if (images && Array.isArray(images) && images.length > 1) {
    const second = images.find(
      (img) => img && img !== image && img !== "null" && img !== "undefined"
    );
    if (second) return second;
  }
  if (!image) return "";

  if (image.includes("borka 1")) return "/images/products/borka/borka 2.jpg";
  if (image.includes("borka 2")) return "/images/products/borka/borka 3.jpg";
  if (image.includes("borka 3")) return "/images/products/borka/borka 4.jpg";
  if (image.includes("borka 4")) return "/images/products/borka/borka 1.jpg";

  if (image.includes("bouthik 1")) return "/images/products/boutique/bouthik 2.webp";
  if (image.includes("bouthik 2")) return "/images/products/boutique/bouthik 3.webp";
  if (image.includes("bouthik 3")) return "/images/products/boutique/bouthik 4.webp";
  if (image.includes("bouthik 4")) return "/images/products/boutique/bouthik 1.webp";

  if (image.includes("tree prices 1")) return "/images/products/three-piece/tree prices 2.webp";
  if (image.includes("tree prices 2")) return "/images/products/three-piece/tree prices 3.webp";
  if (image.includes("tree prices 3")) return "/images/products/three-piece/tree prices 4.webp";
  if (image.includes("tree prices 4")) return "/images/products/three-piece/tree prices 1.webp";

  if (image.includes("0560000083852")) return "/images/products/saree/shari 2.webp";
  if (image.includes("shari 2")) return "/images/products/saree/shari 3.webp";
  if (image.includes("shari 3")) return "/images/products/saree/shari 4.webp";
  if (image.includes("shari 4")) return "/images/products/saree/shari 5.webp";
  if (image.includes("shari 5")) return "/images/products/saree/0560000083852.webp";

  return image;
}

export function ProductCard({
  id,
  name,
  slug,
  price,
  compareAtPrice,
  image,
  category,
  isNew,
  isSoldOut,
  images,
  secondaryImage: explicitSecondary,
  isBestseller,
  stock,
}: ProductCardProps) {
  const hasDiscount = compareAtPrice && compareAtPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;

  const secondaryImage = getSecondaryImage(image, images, explicitSecondary);
  const hasSecondaryImage = secondaryImage !== image && Boolean(secondaryImage);

  const openQuickView = useQuickViewStore((state) => state.openQuickView);
  const wishlistItems = useWishlistStore((state) => state.items);
  const toggleWishlistItem = useWishlistStore((state) => state.toggleItem);
  const isWishlisted = wishlistItems.some((i) => i.id === id);

  const [primaryLoaded, setPrimaryLoaded] = useState(false);
  const [secondaryLoaded, setSecondaryLoaded] = useState(false);
  const [secondaryError, setSecondaryError] = useState(false);

  const canShowSecondary = hasSecondaryImage && secondaryLoaded && !secondaryError;

  const isLowStock = !isSoldOut && typeof stock === "number" && stock > 0 && stock <= 5;

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView({
      id,
      name,
      slug,
      price,
      compareAtPrice,
      image,
      category,
      isNew,
      isSoldOut,
    });
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlistItem({
      id,
      name,
      slug,
      price,
      image,
    });
  };

  return (
    <Link
      href={`/products/${slug}`}
      className="group block"
      aria-label={`View ${name} - ${CURRENCY.SYMBOL}${price}`}
    >
      {/* Image Container — 3:4 ratio, editorial sharp edges */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-3 md:mb-4">
        {/* Primary Image */}
        <Image
          src={image || "/images/products/placeholder.jpg"}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-all duration-300 ${
            canShowSecondary
              ? "group-hover:opacity-0 scale-100 group-hover:scale-105"
              : "group-hover:scale-105"
          }`}
          onLoad={() => setPrimaryLoaded(true)}
          onError={() => setPrimaryLoaded(true)}
        />

        {/* Secondary Image Swap on Hover */}
        {hasSecondaryImage && !secondaryError && (
          <Image
            src={secondaryImage}
            alt={`${name} detail view`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover absolute inset-0 transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) scale-103 group-hover:scale-100 ${
              canShowSecondary ? "opacity-0 group-hover:opacity-100" : "opacity-0"
            }`}
            onLoad={() => setSecondaryLoaded(true)}
            onError={() => setSecondaryError(true)}
          />
        )}

        {/* Badges — minimal, top-left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {isBestseller && (
            <span className="inline-flex items-center px-2.5 py-0.5 bg-[#d4af37] text-[#7a1b38] text-[9px] font-bold uppercase tracking-[0.15em] rounded-sm shadow-sm">
              ★ Bestseller
            </span>
          )}
          {isNew && !isBestseller && (
            <span className="inline-flex items-center px-2.5 py-0.5 bg-[#7a1b38] text-white text-[9px] font-bold uppercase tracking-[0.15em] rounded-sm shadow-sm">
              New
            </span>
          )}
          {hasDiscount && (
            <span className="inline-flex items-center px-2 py-0.5 bg-sale text-white text-[9px] font-bold tracking-wide rounded-sm shadow-sm">
              -{discountPercent}%
            </span>
          )}
          {isLowStock && (
            <span className="inline-flex items-center px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold tracking-wide rounded-sm shadow-sm animate-pulse">
              Low Stock
            </span>
          )}
        </div>

        {/* Wishlist Button — top right */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 z-20 flex items-center justify-center h-8 w-8 rounded-full border transition-all duration-300 cursor-pointer backdrop-blur-[1px] transform md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
            isWishlisted
              ? "bg-white border-sale text-sale opacity-100 md:translate-y-0"
              : "bg-white/90 border-border/40 text-muted-foreground hover:text-sale hover:border-sale/40 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          }`}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className="h-3.5 w-3.5" fill={isWishlisted ? "currentColor" : "none"} strokeWidth={2} />
        </button>

        {/* Sold Out Overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/75 z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/80 border border-foreground/30 px-3 py-1 bg-white/50 backdrop-blur-[1px]">
              Sold Out
            </span>
          </div>
        )}

        {/* Quick View Hover Button (Eye Icon) */}
        {!isSoldOut && (
          <button
            onClick={handleQuickViewClick}
            className="absolute bottom-3 right-3 z-20 flex items-center justify-center h-10 w-10 rounded-full bg-white/95 text-[#7a1b38] border border-[#d4af37]/40 hover:bg-[#7a1b38] hover:text-[#d4af37] hover:border-[#7a1b38] shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer backdrop-blur-[1px] transform md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:focus:translate-y-0 md:focus:opacity-100"
            title="Quick View"
          >
            <Eye className="h-4.5 w-4.5" strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Product Info — elegant whitespace and typography */}
      <div className="space-y-1">
        {/* Category overline */}
        {category && (
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
            {category}
          </p>
        )}

        {/* Product name */}
        <h3 className="text-[13px] md:text-[14px] font-medium leading-snug text-[#7a1b38] line-clamp-2 transition-colors duration-300 group-hover:text-[#7a1b38] font-serif">
          {name}
        </h3>

        {/* Price display with strikethrough styling */}
        <div className="flex items-center gap-2 pt-0.5">
          <span className="text-sm md:text-[15px] font-semibold text-foreground">
            {formatPrice(price)}
          </span>
          {hasDiscount && (
            <span className="text-xs text-muted-foreground line-through font-medium">
              {formatPrice(compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
