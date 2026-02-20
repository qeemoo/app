import { CALENDAR_INITIAL } from './current';

export const dateGenerate = (year: number, month: number, isMondayStart: boolean) => {
  let firstDayOfMonth = new Date(year, month, 1).getDay(); // 0:일 ~ 6:토

  // 월요일 시작일 경우 인덱스 보정 로직
  if (isMondayStart) {
    // 원래 일(0)이었으면 6번 인덱스(맨 뒤)로, 나머지는 한 칸씩 앞으로(-1)
    firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  }

  const lastDate = new Date(year, month + 1, 0).getDate();

  const dateArray = Array.from({ length: firstDayOfMonth + lastDate }, (_, i) => {
    // 시작 요일 이전의 빈 칸 처리
    if (i < firstDayOfMonth) return null;

    const day = i - firstDayOfMonth + 1;

    // 오늘 날짜인지 판별
    const isToday =
      day === CALENDAR_INITIAL.DATE &&
      month === CALENDAR_INITIAL.MONTH &&
      year === CALENDAR_INITIAL.YEAR;

    // 요일 판별 (색상 처리를 위해)
    // isMondayStart가 true일 때는 인덱스 구조가 바뀌므로 i를 기준으로 계산
    const isSunday = isMondayStart ? i % 7 === 6 : i % 7 === 0;
    const isSaturday = isMondayStart ? i % 7 === 5 : i % 7 === 6;

    return {
      day,
      isToday,
      isSunday,
      isSaturday,
    };
  });

  return dateArray;
};
