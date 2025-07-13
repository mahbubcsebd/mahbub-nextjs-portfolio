'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-10 h-10 transition-colors bg-white border border-gray-200 rounded-md dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-700"
    >
      {mounted ? (
        theme === 'dark' ? (
          <Moon className="w-4 h-4 text-zinc-400" />
        ) : (
          <Sun className="w-4 h-4 text-zinc-400" />
        )
      ) : (
        <span className="w-4 h-4" /> // keeps layout stable, no mismatch
      )}
    </button>
  );
};

export default ThemeSwitcher;
