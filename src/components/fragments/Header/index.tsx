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
import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTheme } from "next-themes";
import { largeMenuItems } from "./largeMenuItem";
import { smallMenuItems } from "./smallMenuItem";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`sticky top-0 left-0 z-100 flex h-10 w-full items-center px-5 transition-shadow duration-300 md:h-18 ${
          isScrolled &&
          "bg-background/80 shadow-md backdrop-blur dark:shadow-white/20"
        }`}
      >
        <div className="flex w-full items-center justify-between gap-10 lg:px-16">
          <div className="flex gap-4">
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-tosca text-lg font-bold md:text-2xl">
                tarmu<span className="text-gold">web</span>.
              </h1>
            </Link>
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Beranda
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/da'wat" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Da{"'"}wat Apps
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {largeMenuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.children.map((child, childIndex) => (
                          <li className="spac-x-3" key={childIndex}>
                            <ListItem
                              key={childIndex}
                              title={child.title}
                              href={child.href}
                            >
                              {child.description}
                            </ListItem>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Warta
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center justify-center">
              <Button
                size={"xs"}
                variant={"outline"}
                className="cursor-pointer rounded-full border-red-600 py-3.5 hover:bg-red-600 hover:text-white dark:border-red-600 dark:hover:bg-red-600"
              >
                Logout
              </Button>
              <Button
                size={"xs"}
                className="bg-tosca hover:bg-tosca/60 cursor-pointer rounded-full py-3.5 text-white"
              >
                Login
              </Button>

              <Button
                variant={"transparent"}
                size={"icon"}
                className="group hover:bg-tosca/20 flex cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-300"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="group-hover:text-tosca" strokeWidth={1.5} />
                ) : (
                  <Moon className="group-hover:text-tosca" strokeWidth={1.5} />
                )}
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-end gap-3 lg:hidden">
            {/* <Search size={20} /> */}
            <Button
              variant={"transparent"}
              size={"icon"}
              className="group hover:bg-tosca/20 flex cursor-pointer items-center justify-center rounded-full p-0 transition-all duration-300"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun
                  className="group-hover:text-tosca h-5 w-5"
                  strokeWidth={1.5}
                />
              ) : (
                <Moon
                  className="group-hover:text-tosca h-5 w-5"
                  strokeWidth={1.5}
                />
              )}
            </Button>
            <Drawer>
              <DrawerTrigger>
                <Menu size={20} className="mouse-pointer" />
              </DrawerTrigger>
              <DrawerContent className="space-y-4 p-5">
                <DrawerTitle>
                  <Link href={"/"} className="font-semibold">
                    <DrawerClose>Beranda</DrawerClose>
                  </Link>
                </DrawerTitle>
                <DrawerDescription hidden />
                <Link href={"/da'wat"} className="font-semibold">
                  <DrawerClose>Da{"'"}wat Apps</DrawerClose>
                </Link>
                <Accordion type="single" collapsible>
                  {smallMenuItems.map((item, index) => (
                    <AccordionItem
                      value={`item-${index}`}
                      key={index}
                      className="border-none"
                    >
                      <AccordionTrigger className="hover: cursor-pointer py-2 text-base font-semibold hover:no-underline">
                        {item.label}
                      </AccordionTrigger>
                      {item.children.map((child, childIndex) => (
                        <AccordionContent key={childIndex}>
                          <Link href={child.href}>
                            <DrawerClose>{child.label}</DrawerClose>
                          </Link>
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  ))}
                </Accordion>
                <Link href={"/"} className="font-semibold">
                  Warta
                </Link>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { href: string; title?: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink asChild>
          <div
            ref={ref}
            className={cn(
              "hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground block cursor-pointer space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
              className
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

export default Header;
