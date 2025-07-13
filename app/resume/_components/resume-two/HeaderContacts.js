import Link from 'next/link';
import { contactItems } from './_constants';

const HeaderContacts = () => {
  return (
    <div className="contact py-3 border-b border-slate-300">
      <div className="flex flex-wrap print:flex-nowrap items-center gap-4 print:gap-1">
        {contactItems.slice(0, 4).map((item, index, items) => (
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

export default HeaderContacts;
