import Image from 'next/image';
import Link from 'next/link';

interface CountryDisplayProps {
  isDarkMode: boolean;
  countryName: string;
  population: number;
  region: string;
  capital: string[];
  imageUrl: string;
}

const CountryDisplay: React.FC<CountryDisplayProps> = ({
  isDarkMode,
  countryName,
  imageUrl,
  population,
  region,
  capital,
}) => {
  return (
    <Link href={`/country/${countryName}`}>
      <div
        className={`flex flex-col max-w-[320px] rounded-md shadow-md mx-auto sm:mx-0
    ${isDarkMode ? 'bg-dark-blue' : 'bg-white'}
    `}
      >
        <div className="relative block w-full min-h-[160px] h-[160px] shadow-sm">
          <Image
            src={imageUrl}
            alt={`${countryName} flag`}
            fill
            sizes="(max-width: 1440px) 50vw)"
            className="rounded-md rounded-bl-none rounded-br-none h-auto w-auto"
            priority
          />
        </div>

        <div className="flex flex-col items-start p-6 lg:p-4">
          <div
            className={`
        text-xl font-bold`}
          >
            {countryName}
          </div>
          <div className="py-4">
            <div className="text-md py-[0.1rem]">
              <span className="font-semibold">Population: </span>
              {population}
            </div>
            <div className="text-md py-[0.1rem]">
              <span className="font-semibold">Region: </span>
              {region}
            </div>
            <div className="text-md py-[0.1rem]">
              {capital.length === 1 || capital.length === 0 ? (
                <>
                  <span className="font-semibold">Capital: </span>
                  {capital[0]}
                </>
              ) : (
                <>
                  <span className="font-semibold">Capitals: </span>
                  {capital.map((capitalCity) => (
                    <div key={capitalCity}>{capitalCity}</div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryDisplay;
