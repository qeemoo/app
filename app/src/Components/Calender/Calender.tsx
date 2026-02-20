'use client';
import { useState } from 'react';
import { CALENDAR_INITIAL } from '@/Utils/Calender/current';

import CalenderChangeMonth from './CalenderChangeMonth';
import CalendarDate from './CalenderDate';
import CalenderDays from './CalenderDays';
import CalenderMonth from './CalenderMonth';
import CalenderGrid from './CalednerGrid';
import CalenderYear from './CalenderYear';
import CalenderOption from './CalenderOption';

const Calender = () => {
  const [viewYear, setViewYear] = useState(CALENDAR_INITIAL.YEAR);
  const [viewMonth, setViewMonth] = useState(CALENDAR_INITIAL.MONTH);
  const [displayMode, setDisplayMode] = useState<'kr' | 'en' | 'cn' | 'enFull'>('kr');
  const [isMondayStart, setIsMondayStart] = useState(false);

  return (
    <CalenderGrid>
      <div className="flex justify-between items-center">
        <CalenderYear viewYear={viewYear} />

        <CalenderOption
          setDisplayMode={setDisplayMode}
          isMondayStart={isMondayStart}
          setIsMondayStart={setIsMondayStart}
          setViewYear={setViewYear}
          setViewMonth={setViewMonth}
        />
      </div>

      <CalenderChangeMonth
        viewYear={viewYear}
        setViewYear={setViewYear}
        viewMonth={viewMonth}
        setViewMonth={setViewMonth}
      >
        <CalenderMonth viewMonth={viewMonth} displayMode={displayMode} />
      </CalenderChangeMonth>

      <CalenderDays displayMode={displayMode} isMondayStart={isMondayStart} />

      <CalendarDate viewYear={viewYear} viewMonth={viewMonth} isMondayStart={isMondayStart} />
    </CalenderGrid>
  );
};

export default Calender;
