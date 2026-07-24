/**
 * Dressly By Nishat — Refund & Exchange Policy
 * ড্রেসলি বাই নিশাত | Authentic Pakistani Luxury Suits & Designer Collections
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Truck, Eye, Phone, AlertTriangle, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund & Exchange Policy — Dressly By Nishat | ড্রেসলি বাই নিশাত",
  description:
    "ড্রেসলি বাই নিশাতের Refund ও 3-Day Exchange Policy। Delivery-র সময় পণ্য দেখে নিন। 100% আসল পাকিস্তানি কাপড়ের নিশ্চয়তা।",
};

const policyPoints = [
  {
    icon: Eye,
    title: "Delivery-তে পণ্য দেখে নিন",
    body: "প্রতিটি Order delivery-র সময় Delivery Agent-এর সামনে খুলে দেখে নিন। পণ্য পছন্দ করে বুঝে নেওয়ার সুযোগ রয়েছে।",
    type: "info",
  },
  {
    icon: ShieldCheck,
    title: "৩ দিনের সহজ এক্সচেঞ্জ",
    body: "সাইজ সমস্যা বা কোনো মেটেরিয়াল ত্রুটি থাকলে ৩ দিনের মধ্যে আমাদের ফেসবুক ইনবক্সে জানান। পণ্যটি আসল কন্ডিশনে থাকতে হবে।",
    type: "success",
  },
  {
    icon: AlertTriangle,
    title: "ব্যবহারের পর এক্সচেঞ্জ প্রযোজ্য নয়",
    body: "পণ্য ব্যবহার করার পর, ওয়াশ করার পর বা সেলাই করার পর এক্সচেঞ্জ বা রিফান্ড প্রযোজ্য নয়।",
    type: "warning",
  },
  {
    icon: Truck,
    title: "Delivery Charge",
    body: "ঢাকার ভিতরে: ৳80 | ঢাকার বাইরে: ৳150। Cash on Delivery সুবিধা উপলব্ধ — পণ্য পাওয়ার পর টাকা দিন।",
    type: "info",
  },
  {
    icon: CheckCircle2,
    title: "100% Authentic Pakistani Suits",
    body: "ড্রেসলি বাই নিশাতের সকল থ্রি-পিস ও অরেঞ্জা ড্রেস ১০০% অরিজিনাল কাপড়ের নিশ্চয়তা সহ সরবরাহ করা হয়।",
    type: "success",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5]">
      {/* Page Header */}
      <section className="bg-[#7a1b38] py-16 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#d4af37] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#d4af37] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#fcfaf6] text-[10px] uppercase tracking-[0.28em] font-bold rounded-full">
            আমাদের নীতিমালা
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Refund & Exchange Policy
          </h1>
          <p className="text-[#fcfaf6]/80 text-sm leading-relaxed">
            Dressly By Nishat-এ অর্ডার করার আগে আমাদের এক্সচেঞ্জ ও রিফান্ড নীতিমালা সম্পর্কে জেনে নিন।
          </p>
        </div>
      </section>

      {/* Main Alert */}
      <section className="bg-[#7a1b38] py-5 px-6 border-t border-[#d4af37]/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center flex-wrap text-center">
            <CheckCircle2 className="h-5 w-5 text-[#d4af37] shrink-0" />
            <p className="text-[#fcfaf6] text-sm font-bold tracking-wide">
              100% Authentic Original Pakistani Luxury Suits & 3-Day Exchange Guarantee
            </p>
            <CheckCircle2 className="h-5 w-5 text-[#d4af37] shrink-0" />
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Policy Cards */}
          <div className="space-y-5 mb-16">
            {policyPoints.map((point, idx) => (
              <div
                key={point.title}
                className={`flex items-start gap-5 p-6 rounded-sm border ${
                  point.type === "warning"
                    ? "bg-amber-50 border-amber-200 border-l-4 border-l-amber-500"
                    : point.type === "success"
                    ? "bg-emerald-50 border-emerald-100 border-l-4 border-l-emerald-500"
                    : "bg-white border-[#e8e0d0] border-l-4 border-l-[#7a1b38]"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${
                    point.type === "warning"
                      ? "bg-amber-100 text-amber-700"
                      : point.type === "success"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-[#fcf5f7] text-[#7a1b38]"
                  }`}
                >
                  <point.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground/50 font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className={`text-sm font-bold uppercase tracking-wide ${
                        point.type === "warning"
                          ? "text-amber-800"
                          : point.type === "success"
                          ? "text-emerald-800"
                          : "text-[#1a0008]"
                      }`}
                    >
                      {point.title}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-[#f7f0e8] rounded-sm p-8 border border-[#d4af37]/20 mb-10">
            <h2 className="text-xl font-bold text-[#1a0008] mb-6 flex items-center gap-2">
              <span className="text-[#d4af37]">✦</span>
              সাধারণ প্রশ্নোত্তর
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "ড্রেসের সাইজ বা কালার পছন্দ না হলে এক্সচেঞ্জ করা যাবে?",
                  a: "হ্যাঁ! ড্রেস ডেলিভারির ৩ দিনের মধ্যে অবিকৃত অবস্থায় আমাদের জানালে এক্সচেঞ্জ করা যাবে।",
                },
                {
                  q: "ডেলিভারিতে পণ্যে সমস্যা থাকলে কী করব?",
                  a: "Delivery Agent-এর সামনে পণ্য খুলে দেখুন। কোনো সমস্যা থাকলে সেখানেই আমাদের ফেসবুক ইনবক্সে জানান।",
                },
                {
                  q: "Cash on Delivery কি সারাদেশে প্রযোজ্য?",
                  a: "হ্যাঁ! আমরা ঢাকায় এবং ঢাকার বাইরে সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা দিই।",
                },
                {
                  q: "আমার অর্ডার কত দিনে পৌঁছাবে?",
                  a: "ঢাকার ভিতরে ১-২ দিন এবং ঢাকার বাইরে ২-৪ কার্যদিবস লাগে।",
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-[#d4af37]/15 pb-5 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-[#1a0008] mb-1.5">প্রশ্ন: {faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">উত্তর: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Help */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              নীতিমালা সম্পর্কে আরো জানতে বা সহায়তা পেতে:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-bold rounded-sm transition-all shadow-sm tracking-wide"
              >
                Facebook Inbox করুন
              </a>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 border-2 border-[#7a1b38]/30 text-[#7a1b38] text-sm font-semibold rounded-sm hover:bg-[#7a1b38]/5 hover:border-[#7a1b38] transition-all tracking-wide"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.PHONE}
              </a>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="text-xs text-[#7a1b38] hover:underline font-medium"
              >
                Contact Us পেজে যান →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
