import HeaderContacts from './HeaderContacts';

const Header = () => {
  return (
    <header className="resume-header mb-6">
      <div className="mb-4">
        <h1 className="mb-1 text-[#062D5E] text-3xl font-semibold print:text-2xl">
          Mahbubur Rahman
        </h1>
        <p className="text-base font-normal text-gray-700 print:text-sm">
          Frontend Developer
        </p>
      </div>
      <HeaderContacts />
    </header>
  );
};

export default Header;
