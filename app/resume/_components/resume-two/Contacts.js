import Link from 'next/link';
import { professionalInfo } from './_constants';
import ResumeTitle from './ResumeTitle';

const Contacts = () => {
  return (
    <div className="mb-6">
      <ResumeTitle>Professional Links</ResumeTitle>
      <div className="flex flex-wrap items-center gap-2 print:flex-nowrap print:gap-1">
        {professionalInfo.map((item, index, items) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-slate-700 print:text-xs"
          >
            <span className="text-[#062D5E] text-lg flex items-center print:text-sm">
              {item.icon}
            </span>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#062D5E] hover:text-slate-800 transition-colors duration-200"
            >
              {item.value}
            </Link>

            {index !== items.length - 1 && (
              <span className="mx-2 text-gray-300 select-none print:mx-1">
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
