// src/components/ThemeToggle.jsx
import { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return storedTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} transition={{ duration: 0.18 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label={`Bytt til ${theme === 'dark' ? 'lyst' : 'mørkt'} tema`}
        className="relative overflow-hidden rounded-full cursor-pointer"
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </motion.span>
      </Button>
    </motion.div>
  );
}

export default ThemeToggle;