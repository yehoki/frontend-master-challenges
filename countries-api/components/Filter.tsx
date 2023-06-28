import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';

interface FilterProps {
  isDarkMode: boolean;
}

const Filter: React.FC<FilterProps> = ({ isDarkMode }) => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center 
    px-4 sm:px-16 py-8"
    >
      <div
        className={`flex items-center 
      ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}
      rounded-sm w-1/4`}
      >
        <div className="pl-4 pr-2">
          <AiOutlineSearch size={16} fill={isDarkMode ? 'white' : 'gray'} />
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          className={`w-full rounded-sm py-2 
          text-dark-gray placeholder-dark-gray
          outline-none
          ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}`}
        />
      </div>
      <div>Filter by Region</div>
    </div>
  );
};

export default Filter;
