'use client';

import banglaImg from '@/assets/icons/bangladesh.svg';
import englishImg from '@/assets/icons/usa.svg';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
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
  const currentLanguage = languages.find((lang) => lang.code === language);

  // Standard 6:10 ratio (height:width)
  const flagWidth = 20; // px
  const flagHeight = flagWidth * 0.6; // 6:10 ratio

  return (
    <div className="relative">
      <Select value={language} onValueChange={changeLanguage}>
        <SelectTrigger className="w-24 h-10 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-700 transition-colors focus:ring-0 focus:ring-offset-0 focus:outline-none [&[data-state=open]]:ring-0 [&[data-state=open]]:ring-offset-0">
          <div className="flex items-center gap-2">
            <div
              className="relative overflow-hidden shrink-0"
              style={{
                width: `${flagWidth}px`,
                height: `${flagHeight}px`,
              }}
            >
              {currentLanguage?.flag && (
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage?.name || ''}
                  fill
                  className="object-cover"
                  style={{
                    aspectRatio: '10/6',
                  }}
                />
              )}
            </div>
            <span className="text-sm font-medium text-gray-700 truncate dark:text-gray-200">
              {currentLanguage?.code.toUpperCase()}
            </span>
          </div>
        </SelectTrigger>
        <SelectContent
          side="bottom"
          align="end"
          className="min-w-[150px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg rounded-md"
          position="popper"
        >
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="px-4 py-2 transition-colors cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <div className="flex items-center w-full gap-3">
                <div
                  className="relative overflow-hidden shrink-0"
                  style={{
                    width: `${flagWidth}px`,
                    height: `${flagHeight}px`,
                  }}
                >
                  {lang.flag && (
                    <Image
                      src={lang.flag}
                      alt={lang.name || ''}
                      className="object-cover"
                      width={flagWidth}
                      height={flagHeight}
                      style={{
                        aspectRatio: '10/6',
                      }}
                    />
                  )}
                </div>
                <span className="flex-1 min-w-0 text-sm font-medium text-gray-700 dark:text-gray-200">
                  {lang.name}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
