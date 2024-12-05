import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme} className="fixed bottom-4 right-4 p-2">
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
