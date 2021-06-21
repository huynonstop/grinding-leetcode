function mostActive(customers) {
  // Write your code here
  let map = {};
  for (let c of customers) {
    if (!map[c]) map[c] = 0;
    map[c]++;
  }
  let thresh = customers.length * 0.05;
  let rs = [];
  for (let c in map) {
    if (map[c] >= thresh) rs.push(c);
  }
  return rs.sort();
}

mostActive([
  'Alpha',
  'Omega',
  'Alpha',
  'Omega',
  'Alpha',
  'Omega',
  'Alpha',
  'Omega',
  'Alpha',
  'Omega',
  'Alpha',
  'Omega',
  'Alpha',
  'Omega',
  'Alpha',
  'Omega',
  'Alpha',
  'Omega',
  'Beta',
]);
