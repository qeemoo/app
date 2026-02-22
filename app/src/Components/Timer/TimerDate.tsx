'use client';

import { CALENDAR_INITIAL } from '@/Utils/Calender/current';
import { WEEK_KR } from '@/Constants/Calender';

interface TimerDateProps {
  isEnglish: boolean;
}

const TimerDate = ({ isEnglish }: TimerDateProps) => {
  // 현재 날짜 객체 생성 (CALENDAR_INITIAL 기반)
  const date = new Date(CALENDAR_INITIAL.YEAR, CALENDAR_INITIAL.MONTH, CALENDAR_INITIAL.DATE);

  // 영문 포맷: "Sunday, Feb 22, 2026"
  const englishDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);

  // 한글 포맷: "2026년 2월 22일 일요일"
  const dayName = WEEK_KR[CALENDAR_INITIAL.DAY];
  const koreanDate = `${CALENDAR_INITIAL.YEAR}년 ${CALENDAR_INITIAL.MONTH + 1}월 ${CALENDAR_INITIAL.DATE}일 ${dayName}요일`;

  return (
    <div className="text-lg font-medium text-gray-400 select-none">
      {isEnglish ? englishDate : koreanDate}
    </div>
  );
};

export default TimerDate;
