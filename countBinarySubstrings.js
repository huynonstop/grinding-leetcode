/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
	let cur = 1,
		pre = 0,
		res = 0;
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) cur++;
		else {
			res += Math.min(cur, pre);
			pre = cur;
			cur = 1;
		}
	}
	return res + Math.min(cur, pre);
};

countBinarySubstrings('00110');

// preRun count the same item happend before (let say you have 0011, preRun = 2 when you hit the first 1, means there are two zeros before first '1')
// curRun count the current number of items (let say you have 0011, curRun = 2 when you hit the second 1, means there are two 1s so far)
// Whenever item change (from 0 to 1 or from 1 to 0), preRun change to curRun, reset curRun to 1 (store the curRun number into PreRun, reset curRun)
// Every time preRun >= curRun means there are more 0s before 1s, so could do count++ . (This was the tricky one, ex. 0011 when you hit the first '1', curRun = 1, preRun = 2, means 0s number is larger than 1s number, so we could form "01" at this time, count++ . When you hit the second '1', curRun = 2, preRun = 2, means 0s' number equals to 1s' number, so we could form "0011" at this time, that is why count++)
// class Solution {
// public int countBinarySubstrings(String s) {
// if (s == null || s.length() == 0) return 0;
//         int preRun = 0;
//         int curRun =1;
//         int count = 0;
//         for (int i = 1; i < s.length(); i++){
//             if (s.charAt(i) == s.charAt(i-1)) curRun++;
//             else {
//                 preRun = curRun;
//                 curRun = 1;
//             }
//             if (preRun >= curRun) count++;
//         }
//         return count;
//     }
// }
// class Solution {
//   public int countBinarySubstrings(String s) {
//       int zeros=0, ones=0;
//       int last=-1,count=0;
//       for(char c:s.toCharArray()) {
//           if(c == '0') {
//               if(last == 1) zeros=0;
//               zeros++;
//               last=0;
//           } else {
//               if(last == 0) ones=0;
//               ones++;
//               last=1;
//           }
//           if((last==1 && zeros >= ones) || (last==0 && ones >= zeros)) count++;
//       }
//       return count;
//   }
// }
// Run "000111", "01", "0101", "0101", "01010" examples
