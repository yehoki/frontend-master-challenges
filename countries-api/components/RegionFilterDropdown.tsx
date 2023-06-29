'use client';

import useRegionFilter from '@/hooks/useRegionFilter';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

interface RegionFilterDropdownProps {
  title: string;
  isDarkMode: boolean;
  dropped: boolean;
  setIsDropped: Dispatch<SetStateAction<boolean>>;
}

const RegionFilterDropdown: React.FC<RegionFilterDropdownProps> = ({
  title,
  isDarkMode,
  dropped,
  setIsDropped,
}) => {
  const regionFilter = useRegionFilter();

  const handleRegionSelect = (e: MouseEvent<HTMLButtonElement>) => {
    if (regionFilter.region === e.currentTarget.innerHTML) {
      regionFilter.removeRegion();
    } else {
      regionFilter.setRegion(e.currentTarget.innerHTML);
    }
    setIsDropped(!dropped);
  };
  return (
    <button
      onClick={handleRegionSelect}
      className={`
    px-4 py-2
    cursor-pointer
    w-full text-left
    ${
      regionFilter.region === title
        ? isDarkMode
          ? 'bg-very-dark-blue text-very-light-gray'
          : 'bg-very-light-gray text-very-dark-blue-text'
        : ''
    }
    ${
      isDarkMode
        ? 'hover:bg-very-dark-blue hover:text-very-light-gray'
        : 'hover:bg-very-light-gray hover:text-very-dark-blue-text'
    }
    `}
    >
      {title}
    </button>
  );
};

export default RegionFilterDropdown;
