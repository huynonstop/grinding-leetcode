/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let hash = new Map();
  let sArray = s.split(' ');
  let seen = new Set();
  for (let i = 0; i <= pattern.length; i++) {
    let before = hash.get(pattern[i]);
    if (before) {
      if (before !== sArray[i]) return false;
    } else if (seen.has(sArray[i])) {
      return false;
    } else {
      hash.set(pattern[i], sArray[i]);
      seen.add(sArray[i]);
    }
  }
  return true;
};
wordPattern('abba', 'dog cat cat fish');
// class Solution {
//   public boolean wordPattern(String pattern, String s) {
//       HashMap map_index = new HashMap();
//       String[] words = s.split(" ");

//       if (words.length != pattern.length())
//           return false;

//       for (Integer i = 0; i < words.length; i++) {
//           char c = pattern.charAt(i);
//           String w = words[i];

//           if (!map_index.containsKey(c))
//               map_index.put(c, i);

//           if (!map_index.containsKey(w))
//               map_index.put(w, i);

//           if (map_index.get(c) != map_index.get(w))
//               return false;
//       }

//       return true;
//   }
// }
