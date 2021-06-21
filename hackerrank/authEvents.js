function authEvents(events) {
  // Write your code here
  const cur = [];
  const p = 131;
  const m = 1000000007;
  const h = (s) => {
    let sum = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
      sum += s.charCodeAt(i) * Math.pow(p, n - 1 - i);
    }
    return [sum % m, s.charCodeAt(n - 1)];
  };
  const a = (h) => {
    if (cur[0] === h) return 1;
    if (Math.abs(h - (cur[0] - cur[1])) < 127) return 0;
    if (h - ((cur[0] * p) % m) < 127) return 1;
    return 0;
  };
  let rs = [];
  for (let [type, para] of events) {
    if (type === 'setPassword') {
      const [hash, last] = h(para);
      cur[0] = hash;
      cur[1] = last;
    }
    if (type === 'authorize') {
      rs.push(a(+para));
    }
  }
  return rs;
}
// authEvents([
//   ['setPassword', '000A'],
//   ['authorize', 108738450],
//   ['authorize', 108738449],
//   ['authorize', 244736787],
// ]);
authEvents([
  ['setPassword', '1'],
  ['setPassword', '2'],
  ['setPassword', '3'],
  ['authorize', 49],
  ['authorize', 50],
]);
