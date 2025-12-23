import React from "react";

import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "light"
  );

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
