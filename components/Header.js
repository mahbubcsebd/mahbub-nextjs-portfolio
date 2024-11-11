'use client';

import logo from "@/assets/icons/logo.svg";
import useDictionary from '@/hooks/useDictionary';
import Image from 'next/image';
import Link from 'next/link';
import { CiGrid41, CiHome, CiMail, CiUser } from 'react-icons/ci';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    const { dictionary } = useDictionary();

    const { nameLogo, Menu } = dictionary.Header;
    const { home, aboutMe, portfolio, contact } = Menu;

    const navMenus = [
        {
            id: 1,
            title: home,
            icon: <CiHome />,
            url: '/',
        },
        {
            id: 2,
            title: aboutMe,
            icon: <CiUser />,
            url: '#about',
        },
        {
            id: 3,
            title: portfolio,
            icon: <CiGrid41 />,
            url: '#portfolio',
        },
        {
            id: 4,
            title: contact,
            icon: <CiMail />,
            url: '#contact',
        },
    ];
    return (
        <header
            id="header"
            className="header fixed w-full z-50 bg-[#f5f5f5] dark:bg-[#0a0e1f]"
        >
            <div className="header-area py-4">
                <div className="container">
                    <div className="flex justify-between items-center gap-10">
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
                            {/* {`< ${nameLogo} />`} */}
                        </Link>
                        <ul className="flex items-center gap-[30px]">
                            {navMenus.map((menu) => (
                                <li key={menu.id}>
                                    <Link
                                        className="text-lg text-gray-500 font normal hover:text-gray-400 transition-all duration-150 capitalize flex items-center gap-1"
                                        href={menu.url}
                                    >
                                        <span>{menu.icon}</span>
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4">
                            <ThemeSwitcher />
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
