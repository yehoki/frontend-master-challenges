'use client';

import CustomTipGridBox from '@/components/CustomTipGridBox';
import InputHeading from '@/components/InputHeading';
import LeftGrayInput from '@/components/LeftGrayInput';
import TipGridBox from '@/components/TipGridBox';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [totalBill, setTotalBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [peopleSplit, setPeopleSplit] = useState(0);
  const [selected, setSelected] = useState(0);
  const tipPerPerson = () => {
    return totalBill !== 0 && peopleSplit !== 0
      ? Math.round(
          (((tipPercentage / 100) * totalBill) / peopleSplit + Number.EPSILON) *
            100
        ) / 100
      : 0;
  };

  const totalPerPerson = () => {
    return totalBill !== 0 && peopleSplit !== 0
      ? Math.round(
          (tipPerPerson() + totalBill / peopleSplit + Number.EPSILON) * 100
        ) / 100
      : 0;
  };

  const resetAll = () => {
    setTotalBill(0);
    setTipPercentage(0);
    setPeopleSplit(0);
  };
  return (
    <main className="h-[100dvh] flex flex-col items-center bg-light-grayish-cyan">
      <h1 className="uppercase pt-28 pb-14 tracking-[0.5rem] text-xl font-semibold text-Very-dark-cyan">
        <div>Spli</div>
        <div>tter</div>
      </h1>
      <div
        className="w-full xl:w-[50%] xl:h-[50%] p-12
      border-[1px] rounded-3xl
      flex flex-col xl:flex-row gap-8 bg-white"
      >
        <div
          className="xl:w-[50%] rounded-xl
        flex flex-col justify-between"
        >
          <div>
            <InputHeading title="Bill" />
            <LeftGrayInput
              setValue={setTotalBill}
              value={totalBill}
              icon="/images/icon-dollar.svg"
              float
            />
          </div>
          <div className="w-full">
            <InputHeading title="Select Tip %" />
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 my-4">
              <TipGridBox
                selected={selected}
                setSelected={setSelected}
                setValue={setTipPercentage}
                tipPercentage={5}
              />
              <TipGridBox
                selected={selected}
                setSelected={setSelected}
                setValue={setTipPercentage}
                tipPercentage={10}
              />
              <TipGridBox
                selected={selected}
                setSelected={setSelected}
                setValue={setTipPercentage}
                tipPercentage={15}
              />
              <TipGridBox
                selected={selected}
                setSelected={setSelected}
                setValue={setTipPercentage}
                tipPercentage={25}
              />
              <TipGridBox
                selected={selected}
                setSelected={setSelected}
                setValue={setTipPercentage}
                tipPercentage={50}
              />
              <CustomTipGridBox
                setValue={setTipPercentage}
                value={tipPercentage}
              />
            </div>
          </div>
          <div className="">
            <InputHeading title="Number of People" />
            <LeftGrayInput
              value={peopleSplit}
              setValue={setPeopleSplit}
              icon="/images/icon-person.svg"
            />
          </div>
        </div>
        <div
          className="xl:w-[50%] border-[1px] rounded-xl 
        bg-Very-dark-cyan text-strong-cyan
        p-10 flex flex-col justify-between"
        >
          <div>
            <div
              className="flex justify-between items-center
            py-2"
            >
              <div>
                <div className="text-white tracking-wide">Tip amount </div>
                <div className="text-grayish-cyan text-sm">/ person</div>
              </div>
              <div className="text-5xl">${tipPerPerson()}</div>
            </div>
            <div className="flex justify-between items-center py-6">
              <div>
                <div className="text-white tracking-wide">Total</div>
                <div className="text-grayish-cyan text-sm">/ person</div>
              </div>
              <div className="text-5xl">${totalPerPerson()}</div>
            </div>
          </div>
          <button
            className="bg-strong-cyan text-Very-dark-cyan
          py-4 font-semibold text-lg rounded-lg uppercase
          hover:bg-strong-cyan/50"
            onClick={(e) => resetAll()}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
