import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Dressly By Nishat | ড্রেসলি বাই নিশাত",
  description:
    "Dressly By Nishat — Authentic Pakistani luxury 3-piece suits, organza, chiffon & festive designer wear in Bangladesh. 52K+ followers, 100% customer recommend rate.",
  openGraph: {
    title: "About Us — Dressly By Nishat",
    description:
      "Exclusive authentic Pakistani luxury 3-piece suits, organza & chiffon collections in Bangladesh.",
    images: ["/images/dressly/image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden bg-[#7a1b38]">
        <Image
          src="/images/dressly/banner.jpg"
          alt="Dressly By Nishat — Luxury Pakistani Suit Store"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#7a1b38]/70 via-[#7a1b38]/50 to-[#7a1b38]/90" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <span className="inline-block px-4 py-1.5 border border-[#d4af37]/50 bg-[#d4af37]/10 text-[#d4af37] text-[10px] uppercase tracking-[0.28em] font-bold rounded-full mb-4">
            আমাদের পরিচিতি • ABOUT US
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-3 font-heading">
            Dressly By Nishat
          </h1>
          <p className="text-[#d4af37] text-base md:text-lg font-medium tracking-wide">
            ড্রেসলি বাই নিশাত — Authentic Pakistani Luxury Suits & Designer Collections
          </p>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="bg-[#7a1b38] py-6 px-6 text-center border-t border-[#d4af37]/30">
        <p className="text-[#d4af37] text-sm md:text-base font-semibold tracking-wide max-w-3xl mx-auto">
          ✦ &quot;Exclusive Authentic Pakistani Luxury Suits & Designer Festive Wear Collection in Bangladesh&quot; ✦
        </p>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg border border-[#d4af37]/30">
              <Image
                src="/images/dressly/image.jpg"
                alt="Dressly By Nishat collection showcase"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#7a1b38]/90 backdrop-blur-sm border border-[#d4af37]/40 px-4 py-2.5 rounded-sm">
                <p className="text-[#d4af37] text-[9px] uppercase tracking-widest font-bold">
                  Boutique Outlet
                </p>
                <p className="text-white text-xs font-medium mt-0.5">Shop 2/73, Eastern Mollika, Elephant Road, Dhaka</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a1b38] font-bold mb-3">
                  আমাদের গল্প
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a0008] leading-tight mb-4 font-heading">
                  Bangladesh&apos;s Preferred Destination for
                  <br />
                  <span className="italic font-normal text-[#7a1b38]">Authentic Pakistani Elegance</span>
                </h2>
              </div>

              <div className="border-l-4 border-[#d4af37] pl-5 py-2 bg-white rounded-r-sm">
                <p className="text-[#7a1b38] italic text-sm leading-relaxed font-medium">
                  ড্রেসলি বাই নিশাত — বাংলাদেশের ফ্যাশন সচেতন নারীদের জন্য আসল পাকিস্তানি থ্রি-পিস, অরেঞ্জা এবং এম্ব্রয়ডার্ড শিফন কালেকশনের এক বিশ্বস্ত ঠিকানা।
                </p>
              </div>

              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                <p>
                  আমরা বিশ্বাস করি প্রতিটি উৎসব এবং বিশেষ দিন নারীদের জন্য অনন্য। তাই আমরা নিয়ে আসি ১০০% আসল পাকিস্তানি প্রিমিয়াম থ্রি-পিস suits, কাটওয়ার্ক অরেঞ্জা দোপাট্টা এবং প্রিমিয়াম ডিজিটাল প্রিন্ট লন কালেকশন।
                </p>
                <p>
                  ঈদ, গায়ে হলুদ, রিসেপশন কিংবা যেকোনো পার্টি — আমাদের অর্গানজা, শিফন এবং ভেলভেট থ্রি-পিস ড্রেসগুলো প্রতিটি অনুষ্ঠানে আপনার সৌন্দর্য বাড়িয়ে দেবে বহুগুণ।
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-5 border-t border-b border-[#d4af37]/30">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#7a1b38]">52K+</p>
                  <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                    Followers
                  </p>
                </div>
                <div className="text-center border-x border-[#d4af37]/30">
                  <p className="text-2xl font-bold text-[#7a1b38]">100%</p>
                  <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                    Recommend
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#7a1b38]">100%</p>
                  <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                    Authentic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collections */}
      <section className="py-16 bg-[#f7f0e8] px-6 border-t border-[#d4af37]/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a1b38] font-bold mb-3">
              আমাদের মূল কালেকশন
            </p>
            <h2 className="text-3xl font-bold text-[#1a0008] font-heading">Our Signature Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Luxury Organza Suits",
                desc: "Pakistani organza 3-piece luxury suits with heavy embroidery & cutwork dupatta.",
                img: "/images/dressly/738759155_122236921304097859_517106012241883883_n.jpg",
                href: "/collections/organza-luxury-suits",
              },
              {
                name: "Chiffon Embroidered Edition",
                desc: "Pure chiffon designer suites with heavy zari, sequin, and thread needlework.",
                img: "/images/dressly/739118005_122236931624097859_3877426082371806523_n.jpg",
                href: "/collections/chiffon-embroidered-edition",
              },
              {
                name: "Premium Lawn 3-Piece",
                desc: "Breezy luxury lawn collections featuring digital printed & embroidered lawn kameez.",
                img: "/images/dressly/743361783_122237467322097859_7772378286743424024_n.jpg",
                href: "/collections/premium-lawn-3piece",
              },
              {
                name: "Festive & Party Wear",
                desc: "Opulent festive 3-piece suits ideal for Holud, Receptions, and Wedding Party celebrations.",
                img: "/images/dressly/741464699_122237170736097859_278617854425347317_n.jpg",
                href: "/collections/festive-party-wear",
              },
              {
                name: "Velvet & Silk Pret",
                desc: "Royal micro-velvet and pure silk unstitched & ready-to-wear designer suits.",
                img: "/images/dressly/755332243_122238524504097859_5178805553998092524_n.jpg",
                href: "/collections/velvet-silk-pret",
              },
              {
                name: "Bridal Special Collection",
                desc: "Exclusive Pakistani bridal suits with heavy hand-embellished zari dupattas.",
                img: "/images/dressly/753865484_122238524498097859_5700651935379609574_n.jpg",
                href: "/collections/bridal-special-collection",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-[#d4af37]/30 hover:border-[#d4af37]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0008]/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1a0008] text-sm mb-1">{item.name}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a0008] mb-4 font-heading">আমাদের সাথে যোগাযোগ করুন</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            অর্ডার করতে বা যেকোনো প্রশ্নের জন্য সরাসরি আমাদের Facebook Inbox অথবা হোয়াটসঅ্যাপে মেসেজ দিন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f7f0e8] rounded-sm p-6 border border-[#d4af37]/30">
              <div className="w-10 h-10 rounded-full bg-[#7a1b38]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#7a1b38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a0008] text-sm mb-2">ঠিকানা</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Shop 2/73, Eastern Mollika,<br />
                Elephant Road, Dhaka,<br />
                Bangladesh
              </p>
            </div>

            <div className="bg-[#f7f0e8] rounded-sm p-6 border border-[#d4af37]/30">
              <div className="w-10 h-10 rounded-full bg-[#7a1b38]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#7a1b38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a0008] text-sm mb-2">ফোন / হোয়াটসঅ্যাপ</h3>
              <a
                href="tel:+8801792635996"
                className="text-xs text-[#7a1b38] font-bold hover:underline"
              >
                +880 1792-635996
              </a>
            </div>

            <div className="bg-[#f7f0e8] rounded-sm p-6 border border-[#d4af37]/30">
              <div className="w-10 h-10 rounded-full bg-[#7a1b38]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#7a1b38]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a0008] text-sm mb-2">Facebook Page</h3>
              <a
                href="https://www.facebook.com/dresslybynishat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#7a1b38] font-bold hover:underline"
              >
                Inbox on Facebook
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-10 bg-[#7a1b38] text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#5c132a] hover:text-white transition-all duration-300 rounded-sm shadow-luxury hover:shadow-gold-glow border border-[#d4af37]/40 active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
