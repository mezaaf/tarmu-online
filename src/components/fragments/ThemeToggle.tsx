"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <Button
          variant={"ghost"}
          onClick={() => setTheme("light")}
          className="cursor-pointer text-pondok-text-light hover:text-pondok-text-light bg-transparent hover:bg-transparent dark:text-pondok-text-light dark:bg-transparent dark:hover:bg-transparent"
        >
          <Sun />
        </Button>
      ) : (
        <Button
          variant={"ghost"}
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-pondok-text-light hover:text-pondok-text-light bg-transparent hover:bg-transparent dark:text-pondok-text-light dark:bg-transparent dark:hover:bg-transparent"
        >
          <Moon />
        </Button>
      )}
    </div>
  );
};

export default ThemeToggle;
