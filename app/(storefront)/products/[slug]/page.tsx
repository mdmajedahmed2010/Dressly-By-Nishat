/**
 * Dressly By Nishat — Product Detail Page
 * Route: /products/[slug]
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductImages } from "@/components/product/product-images";
import { ProductInfo } from "@/components/product/product-info";
import { RelatedProducts } from "@/components/product/related-products";
import { getProductBySlug } from "@/actions/product.actions";
import { getStorefrontSettings } from "@/actions/settings.actions";
import { ALL_PRODUCTS } from "@/lib/demo-data";

export const revalidate = 60;

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  let result = await getProductBySlug(slug);

  // Fallback to Demo Data
  if (!result.success || !result.product) {
    const demoProduct = ALL_PRODUCTS.find((p) => p.slug === slug);
    if (demoProduct) {
      result = {
        success: true,
        product: {
          name: demoProduct.name,
          seoTitle: `${demoProduct.name} — Dressly By Nishat`,
          seoDesc: `${demoProduct.name} — Authentic Pakistani luxury suit collection by Dressly By Nishat.`,
          description: `${demoProduct.name} — Exclusive authentic Pakistani luxury 3-piece suit with heavy embroidered dupatta and premium fabric.`,
        } as any,
      };
    }
  }

  if (!result.success || !result.product) {
    return { title: "Product Not Found — Dressly By Nishat" };
  }

  const product = result.product;
  return {
    title: product.seoTitle || `${product.name} — Dressly By Nishat`,
    description: (product.seoDesc || product.description).slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  let [productRes, settingsRes] = await Promise.all([
    getProductBySlug(slug),
    getStorefrontSettings(),
  ]);

  // Fallback to Demo Data
  if (!productRes.success || !productRes.product) {
    const demoProduct = ALL_PRODUCTS.find((p) => p.slug === slug);
    if (demoProduct) {
      productRes = {
        success: true,
        product: {
          id: demoProduct.id,
          name: demoProduct.name,
          slug: demoProduct.slug,
          description: `${demoProduct.name} — Exclusive authentic Pakistani 3-piece suit collection with heavy embroidery, organza cutwork dupatta, and premium fabric. Cash on delivery available nationwide.`,
          basePrice: demoProduct.price,
          category: {
            name: demoProduct.category || "Pakistani Suits",
            slug: (demoProduct.category || "Pakistani Suits").toLowerCase().replace(/ /g, "-"),
          },
          variants: [
            {
              id: demoProduct.id + "-v1",
              sku: demoProduct.id,
              price: demoProduct.price,
              stock: 10,
              images: [demoProduct.image],
            },
          ],
        } as any,
      };
    }
  }

  if (!productRes.success || !productRes.product) {
    notFound();
  }

  const product = productRes.product;
  const settings = settingsRes.settings || {};

  const shippingDhaka = Number(settings.shipping_dhaka ?? 80);
  const shippingOutside = Number(settings.shipping_outside ?? 150);
  const freeShippingThreshold = Number(settings.free_shipping_threshold ?? 5000);

  // Extract images from variants (first variant's images, or fallback)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const firstVariant: any = product.variants[0];
  const variantImages = firstVariant?.images;
  const images: string[] =
    Array.isArray(variantImages) && variantImages.length > 0
      ? (variantImages as string[])
      : ["/images/dressly/image.jpg"];

  // Compute compareAtPrice as a dynamic fallback
  const prices = product.variants.map((v) => Number(v.price));
  const minPrice = prices.length > 0 ? Math.min(...prices) : Number(product.basePrice);
  const compareAtPrice = Math.round(minPrice * 1.15); // 15% markup as "compare at" fallback

  // Map DB variants to ProductInfo expected format
  const mappedVariants = product.variants.map((v) => ({
    id: v.id,
    size: v.size || "Unstitched 3-Piece",
    color: v.color || "As Shown",
    price: Number(v.price),
    stock: v.stock,
    sku: v.sku,
  }));

  const displayProduct = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    basePrice: minPrice,
    compareAtPrice,
    category: {
      name: product.category?.name || "Pakistani Suits",
      slug: product.category?.slug || "organza-luxury-suits",
    },
    images,
    ogImage: product.ogImage,
    createdAt: product.createdAt,
    variants: mappedVariants,
    deliveryInfo: `Dhaka: ৳${shippingDhaka} (1-2 days) | Outside Dhaka: ৳${shippingOutside} (2-4 days)${freeShippingThreshold > 0 ? ` | Free shipping on orders above ৳${freeShippingThreshold.toLocaleString()}` : ""}`,
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          {
            label: displayProduct.category.name,
            href: `/collections/${displayProduct.category.slug}`,
          },
          { label: displayProduct.name },
        ]}
      />

      {/* Product Detail — 55/45 Split */}
      <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-7">
          <ProductImages images={displayProduct.images} productName={displayProduct.name} />
        </div>

        {/* Right: Product Info */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <ProductInfo product={displayProduct} settings={settings} />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts categorySlug={displayProduct.category.slug} currentProductId={displayProduct.id} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: displayProduct.name,
            description: displayProduct.description,
            image: displayProduct.images,
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BDT",
              lowPrice: displayProduct.basePrice,
              highPrice: displayProduct.compareAtPrice || displayProduct.basePrice,
              offerCount: displayProduct.variants.length,
            },
          }),
        }}
      />
    </div>
  );
}
