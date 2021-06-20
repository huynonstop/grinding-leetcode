/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let group = [0, -1];
  let rs = [];
  for (let i = 1; i < s.length + 1; i++) {
    if (s[i] !== s[group[0]]) {
      if (group[1] - group[0] >= 2) rs.push(group);
      group = [i, -1];
    } else {
      group[1] = i;
    }
  }
  return rs;
};

var largeGroupPositions = function (s) {
  let rs = [];
  let t = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== s[i+1]) {
      if(i - t >= 2) rs.push([t,i])
      t = i + 1;
    }
  }
  return rs;
};

largeGroupPositions('aaa');
