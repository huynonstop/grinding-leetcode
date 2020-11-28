/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  let a = s.split('');
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '?') modify(a, i);
  }
  return a.join('');
};

function modify(s, i) {
  let left = 96;
  if (s[i - 1]) left = s[i - 1].charCodeAt();
  let right = 96;
  if (s[i + 1]) right = s[i + 1].charCodeAt();
  let newCharCode = 97;
  while (newCharCode === left || newCharCode === right) {
    newCharCode++;
  }
  s[i] = String.fromCharCode(newCharCode);
}
