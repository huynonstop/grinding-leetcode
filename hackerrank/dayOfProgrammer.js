function dayOfProgrammer(year) {
  // Write your code here
  if (year === 1918) return '26.09.1918';
  const isJulian = year < 1918;
  const isLeap = isJulian
    ? year % 4 === 0
    : year % 400 === 0 || (year % 100 && year % 4 === 0);
  return (isLeap ? '12.09.' : '13.09.') + year;
}
dayOfProgrammer(1800);
