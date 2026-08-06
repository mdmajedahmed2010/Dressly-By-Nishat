/**
 * Sew In Style — Register Page
 * SOP §২ — Frontend Plan PAGE 6
 *
 * Route: /register
 * Features: Name, Email, Phone, Password, Confirm Password — Zod validated
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { RegisterForm } from "@/components/auth/register-form";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your Sew In Style by Farzana account for a better shopping experience.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block text-2xl font-extrabold tracking-wide uppercase text-[#7a1b38] font-heading">
            Sew In Style by Farzana
          </Link>
          <h1 className="text-xl font-semibold">Create your account</h1>
          <p className="text-sm text-muted-foreground">
            Join Sew In Style by Farzana for a personalized shopping experience
          </p>
        </div>

        {/* Register Form */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          }
        >
          <RegisterForm />
        </Suspense>

        {/* Login Link */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground hover:underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
