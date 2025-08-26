import { useState, useEffect } from "react";
import styles from "./ThemeSwitcher.module.scss";

// Main ThemeSwitcher component
const ThemeSwitcher = () => {
  // Define the available themes with their names and a corresponding CSS class from the module.
  const themes = [
    { name: "teal", className: styles.teal },
    { name: "purple", className: styles.purple },
    { name: "magenta", className: styles.magenta },
    { name: "cyan", className: styles.cyan },
  ];

  // Initialize state from localStorage or default to 'teal'.
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "teal";
    }
    return "teal";
  });

  // useEffect hook to handle side effects:
  // 1. Update the body class to reflect the current theme.
  // 2. Save the current theme to localStorage.
  useEffect(() => {
    // Check if window is defined (to handle Next.js server-side rendering).
    if (typeof window !== "undefined") {
      const body = document.body;
      // Remove all theme classes before adding the new one.
      themes.forEach((theme) => {
        body.classList.remove(`theme-${theme.name}`);
      });
      // Add the class for the currently selected theme.
      body.classList.add(`theme-${currentTheme}`);
      // Persist the theme choice in localStorage.
      localStorage.setItem("theme", currentTheme);
    }
  }, [currentTheme]); // This effect runs whenever currentTheme changes.

  return (
    <div className={styles.container}>
      {themes.map((theme) => (
        <button
          key={theme.name}
          aria-label={`Select ${theme.name} theme`}
          onClick={() => setCurrentTheme(theme.name)}
          className={`
            ${styles.button}
            ${theme.className}
            ${currentTheme === theme.name ? styles.active : ""}
          `}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
