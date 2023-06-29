'use client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import RegionFilterDropdown from './RegionFilterDropdown';
import useSearchFilter from '@/hooks/useSearchFilter';
import useRegionFilter from '@/hooks/useRegionFilter';
interface FilterProps {
  isDarkMode: boolean;
}

const Filter: React.FC<FilterProps> = ({ isDarkMode }) => {
  const [isDropped, setIsDropped] = useState(false);
  const searchFilter = useSearchFilter();
  const regionFilter = useRegionFilter();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    searchFilter.setSearch(e.currentTarget.value);
  };

  return (
    <div
      className="flex flex-col gap-8 sm:flex-row justify-between sm:items-center 
    px-4 sm:px-16 py-8"
    >
      <div
        className={`flex items-center w-full sm:w-[50%]
      ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}
      rounded-md w-1/4 shadow-md`}
      >
        <div className="pl-8 pr-4 sm:pl-4 sm:pr-2">
          <AiOutlineSearch size={16} fill={isDarkMode ? 'white' : 'gray'} />
        </div>
        <input
          onChange={handleFilterChange}
          type="text"
          placeholder="Search for a country..."
          className={`w-full rounded-md py-4 sm:py-2 outline-none text-md
          ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}
          ${isDarkMode ? 'text-very-light-gray' : 'text-dark-gray'}
          ${
            isDarkMode ? 'placeholder-very-light-gray' : 'placeholder-dark-gray'
          }
          `}
        />
      </div>
      <div
        onClick={() => {
          setIsDropped(!isDropped);
        }}
        className={`
        relative flex justify-between items-center
        pl-8 pr-4 py-4 sm:py-2 gap-4
        rounded-md shadow-md
        text-md 
        w-[50%] sm:w-auto
      ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}
      ${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'} 
      `}
      >
        <div className="cursor-pointer">
          {regionFilter.region === ''
            ? 'Filter by Region'
            : regionFilter.region}
        </div>
        <RiArrowDropDownLine
          color={isDarkMode ? 'white' : 'hsl(200, 15%, 8%)'}
        />
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute -bottom-[15.25rem] w-full left-0 rounded-md z-10
       ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}
       ${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'}
       ${isDropped ? '' : 'hidden'}
        `}
        >
          <RegionFilterDropdown
            dropped={isDropped}
            setIsDropped={setIsDropped}
            isDarkMode={isDarkMode}
            title="Africa"
          />
          <RegionFilterDropdown
            dropped={isDropped}
            setIsDropped={setIsDropped}
            isDarkMode={isDarkMode}
            title="Antarctic"
          />
          <RegionFilterDropdown
            dropped={isDropped}
            setIsDropped={setIsDropped}
            isDarkMode={isDarkMode}
            title="Americas"
          />
          <RegionFilterDropdown
            dropped={isDropped}
            setIsDropped={setIsDropped}
            isDarkMode={isDarkMode}
            title="Asia"
          />
          <RegionFilterDropdown
            dropped={isDropped}
            setIsDropped={setIsDropped}
            isDarkMode={isDarkMode}
            title="Europe"
          />
          <RegionFilterDropdown
            dropped={isDropped}
            setIsDropped={setIsDropped}
            isDarkMode={isDarkMode}
            title="Oceania"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
