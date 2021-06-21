let m = 1e9 + 7;
function sortedSum(arr) {
  // Write your code here
  let s = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    s = (s + (sum(arr, i) % m)) % m;
  }
  return s;
}

const sum = (arr, i) => {
  let s = 0;
  for (let j = 0; j <= i; j++) {
    s = s + ((arr[j] * (j + 1)) % m);
  }
  return s % m;
};

sortedSum([4, 3, 2, 1]);
