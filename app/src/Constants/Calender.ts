export const DAY_NAMES = [
  { id: 0, kr: '일', en: 'S', enFull: 'Sun', cn: '日' },
  { id: 1, kr: '월', en: 'M', enFull: 'Mon', cn: '月' },
  { id: 2, kr: '화', en: 'T', enFull: 'Tue', cn: '火' },
  { id: 3, kr: '수', en: 'W', enFull: 'Wed', cn: '水' },
  { id: 4, kr: '목', en: 'T', enFull: 'Thu', cn: '木' },
  { id: 5, kr: '금', en: 'F', enFull: 'Fri', cn: '金' },
  { id: 6, kr: '토', en: 'S', enFull: 'Sat', cn: '土' },
];

export const MONTH_NAMES = [
  { id: 0, kr: '1월', en: 'Jan', enFull: 'January', cn: '1月' },
  { id: 1, kr: '2월', en: 'Feb', enFull: 'February', cn: '2月' },
  { id: 2, kr: '3월', en: 'Mar', enFull: 'March', cn: '3月' },
  { id: 3, kr: '4월', en: 'Apr', enFull: 'April', cn: '4月' },
  { id: 4, kr: '5월', en: 'May', enFull: 'May', cn: '5月' },
  { id: 5, kr: '6월', en: 'Jun', enFull: 'June', cn: '6月' },
  { id: 6, kr: '7월', en: 'Jul', enFull: 'July', cn: '7月' },
  { id: 7, kr: '8월', en: 'Aug', enFull: 'August', cn: '8月' },
  { id: 8, kr: '9월', en: 'Sep', enFull: 'September', cn: '9월' },
  { id: 9, kr: '10월', en: 'Oct', enFull: 'October', cn: '10月' },
  { id: 10, kr: '11월', en: 'Nov', enFull: 'November', cn: '11月' },
  { id: 11, kr: '12월', en: 'Dec', enFull: 'December', cn: '12月' },
];

export const START_DAY_OPTION = [
  { isMonday: true, name: '월→일' },
  { isMonday: false, name: '일→토' },
] as const;

export const WEEK_KR = ['일', '월', '화', '수', '목', '금', '토'];
