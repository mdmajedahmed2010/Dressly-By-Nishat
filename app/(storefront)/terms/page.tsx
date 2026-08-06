/**
 * Sew In Style by Farzana — Terms & Conditions
 * Sew In Style by Farzana | Authentic Pakistani Luxury Suits & Designer Collections
 */

import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sew In Style by Farzana | Sew In Style by Farzana",
  description:
    "Sew In Style by Farzanaের Terms & Conditions। Order Process, Delivery Policy, Cash on Delivery, 3-Day Exchange Policy সম্পর্কে বিস্তারিত জানুন।",
};

const sections = [
  {
    id: "01",
    title: "আমাদের পরিচয় ও ব্যবসায়িক মডেল",
    content: `Sew In Style by Farzana বাংলাদেশে প্রিমিয়াম ট্র্যাডিশনাল শাড়ি এবং এক্সক্লুসিভ কালেকশনের একটি নির্ভরযোগ্য বুটিক ব্র্যান্ড।

আমরা ১০০% অরিজিনাল প্রিমিয়াম কালেকশন ও ফ্যাব্রিক সরবরাহ করি। সকল ড্রেস প্রিমিয়াম ফিনিশিং এবং নিখুঁত সূচিকর্ম দ্বারা সমৃদ্ধ।`,
  },
  {
    id: "02",
    title: "Order Process",
    content: `Order করতে আমাদের Facebook Page-এ Inbox করুন অথবা সরাসরি ওয়েবসাইটে অর্ডার প্লেস করুন। অর্ডার করার সময় নিম্নের তথ্য প্রদান করুন:
• আপনার পূর্ণ নাম
• সক্রিয় ফোন নম্বর
• সম্পূর্ণ ডেলিভারি ঠিকানা (জেলা ও থানা সহ)
• পছন্দের পণ্যের বিস্তারিত (ছবি/নাম)

আমরা সারাদেশে Cash on Delivery-তে পণ্য পাঠাই। ঢাকার বাইরে অর্ডারের ক্ষেত্রে কুরিয়ার ফি অগ্রিম প্রযোজ্য হতে পারে।`,
  },
  {
    id: "03",
    title: "Delivery Policy",
    content: `ডেলিভারি চার্জ:
• ঢাকার ভিতরে: ৳80
• ঢাকার বাইরে: ৳150

ডেলিভারি সময়:
• ঢাকার ভিতরে: ২৪–৪৮ ঘন্টা (১-২ কার্যদিবস)
• ঢাকার বাইরে: ২–৪ কার্যদিবস

Cash on Delivery সুবিধায় পণ্য ডেলিভারি ম্যানের থেকে বুঝে পাওয়ার পর মূল্য পরিশোধ করুন।`,
  },
  {
    id: "04",
    title: "Return & Exchange Policy",
    content: `আমরা ৩ দিনের সহজ এক্সচেঞ্জ গ্যারান্টি প্রদান করি। 

পণ্য পাওয়ার পর কোনো সাইজ সমস্যা, ম্যানুফ্যাকচারিং ত্রুটি বা ভুল পণ্য প্রাপ্তির ক্ষেত্রে ৩ দিনের মধ্যে আমাদের ইনবক্সে জানান। পণ্যটি অবিকৃত ও অব্যবহৃত অবস্থায় থাকতে হবে।`,
    highlight: false,
  },
  {
    id: "05",
    title: "পণ্যের গুণমান ও অরিজিনালিটি",
    content: `Sew In Style by Farzanaের প্রতিটি ড্রেস:
• ১০০% আসল ও প্রিমিয়াম কাপড়ের নিশ্চয়তা
• উন্নত ফিনিশিং ও নিখুঁত কাজ
• Premium কোয়ালিটি ও পজিটিভ ফিডব্যাক`,
  },
  {
    id: "06",
    title: "Privacy ও তথ্যের নিরাপত্তা",
    content: `আপনার ব্যক্তিগত তথ্য (নাম, ফোন, ঠিকানা) শুধুমাত্র Order Process ও Delivery-র জন্য ব্যবহার করা হয়। আমরা কোনো তৃতীয় পক্ষের সাথে আপনার তথ্য শেয়ার করি না।`,
  },
  {
    id: "07",
    title: "যোগাযোগ",
    content: `যেকোনো প্রশ্ন বা সমস্যার জন্য:

Facebook Page: facebook.com/sewinstylebyfarzana1
ফোন/হোয়াটসঅ্যাপ: ${BUSINESS.PHONE}
ইমেইল: ${BUSINESS.EMAIL}
ঠিকানা: Shop No: 366, Level-2, Police Plaza Concord, Gulshan-1, Dhaka-1212`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5]">
      {/* Page Header */}
      <section className="bg-[#7a1b38] py-16 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#d4af37] translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#fcfaf6] text-[10px] uppercase tracking-[0.28em] font-bold rounded-full">
            আমাদের শর্তাবলী
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Terms & Conditions
          </h1>
          <p className="text-[#fcfaf6]/80 text-sm leading-relaxed">
            Sew In Style by Farzanaে কেনাকাটা করার আগে আমাদের শর্তাবলী পড়ুন।
          </p>
          <p className="text-[#d4af37]/70 text-xs">সর্বশেষ আপডেট: জুলাই ২০২৬</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="rounded-sm p-6 md:p-8 bg-white border border-[#e8e0d0] border-l-4 border-l-[#7a1b38]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-mono text-[#d4af37] font-bold bg-[#7a1b38]/10 px-2 py-0.5 rounded">
                  {section.id}
                </span>
                <h2 className="text-base md:text-lg font-bold text-[#1a0008]">
                  {section.title}
                </h2>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}

          {/* Acceptance Notice */}
          <div className="text-center pt-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7a1b38]/5 border border-[#d4af37]/25">
              <span className="text-[#d4af37] text-sm">✦</span>
              <p className="text-xs text-[#7a1b38] font-medium">
                Sew In Style by Farzanaে Order করে আপনি এই Terms & Conditions-এ সম্মত হচ্ছেন
              </p>
              <span className="text-[#d4af37] text-sm">✦</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/refund-policy"
                className="text-sm text-[#7a1b38] hover:underline font-semibold"
              >
                Refund & Exchange Policy →
              </Link>
              <span className="text-[#d4af37] hidden sm:inline">|</span>
              <Link
                href="/contact"
                className="text-sm text-[#7a1b38] hover:underline font-semibold"
              >
                Contact Us →
              </Link>
              <span className="text-[#d4af37] hidden sm:inline">|</span>
              <Link
                href="/privacy-policy"
                className="text-sm text-[#7a1b38] hover:underline font-semibold"
              >
                Privacy Policy →
              </Link>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-10 bg-[#7a1b38] text-[#fcfaf6] text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-[#5c132a] transition-all shadow-sm"
              >
                কেনাকাটা শুরু করুন
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
