"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "day" | "night";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDay: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "day",
  toggleTheme: () => {},
  isDay: true,
});

export function DayNightProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("day");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      if (stored === "night") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "day" ? "night" : "day";
      localStorage.setItem("portfolio-theme", next);
      if (next === "night") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDay: theme === "day" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
