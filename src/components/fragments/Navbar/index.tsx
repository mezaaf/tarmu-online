"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { forwardRef, useEffect, useState } from "react";
import { largeMenuItems } from "./largeMenuItem";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import NavUser from "../NavUser";
import ThemeToggle from "../ThemeToggle";
import { SectionContainer } from "@/components/layouts/SectionContainer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const user = status === "authenticated" ? session.user : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);

  return (
    <div
      className={`sticky top-0 left-0 z-100 flex h-10 w-full items-center transition-shadow duration-300 md:h-18 bg-pondok-accent py-8  ${
        isScrolled &&
        "bg-pondok-accent shadow-md backdrop-blur dark:shadow-white/20"
      }`}
    >
      <SectionContainer
        className="flex h-12 items-center justify-between lg:h-16 py-0!"
        padded
      >
        <div className="flex gap-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <Image
                  src={"/images/logos/logo-pondok1.png"}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <span className="text-xl font-bold text-pondok-text-light">
                TarmuOnline.
              </span>
            </Link>
          </div>
          <NavigationMenu className="hidden items-center space-x-8 lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/"
                      ? "text-pondok-primary"
                      : "text-pondok-text-light"
                  }`}
                >
                  <Link href="/" className="">
                    Beranda
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "#"
                      ? "text-pondok-primary"
                      : "text-pondok-text-light"
                  }`}
                >
                  <Link href="#">E-Da{"'"}wat</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {largeMenuItems.map((item, index) => {
                const isActive = item.children.some((c) => c.href === pathname);
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger
                      className={
                        isActive
                          ? "text-pondok-primary"
                          : "text-pondok-text-light"
                      }
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.children.map((child, childIndex) => (
                          <ListItem
                            key={childIndex}
                            title={child.title}
                            href={child.href}
                            className={
                              pathname === child.href
                                ? "text-pondok-primary"
                                : ""
                            }
                          >
                            {child.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === "/article"
                      ? "text-pondok-primary"
                      : "text-pondok-text-light"
                  }`}
                >
                  <Link href="/article">Artikel</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <FeedbackDialog isMobile={false} />
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="items-center gap-2 flex">
          <div className="flex items-center justify-center lg:gap-3">
            {status === "loading" ? null : !user ? (
              <Button
                onClick={() => router.push("/login")}
                size={"xs"}
                className="bg-pondok-primary hover:bg-pondok-primary/60 flex cursor-pointer items-center justify-center rounded-full py-3.5 text-pondok-text-light"
              >
                Masuk
              </Button>
            ) : (
              <NavUser />
            )}

            <ThemeToggle />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Navbar;

const ListItem = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { href: string; title?: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link href={href}>
        <NavigationMenuLink asChild>
          <div
            ref={ref}
            className={cn(
              "hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground block cursor-pointer space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
              className,
            )}
            {...props}
          >
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </div>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});

ListItem.displayName = "ListItem";
