interface FlipCardProps {
  displayValue: number;
  displayMeasure: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  displayValue,
  displayMeasure,
}) => {
  return (
    <div className="flex flex-col mt-8 justify-center">
      {/* The Card */}
      <div
        className="relative aspect-square h-[150px] 
      rounded-lg
      flex flex-col justify-center items-center shadow-2xl bg-very-dark-blue-ligher
      "
      >
        <div className="absolute bg-dark-desaturated-blue w-full h-[95%] top-0 rounded-lg">
          {/* top half */}
        </div>
        <div className="absolute text-6xl text-soft-red font-bold font-redHatText">
          {displayValue}
        </div>
        <div className="absolute flex justify-between items-center w-full">
          {/* 2 semicircles and hr break */}
          <div
            className="absolute aspect-square h-4 w-2
          rounded-full rounded-tl-none rounded-bl-none 
          bg-very-dark-blue"
          ></div>
          <hr className="w-full border-black" />
          <div
            className="
          absolute right-0 aspect-square h-4 w-2
          rounded-full rounded-tr-none rounded-br-none 
          bg-very-dark-blue"
          ></div>
        </div>
      </div>
      {/* The Measure */}
      <div className="text-center">{displayMeasure}</div>
    </div>
  );
};

export default FlipCard;
