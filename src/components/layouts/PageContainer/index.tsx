import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Footer from "@/components/fragments/Footer";
import ScrollToTop from "@/components/fragments/ScrollToTop";
import Header from "@/components/fragments/Header";
import { HeadMetaData } from "@/components/fragments/HeadMetaData";

const disableNavbar = ["auth", "dashboard"];

export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  const { pathname } = useRouter();
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <HeadMetaData />
      {!disableNavbar.includes(pathname.split("/")[1] ?? "") && <Header />}

      <main
        ref={ref}
        className={cn("flex flex-1 flex-col items-center", className)}
        {...props}
      >
        {children}
      </main>
      <ScrollToTop />
      {!disableNavbar.includes(pathname.split("/")[1] ?? "") && <Footer />}
    </div>
  );
});

PageContainer.displayName = "PageContainer";
