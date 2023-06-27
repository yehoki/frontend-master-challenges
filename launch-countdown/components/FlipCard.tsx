interface FlipCardProps {
  displayValue: number;
  displayMeasure: string;
  nextValue: number;
}

const FlipCard: React.FC<FlipCardProps> = ({
  displayValue,
  displayMeasure,
  nextValue,
}) => {
  return (
    <div className="flex flex-col mt-8 justify-center">
      {/* The Card */}
      <div
        className="relative aspect-square h-[60px] md:h-[150px] 
      rounded-lg
      flex flex-col justify-center items-center shadow-2xl bg-very-dark-blue-ligher
      "
      >
        {/* <div className="absolute bg-dark-desaturated-blue w-full h-[95%] top-0 rounded-lg"></div> */}

        <div
          className={`
        absolute w-full h-[50%] top-0
      bg-dark-desaturated-blue 
        rounded-lg rounded-bl-none rounded-br-none
        flex items-end justify-center overflow-hidden
        before:bg-dark-desaturated-blue 
        ${
          displayValue !== nextValue
            ? 'origin-bottom animate-calendarFlipDown'
            : ''
        }
        `}
        >
          <div
            className={`absolute -bottom-[18px] md:-bottom-[30px] text-3xl md:text-6xl
          text-soft-red font-bold font-redHatText z-10`}
          >
            {displayValue}
          </div>
        </div>
        {/* top bg */}

        <div
          className={`
        absolute w-full h-[45%] bottom-[5%]
      bg-dark-desaturated-blue 
        rounded-lg rounded-tl-none rounded-tr-none
        flex items-start justify-center overflow-hidden leading-[1]
        ${
          displayValue !== nextValue
            ? 'origin-top animate-calendarFlipBottom'
            : ''
        }`}
        >
          <div
            className={`absolute -top-[18px] md:-top-[30px] text-3xl md:text-6xl
          text-soft-red font-bold font-redHatText z-10
          `}
          >
            {displayValue}
          </div>
        </div>
        {/* bottom bg */}

        {/* <div
          className="absolute bg-dark-desaturated-blue
        w-full h-[50%] 
        top-0 rounded-lg
        flex items-end justify-center z-15

        "
        > */}
        {/* top half */}
        {/* <div
            className="absolute -bottom-[18px] md:-bottom-[30px] text-3xl md:text-6xl
          text-soft-red font-bold font-redHatText z-15"
          >
            {displayValue}
          </div> */}
        {/* </div> */}

        {/* <div className="absolute text-3xl md:text-6xl text-soft-red font-bold font-redHatText z-15">
          {displayValue}
        </div> */}
        {/* <div
          className="absolute bg-dark-desaturated-blue w-full h-[45%] bottom-[5%] rounded-lg 
        "
        > */}
        {/* Bottom half */}
        {/* </div> */}
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
      <div className="text-center pt-4 text-grayish-blue uppercase text-sm md:text-base lg:text-xl">
        {displayMeasure}
      </div>
    </div>
  );
};

export default FlipCard;
