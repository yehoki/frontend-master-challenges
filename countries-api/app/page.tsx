'use client';

import Display from '@/components/Display';
import Filter from '@/components/Filter';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <main
      className={`
      h-[100dvh]
      font-nunitoSans
    ${isDarkMode ? 'bg-very-dark-blue' : 'bg-very-light-gray'}
    ${isDarkMode ? 'text-white' : 'text-very-dark-blue-text'}
    `}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Filter isDarkMode={isDarkMode} />
      <Display isDarkMode={isDarkMode} />
    </main>
  );
}
