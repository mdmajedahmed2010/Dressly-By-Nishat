"use client";

/**
 * BIBAZ — Product Info Component (Premium v4.1 - Production Ready)
 * Upgraded with 50+ color map support, modern Pill/Chip color swatches,
 * and robust auto-fallback for empty sizes/colors to prevent "No sizes available" bug.
 */

import { useRouter } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import { Heart, Minus, Plus, ShoppingBag, Truck, ChevronDown, Scissors, Info, ShieldCheck, Star } from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { SizeGuideModal } from "./size-guide-modal";
import { getColorStyle, normalizeColorName } from "@/lib/color-utils";

interface Variant {
  id: string;
  size: string;
  color: string;
  price: number;
  stock: number;
  sku: string;
}

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    slug: string;
    description: string;
    basePrice: number;
    compareAtPrice?: number | null;
    variants: Variant[];
    specifications?: { label: string; value: string }[] | null;
    deliveryInfo: string;
    images: string[];
  };
}

export function ProductInfo({
  product,
  settings = {},
}: ProductInfoProps & { settings?: Record<string, unknown> }) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  // Normalize and deduplicate sizes, defaulting empty/null sizes to "Free Size"
  const availableSizes = useMemo(() => {
    const unique = new Set<string>();
    product.variants.forEach((v) => {
      const sizeStr = v.size ? v.size.trim() : "";
      unique.add(sizeStr || "Free Size");
    });
    return Array.from(unique);
  }, [product.variants]);

  // Normalize and deduplicate colors
  const availableColors = useMemo(() => {
    const unique = new Set<string>();
    product.variants.forEach((v) => {
      if (v.color && v.color.trim() !== "" && v.color !== "As Shown") {
        unique.add(v.color.trim());
      }
    });
    return Array.from(unique);
  }, [product.variants]);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  const wishlistItems = useWishlistStore((state) => state.items);
  const isWishlisted = wishlistItems.some(i => i.id === product.id);
  const toggleWishlistItem = useWishlistStore((state) => state.toggleItem);

  const [openSection, setOpenSection] = useState<string | null>("description");
  const [customNote, setCustomNote] = useState("");

  // Auto-select first available size and color on load
  useEffect(() => {
    if (product.variants.length > 0) {
      if (!selectedSize && availableSizes.length > 0) {
        const firstInStock = availableSizes.find((s) => {
          return product.variants.some((v) => (v.size?.trim() || "Free Size") === s && v.stock > 0);
        });
        setTimeout(() => setSelectedSize(firstInStock || availableSizes[0] || null), 0);
      }
      if (!selectedColor && availableColors.length > 0) {
        const firstColorInStock = availableColors.find((c) => {
          return product.variants.some((v) => v.color?.trim() === c && v.stock > 0);
        });
        setTimeout(() => setSelectedColor(firstColorInStock || availableColors[0] || null), 0);
      }
    }
  }, [product.variants, availableSizes, availableColors, selectedSize, selectedColor]);

  // Find selected variant using normalized matching and fallback
  const selectedVariant = useMemo(() => {
    let match = product.variants;
    if (availableSizes.length > 0 && selectedSize) {
      match = match.filter((v) => (v.size?.trim() || "Free Size") === selectedSize);
    }
    if (availableColors.length > 0 && selectedColor) {
      match = match.filter((v) => v.color?.trim() === selectedColor);
    }
    const inStockMatch = match.find((v) => v.stock > 0);
    return inStockMatch ?? match[0] ?? product.variants[0] ?? null;
  }, [product.variants, selectedSize, selectedColor, availableSizes, availableColors]);

  const currentPrice = selectedVariant?.price ?? product.basePrice;
  const isInStock = selectedVariant ? selectedVariant.stock > 0 : true;
  const maxQuantity = selectedVariant?.stock ?? 10;

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > currentPrice;
  const discountPercent = hasDiscount
    ? Math.round(((product.compareAtPrice! - currentPrice) / product.compareAtPrice!) * 100)
    : 0;

  // Check if a color is available and in stock for the current selection
  const isColorInStock = (color: string) => {
    const normColor = normalizeColorName(color);
    return product.variants.some((v) => {
      const matchColor = normalizeColorName(v.color) === normColor;
      const matchSize = !selectedSize || (v.size?.trim() || "Free Size") === selectedSize;
      return matchColor && matchSize && v.stock > 0;
    });
  };

  // Check if a size is available and in stock for the current selection
  const isSizeInStock = (size: string) => {
    return product.variants.some((v) => {
      const matchSize = (v.size?.trim() || "Free Size") === size;
      const matchColor = !selectedColor || v.color?.trim() === selectedColor;
      return matchColor && matchSize && v.stock > 0;
    });
  };




  const handleAddToCart = () => {
    if (availableSizes.length > 0 && !selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (availableColors.length > 0 && !selectedColor) {
      toast.error("Please select a color");
      return;
    }
    if (!selectedVariant) {
      toast.error("Selected product is unavailable");
      return;
    }

    const sizeToUse = selectedSize === "CUSTOM" ? "CUSTOM" : selectedVariant.size?.trim() || "Free Size";
    const colorToUse = selectedVariant.color?.trim() || "As Shown";

    if (selectedSize === "CUSTOM" && customNote.trim()) {
      // Append to pending custom notes for checkout
      const existing = localStorage.getItem("dressly_pending_custom_note") || localStorage.getItem("bibaz_pending_custom_note") || "";
      const prefix = existing ? existing + "\n\n" : "";
      localStorage.setItem(
        "dressly_pending_custom_note",
        `${prefix}Customization for ${product.name} (${colorToUse}): ${customNote}`
      );
    }

    addItem({
      variantId: selectedVariant.id,
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      variantSku: selectedVariant.sku,
      size: sizeToUse,
      color: colorToUse,
      price: selectedVariant.price,
      quantity,
      image: product.images[0] ?? "",
      maxStock: selectedVariant.stock,
    });

    toast.success("Added to bag", {
      description: `${product.name} — ${sizeToUse !== "Free Size" ? `Size ${sizeToUse}` : "Free Size"}${colorToUse !== "As Shown" ? ` (${colorToUse})` : ""} × ${quantity}`,
    });

    openCart();
  };

  const handleBuyNow = () => {
    if (availableSizes.length > 0 && !selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (availableColors.length > 0 && !selectedColor) {
      toast.error("Please select a color");
      return;
    }
    if (!selectedVariant) {
      toast.error("Selected product is unavailable");
      return;
    }

    const sizeToUse = selectedSize === "CUSTOM" ? "CUSTOM" : selectedVariant.size?.trim() || "Free Size";
    const colorToUse = selectedVariant.color?.trim() || "As Shown";

    if (selectedSize === "CUSTOM" && customNote.trim()) {
      // Append to pending custom notes for checkout
      const existing = localStorage.getItem("dressly_pending_custom_note") || localStorage.getItem("bibaz_pending_custom_note") || "";
      const prefix = existing ? existing + "\n\n" : "";
      localStorage.setItem(
        "dressly_pending_custom_note",
        `${prefix}Customization for ${product.name} (${colorToUse}): ${customNote}`
      );
    }

    addItem({
      variantId: selectedVariant.id,
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      variantSku: selectedVariant.sku,
      size: sizeToUse,
      color: colorToUse,
      price: selectedVariant.price,
      quantity,
      image: product.images[0] ?? "",
      maxStock: selectedVariant.stock,
    });

    toast.success("Proceeding to checkout...", {
      description: `${product.name} — ${sizeToUse !== "Free Size" ? `Size ${sizeToUse}` : "Free Size"}`,
    });

    router.push("/checkout");
  };

  const handleToggleWishlist = () => {
    toggleWishlistItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.basePrice,
      image: product.images[0] ?? "",
    });
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-6">
      {/* Category/Brand overline */}
      <p className="text-[10.5px] md:text-[11px] font-editorial-label text-[#d4af37]">
        DRESSLY BY NISHAT EXCLUSIVE
      </p>

      {/* Product Name */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight tracking-[-0.025em] font-serif text-[#7a1b38]">
          {product.name}
        </h1>
      </div>

      {/* Price Display */}
      <div className="flex items-baseline gap-3">
        <span className="text-xl md:text-2xl font-semibold text-foreground">
          {formatPrice(currentPrice)}
        </span>
        {hasDiscount && (
          <>
            <span className="text-sm text-muted-foreground line-through font-medium">
              {formatPrice(product.compareAtPrice!)}
            </span>
            <span className="text-xs font-bold text-sale bg-sale/5 px-2 py-0.5 rounded-sm">
              {discountPercent}% OFF
            </span>
          </>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Color Selector */}
      {availableColors.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-baseline gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                Select Color
              </p>
              {selectedColor ? (
                <span className="text-xs text-foreground font-semibold">({selectedColor})</span>
              ) : (
                <span className="text-xs text-muted-foreground font-medium italic">(Select a color)</span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {availableColors.map((color) => {
              const inStock = isColorInStock(color);
              const isSelected = selectedColor === color;
              const style = getColorStyle(color);

              return (
                <button
                  key={color}
                  onClick={() => setSelectedColor(isSelected ? null : color)}
                  disabled={!inStock}
                  className={`group relative w-9 h-9 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
                    isSelected
                      ? "ring-2 ring-foreground ring-offset-2 scale-110 shadow-md border border-black/20 dark:border-white/20"
                      : inStock
                        ? "hover:scale-105 hover:ring-1 hover:ring-foreground/50 hover:ring-offset-1 border border-black/15 shadow-sm"
                        : "opacity-30 cursor-not-allowed border border-black/10"
                  }`}
                  title={color}
                  aria-label={color}
                  aria-pressed={isSelected}
                >
                  <span
                    className="w-full h-full rounded-full shadow-inner block"
                    style={style}
                  />
                  {!inStock && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-full h-[1.5px] bg-red-500 rotate-45 transform" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Size Selector */}
      {availableSizes.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-baseline gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                Select Size
              </p>
              {selectedSize && (
                <span className="text-xs text-muted-foreground font-medium">({selectedSize})</span>
              )}
            </div>
            <SizeGuideModal />
          </div>

          <div className="flex flex-wrap gap-2.5">
            {availableSizes.map((size) => {
              const inStock = isSizeInStock(size);
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(isSelected ? null : size)}
                  disabled={!inStock}
                  className={`h-11 min-w-[48px] px-4 text-xs font-semibold uppercase tracking-wider border rounded-sm transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : inStock
                        ? "border-border text-foreground hover:border-foreground hover:bg-neutral-50"
                        : "border-border/30 text-muted-foreground/30 line-through cursor-not-allowed bg-neutral-50/20"
                  }`}
                  aria-pressed={isSelected}
                >
                  {size}
                </button>
              );
            })}
          </div>

          {/* Custom Tailoring Toggle */}
          <div className="mt-8">
            <button
              onClick={() => setSelectedSize(selectedSize === "CUSTOM" ? null : "CUSTOM")}
              className={`w-full flex items-center justify-between p-4 rounded-sm border transition-all duration-300 ${
                selectedSize === "CUSTOM" 
                  ? "bg-[#252525] border-[#252525] text-[#f8f5f0]" 
                  : "bg-[#f8f5f0] border-[#e8e2d5] text-[#252525] hover:border-[#d4cbb8] hover:bg-[#f3eee5]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Scissors className={`h-5 w-5 ${selectedSize === "CUSTOM" ? "text-amber-400" : "text-amber-600"}`} />
                <span className="text-sm font-bold uppercase tracking-widest">
                  {selectedSize === "CUSTOM" ? "Custom Tailoring Selected" : "Need Custom Tailoring?"}
                </span>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${selectedSize === "CUSTOM" ? "rotate-180" : ""}`} />
            </button>
            
            {selectedSize === "CUSTOM" && (
              <div className="mt-4 p-5 border border-foreground/10 bg-[#fafafa] rounded-md animate-in fade-in slide-in-from-top-2 duration-300 shadow-sm">
                <label htmlFor="customNote" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                  Your Measurements & Requirements
                </label>
                <textarea
                  id="customNote"
                  rows={3}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="E.g., I want the body length to be 54 inches. Or any specific adjustments you need..."
                  className="w-full p-3.5 border border-border/60 bg-white text-sm transition-all focus:outline-none focus:border-foreground focus:ring-1 focus:ring-foreground rounded-sm resize-none shadow-inner"
                />
                <div className="mt-3 flex items-start gap-2 bg-amber-50 p-3 rounded-sm border border-amber-100">
                  <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-amber-800 font-medium leading-relaxed">
                    Custom orders require 100% advance payment (Tk 1020 minimum) for placing the order.
                  </p>
                </div>
              </div>
            )}
          </div>

          {selectedVariant && selectedVariant.stock <= 5 && selectedVariant.stock > 0 && (
            <div className="flex items-center gap-2 mt-2.5">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <p className="text-xs font-bold text-amber-600">
                {selectedVariant.stock <= 2
                  ? `Only ${selectedVariant.stock} left — order now!`
                  : `Only ${selectedVariant.stock} left in this size — hurry!`}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Quantity & Actions Grid */}
      <div className="space-y-4">
        {/* Quantity */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            Quantity:
          </span>
          <div className="flex items-center border border-border">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="flex items-center justify-center h-10 w-10 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="flex items-center justify-center h-10 w-10 text-xs font-semibold border-x border-border">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
              disabled={quantity >= maxQuantity}
              className="flex items-center justify-center h-10 w-10 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Haute-Couture Add to Bag & Buy Now Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            disabled={!isInStock}
            className={`flex-1 flex items-center justify-center gap-2 md:gap-2.5 min-h-[50px] md:min-h-[54px] px-3 md:px-4 text-[11px] md:text-xs font-extrabold uppercase tracking-[0.16em] md:tracking-[0.2em] transition-all duration-300 rounded-md cursor-pointer active:scale-[0.98] ${
              !isInStock
                ? "bg-neutral-200 border border-neutral-300 text-neutral-500 font-bold opacity-100 cursor-not-allowed"
                : "bg-[#fdfaf5] hover:bg-[#f9f1e5] text-[#7a1b38] border border-[#d4af37]/45 shadow-sm hover:border-[#d4af37] hover:-translate-y-0.5"
            }`}
          >
            <ShoppingBag className="h-4 w-4 text-[#d4af37] shrink-0" />
            <span>{!isInStock ? "OUT OF STOCK" : "ADD TO BAG"}</span>
          </button>

          <button
            onClick={handleBuyNow}
            disabled={!isInStock}
            className={`flex-1 flex items-center justify-center gap-2 md:gap-2.5 min-h-[50px] md:min-h-[54px] px-3 md:px-4 text-[11px] md:text-xs font-extrabold uppercase tracking-[0.16em] md:tracking-[0.2em] transition-all duration-300 rounded-md cursor-pointer active:scale-[0.98] ${
              !isInStock
                ? "bg-neutral-200 border border-neutral-300 text-neutral-500 font-bold opacity-100 cursor-not-allowed"
                : "bg-[#7a1b38] hover:bg-[#4a0516] text-[#d4af37] shadow-md hover:shadow-lg hover:-translate-y-0.5"
            }`}
          >
            <span>{!isInStock ? "OUT OF STOCK" : "✦ BUY NOW"}</span>
          </button>

          {/* Wishlist */}
          <button
            onClick={handleToggleWishlist}
            className={`flex items-center justify-center min-h-[50px] md:min-h-[54px] w-[50px] md:w-[54px] border transition-all duration-300 shrink-0 rounded-md cursor-pointer ${
              isWishlisted
                ? "border-sale text-sale bg-sale/5 shadow-sm"
                : "border-border text-muted-foreground hover:text-foreground hover:border-[#d4af37] hover:bg-[#faf9f6]"
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
      {/* Trust Badges Row */}
      <div className="flex flex-wrap gap-3 pt-2 border-t border-border/30">
        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
          <svg className="h-3.5 w-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Cash On Delivery
        </div>
        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
          <svg className="h-3.5 w-3.5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          Easy Returns
        </div>
        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
          <svg className="h-3.5 w-3.5 text-[#d4af37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
          100% Authentic Guaranteed
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-2 py-5 border-b border-border/60">
        <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-neutral-50/50 rounded-sm">
          <Truck className="h-5 w-5 text-foreground/80" strokeWidth={1.5} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-tight">Fast<br/>Delivery</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-neutral-50/50 rounded-sm">
          <ShieldCheck className="h-5 w-5 text-foreground/80" strokeWidth={1.5} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-tight">Secure<br/>Checkout</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-neutral-50/50 rounded-sm">
          <Star className="h-5 w-5 text-foreground/80" strokeWidth={1.5} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-tight">Premium<br/>Quality</span>
        </div>
      </div>

      {/* Accordion Sections — Aarong Style */}
      <div className="divide-y divide-border pt-2">
        {/* Description */}
        <AccordionItem
          title="Product Description"
          isOpen={openSection === "description"}
          onToggle={() => toggleSection("description")}
        >
          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        </AccordionItem>

        {/* Specifications / Details */}
        {product.specifications && Array.isArray(product.specifications) && product.specifications.length > 0 && (
          <AccordionItem
            title="Specifications"
            isOpen={openSection === "details"}
            onToggle={() => toggleSection("details")}
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.specifications.map((spec, i) => (
                <div key={i} className="flex flex-col border-b border-border/50 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {spec.label}
                  </span>
                  <span className="text-sm font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </AccordionItem>
        )}

        {/* Delivery & Order Policy */}
        <AccordionItem
          title="Delivery & Order Policy"
          isOpen={openSection === "shipping"}
          onToggle={() => toggleSection("shipping")}
        >
          <div className="space-y-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
            <p>• Dhaka: ৳{String(settings.shipping_dhaka ?? 80)} | Outside Dhaka: ৳{String(settings.shipping_outside ?? 150)}</p>
            <p>• We are Pre-order based. ৳1,020 advance payment required for inside & outside Dhaka (bKash: 01860744181, 01871919159).</p>
            <p>• For any custom tailoring order, 100% advance is required.</p>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

/* Accordion Item Component */
function AccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-sm font-semibold text-foreground hover:opacity-70 transition-opacity"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="pb-4 animate-[fadeIn_0.2s_ease-out]">{children}</div>}
    </div>
  );
}
