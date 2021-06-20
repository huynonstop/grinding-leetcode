/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let freq = {};
	let mostFreq = 0;
	let left = 0;
	let max = 0;
	for (let right = 0; right < s.length; right++) {
		freq[s[right]] = freq[s[right]] + 1 || 1;
		mostFreq = Math.max(mostFreq, freq[s[right]]);
		let letterToChange = (right - left + 1) - mostFreq;
		if (letterToChange > k) {
			freq[s[left]]--;  
			left++;
		}
		max = Math.max(max, right - left + 1);
	}
	return max;
};
characterReplacement("AABABCC");