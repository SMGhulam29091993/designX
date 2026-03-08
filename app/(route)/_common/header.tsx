"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();

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
              <Button className="cursor-pointer">Sign In</Button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
