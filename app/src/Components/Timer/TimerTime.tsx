'use client';

import { useCurrentTime } from '@/Hooks/Timer/useCurrentTime';

// 1. 부모로부터 받을 옵션들의 타입을 정의합니다.
interface TimerTimeProps {
  is24Hour: boolean;
  isEnglish: boolean;
  showSeconds: boolean;
}

const TimerTime = ({ is24Hour, isEnglish, showSeconds }: TimerTimeProps) => {
  // 2. 훅에 옵션 객체를 전달합니다.
  const { dayPeriod, time } = useCurrentTime({ is24Hour, isEnglish, showSeconds });

  return (
    <div className="flex flex-col items-center my-8">
      <div className="flex items-baseline gap-3 font-mono">
        {/* 3. 24시간제일 때는 오전/오후(dayPeriod)를 숨깁니다. */}
        {!is24Hour && (
          <span className="text-2xl font-bold text-gray-400 select-none">{dayPeriod}</span>
        )}

        {/* 4. 메인 시간 표시 (초 표시 여부에 따라 너비가 변하지 않도록 고정폭 유지) */}
        <span className="text-8xl font-black tracking-tighter text-gray-800 tabular-nums">
          {time}
        </span>
      </div>
    </div>
  );
};

export default TimerTime;
