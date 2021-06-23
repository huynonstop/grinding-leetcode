function migratoryBirds(arr) {
  // Write your code
  let bucket = Array(6).fill(0);
  let max = 0;
  for (let t of arr) {
    ++bucket[t];
    if (bucket[t] > bucket[max]) {
      max = t;
    } else if (bucket[t] === bucket[max]) {
      max = Math.min(t, max);
    }
  }
  return max;
}
