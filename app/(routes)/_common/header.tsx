"use client";

import Logo from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOutIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const { user } = useKindeBrowserClient();
  console.log("User in header:", user);

  return (
    <>
      <div className="sticky top-0 right-0 left-0 z-30">
        <header className="h-16 border-b bg-background py-4">
          <div className="w-full max-w-6xl mx-auto flex items-center justify-center justfy-between">
            <Logo />
            <div className="hidden flex-1 items-center justify-center md:flex cursor-pointer">
              <Link href="/" className="text-foreground-muted text-sm">
                Home
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <Button
                variant="outline"
                size="icon"
                className="relative rounded-full h-8 w-8 cursor-pointer"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              >
                <SunIcon className="h-5 w-5 scale-0 rotate-0 transition-all dark:scale-100 dark:-rotate-90" />
                <MoonIcon className="absolute h-5 w-5 scale-100 rotate-270 transition-all dark:scale-0 dark:rotate-0" />
              </Button>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="h-8 w-8 shrink-0 rounded-full cursor-pointer">
                      <AvatarImage src={user?.picture || ""} alt={user?.given_name || ""} />
                      <AvatarFallback className="rounded-lg">
                        {user?.given_name?.charAt(0) || ""}
                        {user?.family_name?.charAt(0) || ""}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogoutLink className="w-full flex items-center">
                        <LogOutIcon className="size-4 mr-2" />
                        Logout
                      </LogoutLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <LoginLink>
                  <Button className="cursor-pointer">Sign In</Button>
                </LoginLink>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
