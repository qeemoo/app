'use client';
import { useState, useEffect } from 'react';

// 옵션 타입 정의
interface TimeOptions {
  is24Hour: boolean;
  isEnglish: boolean;
  showSeconds: boolean;
}

export const useCurrentTime = ({ is24Hour, isEnglish, showSeconds }: TimeOptions) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatter = new Intl.DateTimeFormat(isEnglish ? 'en-US' : 'ko-KR', {
    hour12: !is24Hour,
    hour: 'numeric',
    minute: '2-digit',
    second: showSeconds ? '2-digit' : undefined, // 초 표시 여부 결정
  });

  const parts = formatter.formatToParts(now);
  const dayPeriod = parts.find((p) => p.type === 'dayPeriod')?.value || '';
  const hour = parts.find((p) => p.type === 'hour')?.value;
  const minute = parts.find((p) => p.type === 'minute')?.value;
  const second = parts.find((p) => p.type === 'second')?.value;

  return {
    dayPeriod,
    time: `${hour}:${minute}${second ? `:${second}` : ''}`,
  };
};
