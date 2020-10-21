/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
	let rs = -1;
	let hashmap = {};
	for (let i = 0; i < s.length; i++) {
    if(hashmap[s[i]] === undefined) {
      hashmap[s[i]] = i;
    } else {
      rs = Math.max(rs, i - hashmap[s[i]] - 1);
    }
  }
  return rs;
};
maxLengthBetweenEqualCharacters("aa")
