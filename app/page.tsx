"use client";

import { Web3HeroAnimated } from "@/components/ui/animated-web3-landing-page";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SignedInRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/ui-components");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome back!</h1>
        <p className="text-xl mb-8">Redirecting you to your dashboard...</p>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SignedOut>
        <Web3HeroAnimated />
      </SignedOut>
      <SignedIn>
        <SignedInRedirect />
      </SignedIn>
    </>
  );
}
