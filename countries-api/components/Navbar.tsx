import { Dispatch, SetStateAction } from 'react';
import { BsMoon, BsMoonFill } from 'react-icons/bs';
interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div
      className={`
      flex items-center justify-between
      px-4 sm:px-16 py-6 shadow-md
      ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}
      `}
    >
      <div className="text-xl font-bold">Where in the world?</div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <>
            <BsMoon size={12} />
            Light Mode
          </>
        ) : (
          <>
            <BsMoonFill size={12} />
            Dark Mode
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
