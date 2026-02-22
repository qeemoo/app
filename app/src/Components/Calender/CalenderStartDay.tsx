import { START_DAY_OPTION } from '@/Constants/Calender';

interface CalenderStartDayProps {
  isMondayStart: boolean;
  setIsMondayStart: (val: boolean) => void;
}

const CalenderStartDay = ({ isMondayStart, setIsMondayStart }: CalenderStartDayProps) => {
  const currentOption = START_DAY_OPTION.find((opt) => opt.isMonday === isMondayStart);
  return (
    <button
      onClick={() => setIsMondayStart(!isMondayStart)}
      className="text-[10px] px-2 py-0.5 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
    >
      {currentOption?.name}
    </button>
  );
};

export default CalenderStartDay;
