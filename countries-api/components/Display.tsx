'use client';
import useCountries from '@/hooks/useCountries';
import CountryDisplay from './CountryDisplay';
import useSearchFilter from '@/hooks/useSearchFilter';
import useRegionFilter from '@/hooks/useRegionFilter';
import { sortCountriesByName } from '@/utils/helper';

interface DisplayProps {
  isDarkMode: boolean;
}

const Display: React.FC<DisplayProps> = ({ isDarkMode }) => {
  const countriesHook = useCountries();
  const searchFilter = useSearchFilter();
  const regionFilter = useRegionFilter();
  const displayCountries = () => {
    const countries = countriesHook.countries;
    if (countries.length === 0) return null;
    let showCountries: string[] = [];

    if (regionFilter.region === '') {
      if (searchFilter.search === '') {
        showCountries = countries;
      } else {
        showCountries = countries.filter((country: any) => {
          return country.name.common
            .toLowerCase()
            .includes(searchFilter.search.toLowerCase());
        });
      }
    } else {
      showCountries = countries.filter((country: any) => {
        return (
          country.region.toLowerCase() === regionFilter.region.toLowerCase()
        );
      });
    }
    return sortCountriesByName(showCountries).map((country: any) => {
      return (
        <CountryDisplay
          key={country.name.common}
          isDarkMode={isDarkMode}
          countryName={country.name.common}
          capital={country.capital}
          population={country.population}
          region={country.region}
          imageUrl={country.flags.png}
        />
      );
    });
  };

  return (
    <div
      className="flex flex-col gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    px-4 sm:px-16 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16"
    >
      {displayCountries()}
    </div>
  );
};

export default Display;
