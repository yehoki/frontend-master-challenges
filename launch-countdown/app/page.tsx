'use client';
import FlipCard from '@/components/FlipCard';
import { convertSecondsToValues } from '@/lib/helpers';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timer, setTimer] = useState(3600);
  const [values, setValues] = useState<number[]>([]);
  // setInterval(1000, setTimer(timer - 1));
  // setInterval(() => {
  //   console.log(timer);
  //   setTimer(timer - 1);
  // }, 1000);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1);
      setValues(convertSecondsToValues(timer));
    }, 1000);
  }, [timer]);

  return (
    <main className="h-[100dvh] bg-very-dark-blue relative">
      <div
        className="bg-[url('/images/bg-stars.svg')] h-full w-full absolute
      flex flex-col items-center justify-center"
      >
        <div className="text-white font-semibold text-4xl uppercase tracking-widest">
          We`re launching soon
        </div>
        <div className="flex flex-row justify-evenly items-center text-white gap-4">
          <FlipCard displayValue={values[0]} displayMeasure="days" />
          <FlipCard displayValue={values[1]} displayMeasure="minutes" />
          <FlipCard displayValue={values[2]} displayMeasure="hours" />
          <FlipCard displayValue={values[3]} displayMeasure="days" />
        </div>
      </div>
      <div className="absolute bottom-0 h-[20%] w-full bg-[url('/images/pattern-hills.svg')]"></div>
    </main>
  );
}
