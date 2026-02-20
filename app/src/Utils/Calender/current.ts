const now = new Date();

export const CALENDAR_INITIAL = {
  YEAR: now.getFullYear(),
  MONTH: now.getMonth(),
  DATE: now.getDate(),
} as const;
