import { MONTH_NAMES } from '@/Constants/Calender';

interface CalendarHeaderProps {
  viewMonth: number;
  displayMode: 'kr' | 'en' | 'cn' | 'enFull';
}

const CalendarMonth = ({ viewMonth, displayMode }: CalendarHeaderProps) => {
  const monthInfo = MONTH_NAMES[viewMonth];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-black text-gray-800 transition-all duration-300">
        {monthInfo[displayMode] || monthInfo.kr}
      </h2>
    </div>
  );
};

export default CalendarMonth;
