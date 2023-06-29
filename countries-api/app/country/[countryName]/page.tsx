'use client';
import useCountries from '@/hooks/useCountries';
import useDarkMode from '@/hooks/useDarkMode';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
const Page = () => {
  const darkMode = useDarkMode();
  const countries = useCountries();
  const params = useParams();
  const countryName = params?.countryName.replaceAll('%20', ' ');
  if (countries.countries.length === 0) {
    return null;
  }
  const country: any[] = countries.countries.filter((country: any) => {
    return country.name.common.toLowerCase() === countryName.toLowerCase();
  });
  const languages = Object.keys(country[0].languages);
  const languageMapping = () => {
    const languageNames: any[] = [];
    for (const language in country[0].languages) {
      languageNames.push(country[0].languages[language]);
    }
    return languageNames;
  };
  const showLanguages = () => {
    if (languageMapping().length <= 1) {
      return languageMapping()[0];
    }
    let languages = languageMapping()[0];
    for (let i = 1; i < languageMapping().length; i++) {
      languages = languages + `, ${languageMapping()[i]}`;
    }
    return languages;
  };
  const borderCountries = () => {
    const borders: string[] = country[0].borders;
    const borderNames: any[] = [];
    for (const border of borders) {
      const borderCountry: any = countries.countries.find(
        (country: any) => country.cca3 === border
      );
      borderNames.push(borderCountry.name.common);
    }
    return borderNames;
  };

  const showBorderCountries = borderCountries().map((country: any) => {
    return (
      <Link key={country} href={`/country/${country}`}>
        <div
          className={`px-2 py-1 rounded-md shadow-sm 
        ${
          darkMode.darkMode
            ? 'bg-dark-blue text-very-light-gray'
            : 'bg-white text-very-dark-blue-text'
        }
        `}
        >
          {country}
        </div>
      </Link>
    );
  });

  const showCurrencies = () => {
    const currencies = country[0].currencies;
    const currencyNames = [];
    for (const currency in currencies) {
      currencyNames.push(currency);
    }

    if (currencyNames.length <= 1) {
      return currencyNames[0];
    }
    let displayCurrencies = currencyNames[0];
    for (let i = 1; i < currencyNames.length; i++) {
      displayCurrencies = `${displayCurrencies}, ${currencyNames[i]}`;
    }
    return displayCurrencies;
  };

  return (
    <main
      className={`font-nunitoSans min-h-[100dvh] md:px-16 pt-12
    ${darkMode.darkMode ? 'bg-very-dark-blue' : 'bg-very-light-gray'}
    ${darkMode.darkMode ? 'text-white' : 'text-very-dark-blue-text'}
      `}
    >
      <div className="py-16 px-4 flex items-center">
        <Link href={'/'}>
          <div
            className={`flex items-center gap-2 px-8 py-2 rounded-md shadow-lg
          ${darkMode.darkMode ? 'bg-dark-blue' : 'bg-white'}
          ${darkMode.darkMode ? 'text-white' : 'text-very-dark-blue-text'}
          `}
          >
            <HiOutlineArrowLongLeft />
            Back
          </div>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row  md:justify-center">
        <div
          className="flex items-center max-w-[100%] lg:max-w-[50%]
        px-4"
        >
          <Image
            src={country[0].flags.png}
            alt="flag"
            width={600}
            height={300}
            priority
          />
        </div>

        <div
          className="
          px-4 md:px-16
          flex flex-col py-12
          md:max-w-[40%]
        "
        >
          <div className="text-2xl font-extrabold py-4">
            {country[0].name.common}
          </div>
          <div className="flex flex-row gap-16">
            <div>
              <div className="py-[0.15rem]">
                <span className="font-semibold">Native Name: </span>
                {country[0].name.nativeName[languages[0]] !== undefined
                  ? country[0].name.nativeName[languages[0]].common
                  : country[0].name.common}
              </div>
              <div className="py-[0.15rem]">
                <span className="font-semibold">Population: </span>
                {country[0].population}
              </div>
              <div className="py-[0.15rem]">
                <span className="font-semibold">Region: </span>
                {country[0].region}
              </div>
              <div className="py-[0.15rem]">
                <span className="font-semibold">Sub Region: </span>
                {country[0].subregion}
              </div>
              <div className="py-[0.15rem]">
                <span className="font-semibold">Capital: </span>
                {country[0].capital}
              </div>
            </div>
            <div>
              <div className="py-[0.15rem]">
                <span className="font-semibold">Top Level Domain: </span>
                {country[0].tld[0]}
              </div>
              <div className="py-[0.15rem]">
                <span className="font-semibold">Currencies: </span>
                {showCurrencies()}
              </div>
              <div className="py-[0.15rem]">
                <span className="font-semibold">Languages: </span>
                {showLanguages()}
              </div>
            </div>
          </div>

          <div className="pt-4">
            <span className="font-semibold">Border Countries:</span>
            <div className="flex gap-2 flex-wrap pt-2">
              {showBorderCountries}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
