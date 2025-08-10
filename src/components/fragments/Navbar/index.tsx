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
      className={cn(
        "fixed top-0 right-0 left-0 z-50 bg-background",
        isScrolled &&
          "bg-background/80 shadow-md backdrop-blur dark:shadow-white/20",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
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
                <span className="bg-gradient-to-r from-my-primary to-green-700 bg-clip-text text-xl font-bold text-transparent">
                  Tarmu Online
                </span>
              </Link>
            </div>
            <NavigationMenu className="hidden items-center space-x-8 lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} ${
                      pathname === "/" ? "text-my-primary" : ""
                    }`}
                  >
                    <Link href="/">Beranda</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} ${
                      pathname === "#" ? "text-my-primary" : ""
                    }`}
                  >
                    <Link href="#">E-Da{"'"}wat</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {largeMenuItems.map((item, index) => {
                  const isActive = item.children.some(
                    (c) => c.href === pathname,
                  );
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger
                        className={isActive ? "text-my-primary" : ""}
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
                                pathname === child.href ? "text-my-primary" : ""
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
                      pathname === "/article" ? "text-my-primary" : ""
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
          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center justify-center lg:gap-3">
              {status === "loading" ? null : !user ? (
                <Button
                  onClick={() => router.push("/login")}
                  size={"xs"}
                  className="bg-my-primary hover:bg-my-primary/60 flex cursor-pointer items-center justify-center rounded-full py-3.5 text-white"
                >
                  Masuk
                </Button>
              ) : (
                <NavUser />
              )}

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
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
