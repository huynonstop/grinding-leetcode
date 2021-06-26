function repeatedString(s, n) {
  // Write your code here
  let count = 0;
  let left = 0;
  let ls = s.length;
  for (let i = 0; i < ls; i++) {
    if (s[i] === 'a') {
      count++;
      if (i < n % ls) {
        left++;
      }
    }
  }
  return Math.floor(n / ls) * count + left;
}
repeatedString('a', 10);
