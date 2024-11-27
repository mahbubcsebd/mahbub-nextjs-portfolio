"use client"

import logo from "@/assets/icons/logo.svg";
import useDictionary from '@/hooks/useDictionary';
import { AnimatePresence, motion } from 'framer-motion';
import { BriefcaseBusiness, Contact, House, User } from "lucide-react";
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
            icon: <House className="text-base" />,
            url: '/',
        },
        {
            id: 2,
            title: aboutMe,
            icon: <User className="text-base" />,
            url: '#about',
        },
        {
            id: 3,
            title: portfolio,
            icon: <BriefcaseBusiness className="text-base" />,
            url: '#portfolio',
        },
        {
            id: 4,
            title: contact,
            icon: <Contact className="text-base" />,
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
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    };

    const menuItemVariants = {
        closed: {
            opacity: 0,
            x: 50
        },
        open: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <header
            id="header"
            className="header fixed w-full z-50 bg-[#F8F9FA] dark:bg-[#0a0e1f]"
        >
            <div className="header-area py-4 border-b border-gray-300 dark:border-gray-900">
                <div className="container">
                    <div className="flex justify-between items-center gap-4">
                        <Link
                            href="/"
                            className="text-2xl text-gray-400 font-semibold capitalize flex items-center gap-1"
                        >
                            <span className="w-10 overflow-hidden">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="w-full h-full"
                                />
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center gap-[30px]">
                            {navMenus.map((menu) => (
                                <li key={menu.id}>
                                    <Link
                                        className="text-lg text-gray-500 font-normal hover:text-gray-400 transition-all duration-150 capitalize flex items-center gap-1"
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
                        <motion.ul className="flex flex-col p-6 gap-6">
                            {navMenus.map((menu) => (
                                <motion.li
                                    key={menu.id}
                                    variants={menuItemVariants}
                                >
                                    <Link
                                        className="text-lg text-gray-500 font-normal hover:text-gray-400 transition-all duration-150 capitalize flex items-center gap-3"
                                        href={menu.url}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="text-xl">
                                            {menu.icon}
                                        </span>
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