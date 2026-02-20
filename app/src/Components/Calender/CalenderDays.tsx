import { DAY_NAMES } from '@/Constants/Calender';

// 1. 사용할 수 있는 모드를 타입으로 정의합니다.
type DisplayModeType = 'kr' | 'en' | 'enFull' | 'cn';

interface CalenderDaysProps {
  displayMode: DisplayModeType; // string 대신 구체적인 타입을 지정
  isMondayStart: boolean;
}

const CalenderDays = ({ displayMode, isMondayStart }: CalenderDaysProps) => {
  // 월요일 시작이면 일요일(index 0)을 맨 뒤로 보냅니다.
  const displayDays = isMondayStart ? [...DAY_NAMES.slice(1), DAY_NAMES[0]] : DAY_NAMES;

  return (
    <div className="grid grid-cols-7 mb-2">
      {displayDays.map((day) => (
        <div
          key={day.id}
          className={`text-center text-xs font-bold ${
            day.id === 0 ? 'text-red-500' : 'text-gray-400'
          }`}
        >
          {/* 이제 TypeScript는 displayMode가 day의 키 중 하나임을 알게 됩니다. */}
          {day[displayMode]}
        </div>
      ))}
    </div>
  );
};

export default CalenderDays;
