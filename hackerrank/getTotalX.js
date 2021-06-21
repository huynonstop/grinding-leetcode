function getTotalX(a, b) {
  // Write your code here
  let f = lcm_array(a);
  let l = gcd_array(b);
  let rs = 0;
  for (let j = 1; f * j <= l; j++) {
    if (l % (f * j) === 0) rs++;
  }
  return rs;
}

const gcd = (a, b) => {
  while (b > 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// int gcd(int a, int b) {
//   while (a && b) {
//       if (a >= b)
//           a %= b;
//       else
//           b %= a;
//   }
//   return a + b;
// }

const gcd_array = (a) => {
  let rs = a[0];
  for (let i = 1; i < a.length; i++) {
    rs = gcd(rs, a[i]);
  }
  return rs;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const lcm_array = (a) => {
  let rs = a[0];
  for (let i = 1; i < a.length; i++) {
    rs = lcm(rs, a[i]);
  }
  return rs;
};

getTotalX([2, 4], [16, 32, 96]);
