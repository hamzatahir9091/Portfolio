import React, { useEffect, useState } from "react";


const DarkModeToggle = () => {
  // state to track current mode
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check system preference or localStorage
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      if (savedMode === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    } else {
      // Fallback: system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
