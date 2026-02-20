import { dateGenerate } from '@/Utils/Calender/dateGenerate';

interface CalendarDateProps {
  viewYear: number;
  viewMonth: number;
  isMondayStart: boolean;
}

const CalendarDate = ({ viewYear, viewMonth, isMondayStart }: CalendarDateProps) => {
  const dateArray = dateGenerate(viewYear, viewMonth, isMondayStart);

  return (
    <div className="grid grid-cols-7 gap-1">
      {dateArray.map((item, index) => {
        if (!item) return <div key={`empty-${index}`} className="h-12" />;

        const { day, isToday, isSunday, isSaturday } = item;

        return (
          <div
            key={index}
            className={`
              h-12 flex flex-col items-center justify-center text-sm cursor-pointer rounded-lg transition-colors
              hover:bg-blue-50
              ${isToday ? 'bg-blue-500 text-white hover:bg-blue-600 font-bold' : 'text-gray-700'}
              ${!isToday && isSunday ? 'text-red-500' : ''}
              ${!isToday && isSaturday ? 'text-blue-500' : ''}
            `}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarDate;
