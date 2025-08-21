import WebsiteQR from '@/assets/icons/website-qr.svg';
import Image from 'next/image';
import HeaderContacts from './HeaderContacts';

const Header = () => {
  return (
    <header className="resume-header mb-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-[#062D5E] text-3xl font-semibold print:text-2xl">
            Mahbubur Rahman
          </h1>
          <p className="text-base font-normal text-gray-700 print:text-sm">
            Frontend Developer
          </p>
        </div>
        <div className="w-16 h-16 overflow-hidden">
          <Image
            src={WebsiteQR}
            alt="Website QR Code"
            width={64}
            height={64}
            priority
          />
        </div>
        {/* <PortfolioQRCode /> */}
      </div>
      <HeaderContacts />
    </header>
  );
};

export default Header;
