function findSubstring(s, k) {
  // Write your code here
  let vowels = new Set(['a', 'u', 'e', 'o', 'i']);
  let start = 0;
  let max = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) max++;
  }
  let cur = max;
  for (let i = 1; i + k - 1 < s.length; i++) {
    if (vowels.has(s[i - 1])) cur--;
    if (vowels.has(s[i + k - 1])) cur++;
    if (cur > max) {
      max = cur;
      start = i;
    }
  }
  return max !== 0 ? s.substr(start, k) : 'Not found!';
}
findSubstring('azerdii', 5);
