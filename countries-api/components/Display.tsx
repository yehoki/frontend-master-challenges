import CountryDisplay from './CountryDisplay';

interface DisplayProps {
  isDarkMode: boolean;
}

const Display: React.FC<DisplayProps> = ({ isDarkMode }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="sm:grid grid-cols-4
    px-4 sm:px-16 gap-4"
      >
        <CountryDisplay isDarkMode={isDarkMode} />
        <CountryDisplay isDarkMode={isDarkMode} />
        <CountryDisplay isDarkMode={isDarkMode} />
        <CountryDisplay isDarkMode={isDarkMode} />
        <CountryDisplay isDarkMode={isDarkMode} />
        <CountryDisplay isDarkMode={isDarkMode} />
        <CountryDisplay isDarkMode={isDarkMode} />
        <CountryDisplay isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Display;
