function hourglassSum(arr) {
  // Write your code here
  let n = arr.length;
  let m = arr[0].length;
  let rs = -100;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      rs = Math.max(rs, glassSum(arr, i, j));
    }
  }
  return rs;
}

const glassSum = (arr, i, j) => {
  return (
    arr[i][j] +
    arr[i][j + 1] +
    arr[i][j + 2] +
    arr[i + 1][j + 1] +
    arr[i + 2][j] +
    arr[i + 2][j + 1] +
    arr[i + 2][j + 2]
  );
};
