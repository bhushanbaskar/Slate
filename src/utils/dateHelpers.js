/* Returns true if the given date is in the current month.*/
export function isCurrentMonth(date) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  return (
    currentDate.getMonth() === targetDate.getMonth() &&
    currentDate.getFullYear() === targetDate.getFullYear()
  );
}

/**
 * Returns true if the given date is in the current year.
 */
export function isCurrentYear(date) {
  const currentYear = new Date().getFullYear();

  return new Date(date).getFullYear() === currentYear;
}

/**
 * Returns true if both dates belong to the same month and year.
 */
export function isSameMonth(date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  return (
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
}

/**
 * Returns month name.
 * Example: "July"
 */
export function getMonthName(date) {
  return new Date(date).toLocaleString("en-IN", {
    month: "long",
  });
}

/**
 * Returns short month name.
 * Example: "Jul"
 */
export function getShortMonthName(date) {
  return new Date(date).toLocaleString("en-IN", {
    month: "short",
  });
}

/**
 * Returns month number (0-11).
 */
export function getMonth(date) {
  return new Date(date).getMonth();
}

/**
 * Returns year.
 */
export function getYear(date) {
  return new Date(date).getFullYear();
}

/**
 * Returns true if date1 is after date2.
 */
export function isAfter(date1, date2) {
  return new Date(date1) > new Date(date2);
}

/**
 * Returns true if date1 is before date2.
 */
export function isBefore(date1, date2) {
  return new Date(date1) < new Date(date2);
}
export function formatRelativeDate(date) {
  const today = new Date();
  const targetDate = new Date(date);

  const differenceInDays = Math.floor(
    (today - targetDate) / (1000 * 60 * 60 * 24),
  );

  if (differenceInDays === 0) return "Today";
  if (differenceInDays === 1) return "Yesterday";

  return `${differenceInDays} days ago`;
}
