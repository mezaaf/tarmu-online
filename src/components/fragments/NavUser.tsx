"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getUserInitials } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  LayoutDashboard,
  LogOutIcon,
  Settings,
  UserIcon,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const NavUser = () => {
  const router = useRouter();
  const session = useSession();
  const user = session.data?.user;

  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Avatar className="w-5 h-5 sm:w-6 sm:h-6 lg:h-7 lg:w-7">
          <AvatarImage src={`${user?.image}`} alt={`${user?.username}`} />

          <AvatarFallback className="font-semibold">
            {getUserInitials(user?.name ?? "")}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="me-2">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">{user?.name}</h4>
            <p className="text-muted-foreground text-sm">{user?.email}</p>
          </div>
          <div className="grid gap-2">
            <Command>
              <CommandList>
                {user?.roles.includes("admin") ||
                user?.roles.includes("operator") ? (
                  <CommandItem onSelect={() => router.push("/admin")}>
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </CommandItem>
                ) : (
                  <>
                    <CommandItem
                      onSelect={() => router.push("/user/dashboard/articles")}
                    >
                      <BookOpen />
                      <span>Artikel</span>
                    </CommandItem>
                  </>
                )}
                <CommandItem onSelect={() => router.push("/account")}>
                  <UserIcon />
                  <span>Profile</span>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Settings</span>
                </CommandItem>
                <CommandItem onSelect={() => signOut()}>
                  <LogOutIcon />
                  <span>Logout</span>
                </CommandItem>
              </CommandList>
            </Command>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavUser;
