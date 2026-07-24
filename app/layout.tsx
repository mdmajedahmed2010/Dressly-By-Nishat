import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { CartSyncManager } from "@/components/cart/cart-sync-manager";
import { unstable_cache } from "next/cache";
import { ServiceWorkerRegistry } from "@/components/pwa/service-worker-registry";
import { PostHogProvider } from "@/components/analytics/posthog-provider";

// Body font — clean, modern, highly readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Heading font — elegant, premium feel for fashion brand
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Global metadata — Dressly By Nishat
export const metadata: Metadata = {
  title: {
    default: "Dressly By Nishat — Luxury Authentic Pakistani Suits & Designer Collection",
    template: "%s — Dressly By Nishat",
  },
  description:
    "Dressly By Nishat (ড্রেসলি বাই নিশাত) — Premium authentic Pakistani luxury suits & designer festive wear in Bangladesh. Shop Luxury Organza 3-Piece, Embroidered Chiffon, Lawn Edition & Bridal Pret Collections. Fast Cash-on-Delivery nationwide.",
  keywords: [
    "Dressly By Nishat",
    "ড্রেসলি বাই নিশাত",
    "Pakistani Dress",
    "Pakistani Suit",
    "Organza Luxury Suit",
    "Chiffon Embroidered Three Piece",
    "Lawn Collection BD",
    "Party Wear Suit",
    "Pakistani Bridal Suit",
    "Pakistani Clothing Bangladesh",
    "Dhaka Online Boutique",
  ],
  authors: [{ name: "Dressly By Nishat" }],
  creator: "Dressly By Nishat",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Dressly By Nishat",
    title: "Dressly By Nishat — Exclusive Authentic Pakistani Luxury Suits",
    description:
      "Shop original Pakistani luxury organza suits, chiffon embroidered 3-piece sets & festive lawn collections across Bangladesh.",
    images: ["/images/dressly/image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dressly By Nishat",
  },
};

export const viewport: Viewport = {
  themeColor: "#7a1b38",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user?.id;

  const getFavicon = unstable_cache(
    async () => {
      try {
        const setting = await prisma.siteSetting.findUnique({
          where: { key: "store_favicon" },
        });
        if (setting && setting.value) {
          return String(setting.value).replace(/['"]/g, "");
        }
      } catch {
        console.error("Failed to load favicon setting");
      }
      return "/favicon.ico";
    },
    ["favicon_setting"],
    { revalidate: 3600, tags: ["site_settings"] }
  );

  const faviconUrl = await getFavicon();

  return (
    <html
      lang="en"
      className={cn("h-full", inter.variable, playfair.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground">
        <CartSyncManager userId={userId} />
        {/* Skip to main content — Accessibility (WCAG AA) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextTopLoader
          color="#d4af37"
          height={2}
          showSpinner={false}
          shadow="0 0 10px #d4af37,0 0 5px #7a1b38"
        />
        {/* Structured Data — SEO (SOP §৭) */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <Toaster position="top-right" richColors closeButton />
        <PostHogProvider />
        <ServiceWorkerRegistry />
      </body>
    </html>
  );
}
