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
      <div
        className="aspect-square h-[150px] border-[1px] 
      flex justify-center items-center"
      >
        {displayValue}
      </div>
      <div className="text-center">{displayMeasure}</div>
    </div>
  );
};

export default FlipCard;
