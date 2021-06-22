function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let rs = 0;
  for (let i = 0; i < n - 1; i++)
    for (let j = i + 1; j < n; j++) if ((ar[i] + ar[j]) % k === 0) rs++;
  return rs;
}

// The idea is that you separate elements into buckets depending on their mod k. For example, you have the elements: 1 3 2 6 4 5 9 and k = 3

// mod 3 == 0 : 3 6 9
// mod 3 == 1 : 1 4
// mod 3 == 2 : 2 5
// Now, you can make pairs like so: Elements with mod 3 == 0 will match with elements with (3 - 0) mod k = 0, so other elements in the mod 3 == 0 list, like so:

// (3, 6) (3, 9) (6, 9)
// There will be n * (n - 1) / 2 such pairs, where n is length of the list, because the list is the same and i != j. Elements with mod 3 == 1 will match with elements with (3 - 1) mod k = 2, so elements in the mod 3 == 2 list, like so:

// (1, 2) (1, 5) (4, 2) (4, 5)
// There will be n * k such elements, where n is the length of the first list, and k of the second.

function divisibleSumPairs1(n, k, a) {
  let m = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    m[a[i] % k]++;
  }
  let sum = 0;
  sum += (m[0] * (m[0] - 1)) >> 1;
  for (let i = 1; i <= k >> 1 && i !== k - i; i++) {
    sum += m[i] * m[k - i];
  }
  if (k % 2 == 0) sum += (m[k >> 1] * (m[k >> 1] - 1)) >> 1;
  return sum;
}

// 6 3
// 1 3 2 6 1 2

// Input: 1
// INITIAL STATE: Bucket[0]:0; Bucket[1]:0; Bucket[2]:0 Count:0
// Remainder r: 1
// Complement: 3 - r = 2
// count+= Bucket[2]:0
// bucket[1]++

// Input: 3
// INITIAL STATE: Bucket[0]:0; Bucket[1]:1; Bucket[2]:0 Count:0
// Remainder r: 0
// Complement: 3 - r = 3 -> 0 //(3 gets switched for 0 =) ).
// count+= bucket[0]:0
// bucket[0]++

// Input: 2
// INITIAL STATE: Bucket[0]:1; Bucket[1]:1; Bucket[2]:0 Count:0
// Remainder r: 2
// Complement: 3 - r = 1
// count+= bucket[1]:1
// bucket[2]++

// Input: 6
// INITIAL STATE: Bucket[0]:1; Bucket[1]:1; Bucket[2]:1 Count:1
// Remainder r: 0
// Complement: 3 - r = 3 -> 0
// count+= bucket[0]:1
// bucket[0]++

// Input: 1
// INITIAL STATE: Bucket[0]:2; Bucket[1]:1; Bucket[2]:1 Count:2
// Remainder r: 1
// Complement: 3 - r = 2
// count+= bucket[2]:1
// bucket[1]++

// Input: 2
// INITIAL STATE: Bucket[0]:2; Bucket[1]:2; Bucket[2]:1 Count:3
// Remainder r: 2
// Complement: 3 - r = 1
// count+= bucket[1]:2
// bucket[2]++

// FINAL STATE: Bucket[0]:2; Bucket[1]:2; Bucket[2]:2 Count:5

function divisibleSumPairs2(n, k, a) {
  let m = Array(k + 1).fill(0); // buckets: stores the number of elements for each bucket buckets[i] = n means ith bucket has n elements inside
  let count = 0;
  for (let i = 0; i < n; i++) {
    let complement = a[i] % k || k;
    count += m[k - complement]; // add all possible pairs between the current and every elements inside the complement bucket
    m[a[i] % k]++; // buckets[current]++; // add the current into its bucket
  }
  return count;
}
divisibleSumPairs1(2, 2, [8, 10]);
