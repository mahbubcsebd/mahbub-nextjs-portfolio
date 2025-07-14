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
      aria-label={
        mounted
          ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
          : 'Theme toggle'
      }
      className="flex items-center justify-center w-10 h-10 transition-colors bg-white border border-gray-200 rounded-md cursor-pointer dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
    >
      {mounted ? (
        theme === 'dark' ? (
          <>
            <Moon className="w-4 h-4 text-zinc-400" />
            <span className="sr-only">Switch to light theme</span>
          </>
        ) : (
          <>
            <Sun className="w-4 h-4 text-zinc-400" />
            <span className="sr-only">Switch to dark theme</span>
          </>
        )
      ) : (
        <span className="w-4 h-4 sr-only">Theme toggle loading</span>
      )}
    </button>
  );
};

export default ThemeSwitcher;
