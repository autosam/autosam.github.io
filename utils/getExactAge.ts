import { DateTime, Interval } from "luxon";

export function getExactAge(date: Record<string, number>) {
  const zone = "Asia/Tehran";

  // Construct birth time directly in Tehran time
  const birth = DateTime.fromObject(date, { zone });

  const now = DateTime.now().setZone(zone);

  let years = now.year - birth.year;

  const thisYearBirthday = birth.set({ year: now.year });
  if (now < thisYearBirthday) {
    years -= 1;
  }

  const lastBirthday = birth.set({ year: birth.year + years });

  const diff = now
    .diff(lastBirthday, ["months", "days", "hours", "minutes", "seconds"])
    .toObject();

  const months = Math.floor(diff.months ?? 0);
  const days = Math.floor(diff.days ?? 0);
  const hours = Math.floor(diff.hours ?? 0);
  const minutes = Math.floor(diff.minutes ?? 0);
  const seconds = Math.floor(diff.seconds ?? 0);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    formatted: formatAge(years, months, days, hours, minutes, seconds),
  };
}

const formatAge = (
  y: number,
  m: number,
  d: number,
  h: number,
  min: number,
  s: number
): string => {
  const pad = (n: number) => String(n).padStart(2, "0");

  return `${y}:${pad(m)}:${pad(d)}:${pad(h)}:${pad(min)}:${pad(s)}`;
};
