'use client';

import Display from '@/components/Display';
import Filter from '@/components/Filter';
import Navbar from '@/components/Navbar';
import useDarkMode from '@/hooks/useDarkMode';

export default function Home() {
  const darkMode = useDarkMode();

  return (
    <main
      className={`
      min-h-[100dvh]
      pt-20
      font-nunitoSans
      overflow-y-auto
    ${darkMode.darkMode ? 'bg-very-dark-blue' : 'bg-very-light-gray'}
    ${darkMode.darkMode ? 'text-white' : 'text-very-dark-blue-text'}
    `}
    >
      <Filter isDarkMode={darkMode.darkMode} />
      <Display isDarkMode={darkMode.darkMode} />
    </main>
  );
}
