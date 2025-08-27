import { useState, useEffect } from "react";
import { OverflowMenu, OverflowMenuItem } from "@carbon/react";
import { ColorPalette } from "@carbon/icons-react";
import styles from "./ThemeSwitcher.module.scss";

const THEMES = [
  { name: "teal", label: "Teal" },
  { name: "magenta", label: "Magenta" },
  { name: "cyan", label: "Cyan" },
  { name: "green", label: "Green" },
  { name: "purple", label: "Purple" },
  { name: "blue", label: "Blue" },

  { name: "red", label: "Red" },
];

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    try {
      return localStorage.getItem("theme") || "teal";
    } catch (error) {
      console.warn("Could not access localStorage:", error);
      return "teal";
    }
  }
  return "teal";
};

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.body;

      // Remove all theme classes
      THEMES.forEach((theme) => {
        body.classList.remove(`theme-${theme.name}`);
      });

      // Add current theme class
      body.classList.add(`theme-${currentTheme}`);

      // Persist to localStorage with error handling
      try {
        localStorage.setItem("theme", currentTheme);
      } catch (error) {
        console.warn("Could not save theme to localStorage:", error);
      }
    }
  }, [currentTheme]);

  return (
    <div className={styles.container}>
      <OverflowMenu renderIcon={ColorPalette} flipped size="sm">
        {THEMES.map((theme) => (
          <OverflowMenuItem
            key={theme.name}
            itemText={
              <span className={`${styles.dot} ${styles[theme.name]}`}>
                {theme.label}
              </span>
            }
            onClick={() => setCurrentTheme(theme.name)}
            className={currentTheme === theme.name ? styles.active : ""}
          />
        ))}
      </OverflowMenu>
    </div>
  );
};

export default ThemeSwitcher;
