function birthday(s, d, m) {
  // Write your code here
  let rs = 0;
  let prefixSum = [s[0]];
  for (let i = 0; i < s.length - 1; i++) {
    prefixSum[i + 1] = prefixSum[i] + s[i + 1];
  }
  if (prefixSum[m - 1] === d) {
    rs++;
  }
  for (let i = m; i < s.length; i++) {
    if (prefixSum[i] - prefixSum[i - m] === d) rs++;
  }
  return rs;
}
function birthday1(s, d, m) {
  // Write your code here
  let rs = 0;
  let prefixSum = [0];
  for (let i = 0; i < s.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + s[i];
  }
  for (let i = m; i <= s.length; i++) {
    if (prefixSum[i] - prefixSum[i - m] === d) rs++;
  }
  return rs;
}
function birthday2(s, d, m) {
  let cur = 0;
  for (let i = 0; i < m; i++) {
    cur += s[i];
  }
  let rs = 0;
  if (cur === d) rs++;
  for (let i = m; i < s.length; i++) {
    cur = cur - s[i - m] + s[i];
    if (cur === d) rs++;
  }
  return rs;
}
birthday1([1, 2, 1, 3, 2], 3, 2);
