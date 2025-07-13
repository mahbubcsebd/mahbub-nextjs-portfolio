import Link from 'next/link';
import { contactItems } from './_constants';
import ResumeTitle from './ResumeTitle';

const Contacts = () => {
  return (
    <div className="mb-6">
      <ResumeTitle>Contact</ResumeTitle>
      <ul className="grid grid-cols-3 gap-2">
        {contactItems.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <div>
              <p className="flex items-center justify-center">{item.icon}</p>
            </div>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
