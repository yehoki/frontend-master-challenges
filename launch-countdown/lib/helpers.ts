const secondsToDays = 60 * 60 * 24;
const secondsToHours = 60 * 60;

// returns an array of numbers in the form of left over:
// [days, hours, minutes, seconds]
export const convertSecondsToValues = (seconds: number): number[] => {
  const days = Math.floor(seconds / secondsToDays);
  const hoursLeftOver = Math.floor(24 * (seconds / secondsToDays - days));
  const minutesLeftOver = Math.floor(
    60 * (24 * (seconds / secondsToDays - days) - hoursLeftOver)
  );
  const secondsLeftOver = Math.floor(60 * (60 * (24 * (seconds / secondsToDays - days) - hoursLeftOver) - minutesLeftOver))
  return [days, hoursLeftOver, minutesLeftOver, secondsLeftOver];
};
