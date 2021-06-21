function breakingRecords(scores) {
  // Write your code here
  let [cx, cn] = [0, 0];
  let [mx, mn] = [scores[0], scores[0]];
  for (let i = 1; i < scores.length; i++) {
    const cur = scores[i];
    if (cur > mx) {
      mx = cur;
      cx += 1;
    } else if (cur < mn) {
      mn = cur;
      cn += 1;
    }
  }
  return [cx, cn];
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
