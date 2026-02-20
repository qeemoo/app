'use client';

import CalenderFormat from './CalenderFormat';
import CalenderStartDay from './CalenderStartDay';
import { CALENDAR_INITIAL } from '@/Utils/Calender/current';

// 1. 부모로부터 받아오는 모든 데이터의 타입을 정의합니다.
interface CalenderOptionProps {
  setDisplayMode: (mode: 'kr' | 'en' | 'cn' | 'enFull') => void;
  isMondayStart: boolean;
  setIsMondayStart: (val: boolean) => void;
  setViewYear: (y: number) => void;
  setViewMonth: (m: number) => void;
}

const CalenderOption = ({
  isMondayStart,
  setIsMondayStart,
  setDisplayMode,
  setViewYear,
  setViewMonth,
}: CalenderOptionProps) => {
  const handleGoToToday = () => {
    setViewYear(CALENDAR_INITIAL.YEAR);
    setViewMonth(CALENDAR_INITIAL.MONTH);
  };

  return (
    <div className="flex items-center gap-2 text-[10px]">
      <CalenderFormat setDisplayMode={setDisplayMode} />

      <CalenderStartDay isMondayStart={isMondayStart} setIsMondayStart={setIsMondayStart} />

      <button
        onClick={handleGoToToday}
        className="px-2 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors font-bold"
      >
        오늘
      </button>
    </div>
  );
};

export default CalenderOption;
