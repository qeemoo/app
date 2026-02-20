'use client';

interface CalenderStartDayProps {
  isMondayStart: boolean;
  setIsMondayStart: (val: boolean) => void;
}

const CalenderStartDay = ({ isMondayStart, setIsMondayStart }: CalenderStartDayProps) => {
  return (
    <button
      onClick={() => setIsMondayStart(!isMondayStart)}
      className="text-[10px] px-2 py-0.5 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
    >
      {isMondayStart ? '월→일' : '일→토'}
    </button>
  );
};

export default CalenderStartDay;
