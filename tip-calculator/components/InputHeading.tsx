interface InputHeadingProps {
  title: string;
}

const InputHeading: React.FC<InputHeadingProps> = ({ title }) => {
  return (
    <div
      className="
  text-grayish-cyan tracking-wider font-semibold
  "
    >
      {title}
    </div>
  );
};

export default InputHeading;
