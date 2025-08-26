import { useState, useEffect } from "react";
import { OverflowMenu, OverflowMenuItem } from "@carbon/react";
import { ColorPalette } from "@carbon/icons-react";
import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const themes = [
    { name: "teal", label: "Teal", color: "#009d9a" },
    { name: "purple", label: "Purple", color: "#8a3ffc" },
    { name: "magenta", label: "Magenta", color: "#d12771" },
    { name: "cyan", label: "Cyan", color: "#1192e8" },
  ];

  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "teal";
    }
    return "teal";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.body;
      themes.forEach((theme) => {
        body.classList.remove(`theme-${theme.name}`);
      });
      body.classList.add(`theme-${currentTheme}`);
      localStorage.setItem("theme", currentTheme);
    }
  }, [currentTheme]);

  return (
    <div className={styles.container}>
      <OverflowMenu renderIcon={ColorPalette} flipped size="sm">
        {themes.map((theme) => (
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
