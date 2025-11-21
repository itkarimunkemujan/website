"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // toggle antara light dan dark
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon-lg"
      onClick={toggleTheme}
      className={className}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <Button variant="logoOutline" size="icon-lg" className="hover:none">
        <Image
          src="/karimun-kemujan-logo-blue.svg"
          alt="Karimun Kemujan Logo"
          width={32}
          height={32}
        />
      </Button>
    );
  }

  return (
    <Button variant="logoOutline" size="icon-lg" className="hover:none">
      <Image
        src={
          theme === "dark"
            ? "/karimun-kemujan-logo-white.svg"
            : "/karimun-kemujan-logo-blue.svg"
        }
        alt="Karimun Kemujan Logo"
        width={32}
        height={32}
      />
      <span className="sr-only">Karimun Kemujan Logo</span>
    </Button>
  );
};
