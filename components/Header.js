"use client";

import logo from "@/assets/icons/logo.svg";
import useDictionary from '@/hooks/useDictionary';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Briefcase,
    Home,
    Mail,
    UserRound
} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary } = useDictionary();

  const { nameLogo, Menu } = dictionary.Header;
  const { home, aboutMe, portfolio, contact } = Menu;

  const navMenus = [
    {
      id: 1,
      title: home,
      icon: <Home className="text-base" />,
      url: '/',
    },
    {
      id: 2,
      title: aboutMe,
      icon: <UserRound className="text-base" />,
      url: '#about',
    },
    {
      id: 3,
      title: portfolio,
      icon: <Briefcase className="text-base" />,
      url: '#portfolio',
    },
    {
      id: 4,
      title: contact,
      icon: <Mail className="text-base" />,
      url: '#contact',
    },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <header id="header" className="header fixed w-full z-50 bg-[#F8F9FA] dark:bg-[#0a0e1f]">
      <div className="py-4 border-b border-gray-300 header-area dark:border-gray-900">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-1 text-2xl font-semibold text-gray-400 capitalize">
              <span className="w-10 overflow-hidden">
                <Image src={logo} alt="logo" className="w-full h-full" />
              </span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-[30px]">
              {navMenus.map((menu) => (
                <li key={menu.id}>
                  <Link
                    className="flex items-center gap-1 text-lg font-normal text-gray-500 capitalize transition-all duration-150 hover:text-gray-400"
                    href={menu.url}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-base">{menu.icon}</span>
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme and Language Switchers */}
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <LanguageSwitcher />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl text-gray-500 md:hidden"
              >
                {isOpen ? <RxCross1 /> : <RiMenu3Line />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed w-full right-0 top-[69px] bg-[#f5f5f5] dark:bg-[#0a0e1f] md:hidden"
          >
            <motion.ul className="flex flex-col gap-6 p-6">
              {navMenus.map((menu) => (
                <motion.li key={menu.id} variants={menuItemVariants}>
                  <Link
                    className="flex items-center gap-3 text-lg font-normal text-gray-500 capitalize transition-all duration-150 hover:text-gray-400"
                    href={menu.url}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl">{menu.icon}</span>
                    {menu.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
