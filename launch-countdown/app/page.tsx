'use client';
import FlipCard from '@/components/FlipCard';
import SocialIcon from '@/components/SocialIcon';
import { convertSecondsToValues } from '@/lib/helpers';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timer, setTimer] = useState(60 * 60 * 24 * 14);
  const [values, setValues] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setValues(convertSecondsToValues(timer));
      }
    }, 1000);
  }, [timer]);

  return (
    <main className="h-[100dvh] bg-very-dark-blue relative">
      <div
        className="bg-[url('/images/bg-stars.svg')] h-full w-full absolute
      flex flex-col items-center"
      >
        <div
          className="text-white font-semibold text-xl sm:text-2xl md:text-4xl uppercase tracking-[0.2rem] pt-40 pb-20
        "
        >
          We`re launching soon
        </div>
        <div className="flex flex-row justify-evenly items-center text-white gap-8">
          <FlipCard
            nextValue={values[4]}
            displayValue={values[0]}
            displayMeasure="days"
          />
          <FlipCard
            nextValue={values[5]}
            displayValue={values[1]}
            displayMeasure="hours"
          />
          <FlipCard
            nextValue={values[6]}
            displayValue={values[2]}
            displayMeasure="minutes"
          />
          <FlipCard
            nextValue={values[7]}
            displayValue={values[3]}
            displayMeasure="seconds"
          />
        </div>
        <div
          className="absolute bottom-[5%] z-20
        flex flex-row justify-evenly items-center gap-8
        "
        >
          <SocialIcon iconName="Facebook" iconUrl="/images/icon-facebook.svg" />
          <SocialIcon
            iconName="Pinterest"
            iconUrl="/images/icon-pinterest.svg"
          />
          <SocialIcon
            iconName="Instagram"
            iconUrl="/images/icon-instagram.svg"
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 h-[20%] w-full
        bg-cover bg-[url('/images/pattern-hills.svg')]"
      ></div>
    </main>
  );
}
