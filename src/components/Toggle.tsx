
"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Monitor } from "lucide-react";

export function ModeToggle() {
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    updateTheme(savedTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const updateTheme = (newTheme: string) => {
    if (newTheme === "system") {
      localStorage.removeItem("theme");
      document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } else {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
    setTheme(newTheme);
    fetch("/api/set-theme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme: newTheme }),
    }).catch((error) => console.error("Failed to save theme to cookie:", error));
  };

  const themes = [
    { name: "Light", value: "light", icon: <Sun className="w-4 h-4" /> },
    { name: "Dark", value: "dark", icon: <Moon className="w-4 h-4" /> },
    { name: "System", value: "system", icon: <Monitor className="w-4 h-4" /> },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[2];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 text-sm font-medium hover:text-primary border border-border rounded-md px-3 py-1">
          {currentTheme.icon}
          <span>{currentTheme.name}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-0">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => updateTheme(theme.value)}
            className="flex items-center space-x-2 px-4 py-2 text-sm"
          >
            {theme.icon}
            <span>{theme.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
