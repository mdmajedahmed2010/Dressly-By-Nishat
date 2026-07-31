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
import { BUSINESS } from "@/lib/constants";
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

  // Fallback variant if no variants exist in database
  const fallbackVariant = useMemo(
    () => ({
      id: `default-${product.id}`,
      sku: `${product.slug || product.id}-default`,
      size: "Free Size",
      color: "As Shown",
      price: product.basePrice,
      compareAtPrice: product.compareAtPrice,
      stock: 100,
      images: product.images,
    }),
    [product]
  );

  const effectiveVariants = useMemo(() => {
    return product.variants && product.variants.length > 0
      ? product.variants
      : [fallbackVariant];
  }, [product.variants, fallbackVariant]);

  // Normalize and deduplicate sizes, defaulting empty/null sizes to "Free Size"
  const availableSizes = useMemo(() => {
    const unique = new Set<string>();
    effectiveVariants.forEach((v) => {
      const sizeStr = v.size ? v.size.trim() : "";
      unique.add(sizeStr || "Free Size");
    });
    return Array.from(unique);
  }, [effectiveVariants]);

  // Normalize and deduplicate colors
  const availableColors = useMemo(() => {
    const unique = new Set<string>();
    effectiveVariants.forEach((v) => {
      if (v.color && v.color.trim() !== "" && v.color !== "As Shown") {
        unique.add(v.color.trim());
      }
    });
    return Array.from(unique);
  }, [effectiveVariants]);

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
    if (!selectedSize && availableSizes.length > 0) {
      const firstInStock = availableSizes.find((s) => {
        return effectiveVariants.some((v) => (v.size?.trim() || "Free Size") === s && v.stock > 0);
      });
      setSelectedSize(firstInStock || availableSizes[0] || "Free Size");
    }
    if (!selectedColor && availableColors.length > 0) {
      const firstColorInStock = availableColors.find((c) => {
        return effectiveVariants.some((v) => v.color?.trim() === c && v.stock > 0);
      });
      setSelectedColor(firstColorInStock || availableColors[0] || null);
    }
  }, [effectiveVariants, availableSizes, availableColors, selectedSize, selectedColor]);

  // Find selected variant using normalized matching and fallback
  const selectedVariant = useMemo(() => {
    let match = effectiveVariants;
    if (availableSizes.length > 0 && selectedSize) {
      match = match.filter((v) => (v.size?.trim() || "Free Size") === selectedSize);
    }
    if (availableColors.length > 0 && selectedColor) {
      match = match.filter((v) => v.color?.trim() === selectedColor);
    }
    const inStockMatch = match.find((v) => v.stock > 0);
    return inStockMatch ?? match[0] ?? effectiveVariants[0];
  }, [effectiveVariants, selectedSize, selectedColor, availableSizes, availableColors]);

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

          {/* Custom Tailoring Option Link */}
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setSelectedSize(selectedSize === "CUSTOM" ? null : "CUSTOM")}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#7a1b38] font-medium transition-colors cursor-pointer"
            >
              <Scissors className="h-3.5 w-3.5 text-[#d4af37]" />
              <span className="underline underline-offset-4">
                {selectedSize === "CUSTOM" ? "Cancel custom tailoring" : "Need custom tailoring or sizing adjustments?"}
              </span>
            </button>

            {selectedSize === "CUSTOM" && (
              <div className="mt-3 p-4 border border-[#d4af37]/30 bg-[#fdfaf5] rounded-md animate-in fade-in slide-in-from-top-1 duration-200 shadow-sm">
                <label htmlFor="customNote" className="block text-xs font-bold uppercase tracking-wider text-[#7a1b38] mb-2">
                  Custom Measurements & Specific Instructions
                </label>
                <textarea
                  id="customNote"
                  rows={2}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Specify body length, chest, shoulder, or sleeve measurements..."
                  className="w-full p-3 border border-border/80 bg-white text-xs text-foreground transition-all focus:outline-none focus:border-[#7a1b38] rounded-sm resize-none"
                />
                <p className="mt-2 text-[10px] text-muted-foreground leading-relaxed">
                  Our team will verify your measurements via WhatsApp ({BUSINESS.PHONE}) before crafting.
                </p>
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
            <p>• Inside Dhaka: ৳{String(settings.shipping_dhaka ?? 80)} | Outside Dhaka: ৳{String(settings.shipping_outside ?? 150)}</p>
            <p>• Cash on Delivery available across Bangladesh (Standard delivery: 2-4 working days).</p>
            <p>• Pre-order & custom tailoring options available upon request (Call/WhatsApp: {BUSINESS.PHONE}).</p>
            <p>• For any custom size or tailoring modifications, specify during checkout or contact us at {BUSINESS.PHONE}.</p>
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
