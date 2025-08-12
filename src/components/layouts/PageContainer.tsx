"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { forwardRef } from "react";
import { Toaster } from "sonner";
import Navbar from "../fragments/Navbar";
import ScrollToTop from "../fragments/ScrollToTop";
import Footer from "../fragments/Footer";

const disableNavbar = ["login", "admin"];

export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  const pathname = usePathname();
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-pondok-bg text-pondok-text-dark dark:text-pondok-text-light">
      {!disableNavbar.includes(pathname.split("/")[1] ?? "") && <Navbar />}
      <main
        ref={ref}
        className={cn("flex flex-1 flex-col items-center", className)}
        {...props}
      >
        {children}
      </main>
      {!disableNavbar.includes(pathname.split("/")[1] ?? "") && <Footer />}
      <Toaster richColors position="top-right" />
      <ScrollToTop />
    </div>
  );
});

PageContainer.displayName = "PageContainer";
