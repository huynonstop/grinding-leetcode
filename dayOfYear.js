/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let [year, month, day] = date.split('-').map((str) => +str);
  let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  let dayOfMonth = [
    0,
    31,
    isLeap ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return dayOfMonth.filter((v, i) => i < month).reduce((p, c) => p + c) + day;
};
