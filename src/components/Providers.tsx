"use client";

import { ThemeProvider } from "next-themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ProgressBar
        height="2px"
        color="var(--color-text-main)"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </ThemeProvider>
  );
}
