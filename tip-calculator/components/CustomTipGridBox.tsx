import { Dispatch, SetStateAction } from 'react';

interface CustomTipGridBoxProps {
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
}

const CustomTipGridBox: React.FC<CustomTipGridBoxProps> = ({
  setValue,
  value,
}) => {
  return (
    <input
      className="
  bg-very-light-grayish-cyan
    text-Very-dark-cyan rounded-lg text-2xl font-semibold
     py-2 flex justify-center leading-none outline-none text-right pr-2"
      placeholder="Custom"
      type="number"
      min={0}
      value={value === 0 ? '' : value}
      onChange={(e) => {
        e.currentTarget.value !== ''
          ? setValue(parseFloat(e.currentTarget.value))
          : 0;
      }}
    />
  );
};

export default CustomTipGridBox;
