'use client';
import useCountries from '@/hooks/useCountries';
import useDarkMode from '@/hooks/useDarkMode';
import { useEffect } from 'react';
import { BsMoon, BsMoonFill } from 'react-icons/bs';

interface NavbarProps {
  countries: [];
}

const Navbar: React.FC<NavbarProps> = ({ countries }) => {
  const darkMode = useDarkMode();
  const setCountries = useCountries();
  const isDarkMode = darkMode.darkMode;
  const setIsDarkMode = darkMode.toggleDarkMode;
  useEffect(() => {
    setCountries.setCountries(countries);
  }, []);
  return (
    <div
      className={`
      fixed w-full z-10
      flex items-center justify-between
      px-4 sm:px-16 py-6 shadow-md
      ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}
      ${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'}
      `}
    >
      <div className="text-xl font-semibold">Where in the world?</div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsDarkMode()}
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
