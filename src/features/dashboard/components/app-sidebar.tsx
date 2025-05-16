import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { adminNav } from "./adminNav";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mb-3 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-tosca text-lg font-bold md:text-2xl">
            tarmu<span className="text-gold">web</span>.
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={adminNav.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={adminNav.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
