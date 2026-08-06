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

// Global metadata — Sew In Style by Farzana
export const metadata: Metadata = {
  title: {
    default: "Sew In Style by Farzana — Premium Traditional Wear & Exclusive Sarees",
    template: "%s — Sew In Style by Farzana",
  },
  description:
    "Sew In Style by Farzana — A haven for saree lovers. Premium quality traditional wear, exclusive Kanchipuram sarees, and elegant outfits in Dhaka, Bangladesh.",
  keywords: [
    "Sew In Style by Farzana",
    "Sew In Style",
    "Premium Saree",
    "Kanchipuram Saree",
    "Traditional Wear BD",
    "Dhaka Fashion",
    "Ladies Fashion BD",
    "Desi Fashion",
    "Premium Boutique Dhaka",
    "Police Plaza Concord",
  ],
  authors: [{ name: "Sew In Style by Farzana" }],
  creator: "Sew In Style by Farzana",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Sew In Style by Farzana",
    title: "Sew In Style by Farzana — Where Elegance Meets Style",
    description:
      "Upgrade your wardrobe with style, confidence, and grace. Shop our premium collections of sarees and traditional wear.",
    images: ["/images/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sew In Style by Farzana",
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
