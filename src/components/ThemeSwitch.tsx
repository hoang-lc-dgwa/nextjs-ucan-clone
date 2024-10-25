"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

interface ThemeSwitchProps {}
export default function ThemeSwitch({}: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="theme-switch-wrap">
      {mounted ? (
        resolvedTheme === "dark" ? (
          <button
            className="theme-switch-icon"
            aria-label="Theme Switch"
            onClick={() => setTheme("light")}
          >
            <FiSun />
          </button>
        ) : (
          <button
            className="theme-switch-icon"
            aria-label="Theme Switch"
            onClick={() => setTheme("dark")}
          >
            <FiMoon />
          </button>
        )
      ) : (
        <span className="hidden">...</span>
      )}
    </div>
  );
}
