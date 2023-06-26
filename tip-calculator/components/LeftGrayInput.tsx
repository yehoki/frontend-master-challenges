import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface LeftGrayInputProps {
  icon: string;
  float?: boolean;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const LeftGrayInput: React.FC<LeftGrayInputProps> = ({
  icon,
  float,
  setValue,
  value,
}) => {
  return (
    <div
      className="flex justify-between px-4 py-2 rounded-lg text-[24px]
    bg-very-light-grayish-cyan w-full"
    >
      <div className="flex items-center">
        <Image src={icon} alt={`${icon} icon`} width={10} height={10} />
      </div>
      <input
        className="flex-1 bg-very-light-grayish-cyan 
      font-space-mono font-bold text-Very-dark-cyan text-right outline-none"
        type="number"
        min={0}
        step={float ? 0.01 : 1}
        value={value}
        onChange={(e) => {
          setValue(
            e.currentTarget.value === '' ? 0 : parseFloat(e.currentTarget.value)
          );
        }}
      />
    </div>
  );
};

export default LeftGrayInput;
