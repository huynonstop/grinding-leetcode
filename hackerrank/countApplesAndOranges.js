function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const check = (v) => {
    return v >= s && v <= t;
  };
  let ca = apples.reduce((p, c) => {
    if (check(a + c)) return p + 1;
    return p;
  }, 0);
  let cb = oranges.reduce((p, c) => {
    if (check(b + c)) return p + 1;
    return p;
  }, 0);
  console.log(ca);
  console.log(cb);
}

countApplesAndOranges(2, 3, 1, 5, [-2], [-1]);
