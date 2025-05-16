import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="#">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Image
                src="/images/logos/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-full h-full object-fit"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <h1 className="text-tosca text-lg font-bold md:text-2xl">
                tarmu<span className="text-gold">web</span>.
              </h1>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
