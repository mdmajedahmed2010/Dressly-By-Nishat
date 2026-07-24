/**
 * Dressly By Nishat — Contact Us Page
 * ড্রেসলি বাই নিশাত | Authentic Pakistani Luxury Suits & Designer Collections
 */

import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — Dressly By Nishat | ড্রেসলি বাই নিশাত",
  description:
    "যোগাযোগ করুন ড্রেসলি বাই নিশাতের সাথে। Shop 2/73, Eastern Mollika Shopping Complex, Elephant Road, Dhaka. ফোন: +880 1792-635996. Order-এর জন্য Facebook Inbox করুন।",
};

const contactDetails = [
  {
    icon: Phone,
    label: "ফোন / হোয়াটসঅ্যাপ",
    value: BUSINESS.PHONE,
    href: `tel:${BUSINESS.PHONE.replace(/[^0-9+]/g, "")}`,
    note: "Sunday–Saturday, 9am–10pm",
  },
  {
    icon: MessageCircle,
    label: "Facebook Inbox",
    value: "Dressly By Nishat",
    href: BUSINESS.FACEBOOK,
    note: "Order-এর জন্য Inbox করুন — সবচেয়ে দ্রুত সাড়া পাবেন",
  },
  {
    icon: Mail,
    label: "ইমেইল",
    value: BUSINESS.EMAIL,
    href: `mailto:${BUSINESS.EMAIL}`,
    note: "আমরা ২৪ ঘন্টার মধ্যে reply করি",
  },
  {
    icon: MapPin,
    label: "ঠিকানা",
    value: "Shop 2/73, Eastern Mollika",
    href: "https://maps.google.com/?q=Eastern+Mollika+Elephant+Road+Dhaka",
    note: "Elephant Road, Dhaka, Bangladesh",
  },
  {
    icon: Clock,
    label: "অনলাইন সাপোর্ট সময়",
    value: "সকাল ৯টা – রাত ১০টা (প্রতিদিন)",
    href: null,
    note: "২৪/৭ ফেসবুক ইনবক্স খোলা থাকে",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden bg-[#7a1b38]">
        <Image
          src="/images/dressly/banner.jpg"
          alt="Dressly By Nishat — আমাদের সাথে যোগাযোগ করুন"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#7a1b38]/60 via-[#7a1b38]/40 to-[#7a1b38]/80" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <span className="inline-block px-4 py-1.5 border border-[#d4af37]/50 bg-[#d4af37]/10 text-[#d4af37] text-[10px] uppercase tracking-[0.28em] font-bold rounded-full mb-4">
            আমাদের সাথে যোগাযোগ • CONTACT US
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-3 font-heading">
            Contact Us
          </h1>
          <p className="text-[#d4af37] text-base md:text-lg font-medium tracking-wide">
            আমরা আপনার প্রশ্নের উত্তর দিতে প্রস্তুত
          </p>
        </div>
      </section>

      {/* Maroon Tagline Strip */}
      <section className="bg-[#7a1b38] py-4 px-6 text-center border-t border-[#d4af37]/30">
        <p className="text-[#d4af37] text-sm font-semibold tracking-wide">
          ✦ Order-এর জন্য আমাদের Facebook Page-এ Inbox করুন — সবচেয়ে দ্রুত সাড়া পাবেন ✦
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Details */}
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a1b38] font-bold mb-3">
                  যোগাযোগের তথ্য
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a0008] leading-tight mb-4 font-heading">
                  আমাদের সাথে সরাসরি
                  <br />
                  <span className="italic font-normal text-[#7a1b38]">কথা বলুন</span>
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Dressly By Nishat — আসল পাকিস্তানি প্রিমিয়াম থ্রি-পিস, অর্গানজা ও শিফন কালেকশনের নির্ভরযোগ্য নাম।
                  অর্ডার, প্রোডাক্ট বা ডেলিভারি সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন।
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 p-5 rounded-sm bg-white border border-[#d4af37]/30 hover:border-[#d4af37] hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#7a1b38]/10 flex items-center justify-center group-hover:bg-[#7a1b38] transition-colors">
                      <detail.icon className="h-5 w-5 text-[#7a1b38] group-hover:text-[#d4af37] transition-colors" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#7a1b38] font-bold">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-bold text-[#1a0008] hover:text-[#7a1b38] transition-colors block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-[#1a0008]">{detail.value}</p>
                      )}
                      <p className="text-xs text-neutral-500">{detail.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Facebook CTA */}
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 h-14 w-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-bold rounded-sm transition-all shadow-md active:scale-[0.99] tracking-wide"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook Inbox-এ Order করুন
              </a>
            </div>

            {/* Right: Message Form */}
            <div className="bg-white border border-[#d4af37]/30 rounded-sm p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1a0008] mb-1 font-heading">মেসেজ পাঠান</h3>
                <p className="text-xs text-neutral-500">
                  আমরা দ্রুত আপনার বার্তাটি পর্যালোচনা করে উত্তর দিব।
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।\nFor faster response, please inbox us on Facebook!");
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a1b38] mb-2">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full h-11 px-4 border border-[#d4af37]/30 rounded-sm text-sm text-[#1a0008] placeholder:text-neutral-400 focus:outline-none focus:border-[#7a1b38] focus:ring-1 focus:ring-[#7a1b38]/20 transition-colors bg-[#fdfaf5]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a1b38] mb-2">
                      ফোন নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1792-635996"
                      className="w-full h-11 px-4 border border-[#d4af37]/30 rounded-sm text-sm text-[#1a0008] placeholder:text-neutral-400 focus:outline-none focus:border-[#7a1b38] focus:ring-1 focus:ring-[#7a1b38]/20 transition-colors bg-[#fdfaf5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a1b38] mb-2">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-11 px-4 border border-[#d4af37]/30 rounded-sm text-sm text-[#1a0008] placeholder:text-neutral-400 focus:outline-none focus:border-[#7a1b38] focus:ring-1 focus:ring-[#7a1b38]/20 transition-colors bg-[#fdfaf5]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a1b38] mb-2">
                    বিষয় *
                  </label>
                  <select
                    required
                    className="w-full h-11 px-4 border border-[#d4af37]/30 rounded-sm text-sm text-[#1a0008] focus:outline-none focus:border-[#7a1b38] focus:ring-1 focus:ring-[#7a1b38]/20 transition-colors bg-[#fdfaf5]"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="order">Order সংক্রান্ত</option>
                    <option value="product">Pakistani Suit স্টক ও ইনফো</option>
                    <option value="bridal">Bridal Special Collection</option>
                    <option value="delivery">Delivery সংক্রান্ত</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#7a1b38] mb-2">
                    আপনার বার্তা *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="আপনার প্রশ্ন বা বার্তা লিখুন..."
                    className="w-full px-4 py-3 border border-[#d4af37]/30 rounded-sm text-sm text-[#1a0008] placeholder:text-neutral-400 focus:outline-none focus:border-[#7a1b38] focus:ring-1 focus:ring-[#7a1b38]/20 transition-colors resize-none bg-[#fdfaf5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#7a1b38] hover:bg-[#5c132a] text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-luxury hover:shadow-gold-glow border border-[#d4af37]/40 active:scale-[0.99] py-4 cursor-pointer"
                >
                  মেসেজ পাঠান →
                </button>

                <p className="text-[11px] text-center text-neutral-500">
                  দ্রুত সাড়ার জন্য{" "}
                  <a
                    href={BUSINESS.FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a1b38] font-bold hover:underline"
                  >
                    Facebook Inbox
                  </a>{" "}
                  করুন।
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="bg-[#f7f0e8] py-12 px-6 border-t border-[#d4af37]/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a1b38] font-bold mb-3">
            আমাদের অবস্থান
          </p>
          <h2 className="text-2xl font-bold text-[#1a0008] mb-2 font-heading">Dressly By Nishat Showroom</h2>
          <p className="text-sm text-neutral-600 mb-6 font-medium">
            Shop 2/73, Eastern Mollika Shopping Complex, Elephant Road, Dhaka, Bangladesh
          </p>
          <a
            href="https://maps.google.com/?q=Eastern+Mollika+Elephant+Road+Dhaka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 bg-[#7a1b38] text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#5c132a] hover:text-white transition-all duration-300 rounded-sm shadow-luxury hover:shadow-gold-glow border border-[#d4af37]/40 active:scale-[0.98]"
          >
            <MapPin className="h-4 w-4 mr-2 text-[#d4af37]" />
            Google Maps-এ দেখুন →
          </a>
        </div>
      </section>
    </main>
  );
}
