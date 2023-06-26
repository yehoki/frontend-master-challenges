'use client';
import { Dispatch, SetStateAction, useState, MouseEvent } from 'react';

interface TipGridBoxProps {
  tipPercentage: number;
  setValue: Dispatch<SetStateAction<number>>;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const TipGridBox: React.FC<TipGridBoxProps> = ({
  tipPercentage,
  setValue,
  selected,
  setSelected,
}) => {
  const handleTipClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (selected === tipPercentage) {
      setSelected(0);
      setValue(0);
    } else {
      setSelected(parseFloat(event.currentTarget.value));
      setValue(parseFloat(event.currentTarget.value));
    }
  };

  return (
    <button
      onClick={handleTipClick}
      value={tipPercentage}
      className={` rounded-lg text-2xl font-semibold
      px-8 py-2 flex justify-center 
      hover:bg-strong-cyan hover:text-Very-dark-cyan

${selected === tipPercentage ? 'bg-strong-cyan' : 'bg-Very-dark-cyan'}
${
  selected === tipPercentage
    ? 'text-Very-dark-cyan'
    : 'text-very-light-grayish-cyan'
}
      `}
    >
      {tipPercentage}%
    </button>
  );
};

export default TipGridBox;
