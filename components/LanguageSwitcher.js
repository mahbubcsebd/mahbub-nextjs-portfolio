'use client';

import banglaImg from '@/assets/icons/bangladesh.svg';
import englishImg from '@/assets/icons/usa.svg';
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
            <SelectTrigger className="w-10 h-6 rounded-none overflow-hidden border-none bg-transparent focus:ring-0 focus:ring-offset-0 p-0 [&>svg]:hidden">
                <SelectValue>
                    <div className="relative w-10 h-6">
                        <Image
                            src={currentLanguage?.flag}
                            alt={currentLanguage?.name}
                            className="w--full h-full"
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
                            <div className="relative w-6 h-4">
                                <Image
                                    src={lang.flag}
                                    alt={lang.name}
                                    className="w-full h-full"
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
