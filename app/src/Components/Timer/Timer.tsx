import { useState } from 'react';
import TimerDate from './TimerDate';
import TimerOption from './TimerOption';
import TimerTime from './TimerTime';
import TimerWeather from './TimerWeather';

const Timer = () => {
  // 시계 옵션 상태들
  const [is24Hour, setIs24Hour] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
      {/* 상단: 날짜와 날씨 */}
      <div className="flex justify-between items-start mb-4">
        <TimerDate isEnglish={isEnglish} />
        <TimerWeather />
      </div>

      {/* 중앙: 메인 시계 */}
      <TimerTime is24Hour={is24Hour} isEnglish={isEnglish} showSeconds={showSeconds} />

      {/* 하단: 시계 설정 옵션 */}
      <div className="mt-6 pt-4 border-t border-gray-50 flex justify-end">
        <TimerOption
          is24Hour={is24Hour}
          setIs24Hour={setIs24Hour}
          isEnglish={isEnglish}
          setIsEnglish={setIsEnglish}
          showSeconds={showSeconds}
          setShowSeconds={setShowSeconds}
        />
      </div>
    </div>
  );
};

export default Timer;
