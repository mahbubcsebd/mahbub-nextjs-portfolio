'use client';

import banglaImg from '@/assets/icons/bangla.svg';
import englishImg from '@/assets/icons/english.svg';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import { useContext } from 'react';

const languages = [
    { code: 'en', name: 'English', flag: englishImg },
    { code: 'bn', name: 'বাংলা', flag: banglaImg },
];

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

    // Find current language object
    const currentLanguage = languages.find((lang) => lang.code === language);

    return (
        <Select
            value={language}
            onValueChange={changeLanguage}
        >
            <SelectTrigger className="w-6 h-6 overflow-hidden rounded-full border-none bg-transparent focus:ring-0 focus:ring-offset-0 p-0 [&>svg]:hidden">
                <SelectValue>
                    <div className="relative w-6 h-6 rounded-full">
                        <Image
                            src={currentLanguage?.flag}
                            alt={currentLanguage?.name}
                            className="rounded-full"
                            fill
                            sizes="24px"
                        />
                    </div>
                </SelectValue>
            </SelectTrigger>
            <SelectContent
                side="bottom"
                align="end"
            >
                {languages.map((lang) => (
                    <SelectItem
                        key={lang.code}
                        value={lang.code}
                        className="cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="relative w-5 h-5">
                                <Image
                                    src={lang.flag}
                                    alt={lang.name}
                                    className="rounded-full"
                                    fill
                                    sizes="20px"
                                />
                            </div>
                            <span>{lang.name}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default LanguageSwitcher;
