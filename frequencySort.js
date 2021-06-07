/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let count = {};
  let c_array = [];
  for (let ch of s) {
    if (count[ch]) {
      count[ch] = count[ch] + 1;
    } else {
      count[ch] = 1;
      c_array.push(ch);
    }
  }
  c_array.sort((a, b) => count[b] - count[a]);
  let rs = '';
  for (let c of c_array) {
    rs += c.repeat(count[c]);
  }
  return rs;
};

const charToIndex = (c) => {
  return c.charCodeAt(0) - 'a'.charCodeAt(0);
};

const fromIndex = (i) => {
  return String.fromCharCode('a'.charCodeAt(0) + i);
};

var frequencySort = function (s) {
  let count = {};
  for (let ch of s) {
    if (count[ch]) {
      count[ch] = count[ch] + 1;
    } else {
      count[ch] = 1;
    }
  }
  const bucket = [];
  for (let k in count) {
    let c = count[k];
    if (!bucket[c]) bucket[c] = [];
    bucket[c].push(k);
  }
  let rs = '';
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      for (let ch of bucket[i]) {
        rs += ch.repeat(i);
      }
    }
  }
  return rs;
};

frequencySort('tree');
