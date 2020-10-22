/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

/**
 * Input: queries = ["cbd"], words = ["zaaaz"]
 * Output: [1]
 * Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
 *
 * Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
 * Output: [1,2]
 * Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").
 */
var numSmallerByFrequency = function (queries, words) {
	let c_words = words
		.map((w) => countFrequencySmallestChar(w))
		.sort((a, b) => a - b);
	let n = c_words.length;
	const search = (target) => {
		let lo = 0;
		let hi = n - 1;
		if (target >= c_words[hi]) return n;
		while (lo < hi) {
			let mid = Math.floor((lo + hi) / 2);
			if (c_words[mid] <= target) lo = mid + 1;
			else hi = mid;
		}
		return lo;
	};
	let c_queries = queries
		.map((q) => countFrequencySmallestChar(q))
		.map((c) => {
			let f_idx_greater = search(c);
			return n - 1 - f_idx_greater + 1;
		});
	return c_queries;
};

var numSmallerByFrequency = function (queries, words) {
	let fCount = Array(11).fill(0);
	for (let w of words) {
		fCount[countFrequencySmallestChar(w)]++;
	}
	let sum = 0;
	for (let i = 0; i < fCount.length; i++) {
		sum += fCount[i];
		fCount[i] = sum;
	}
	let rs = [];
	for (let i = 0; i < queries.length; i++) {
		let count = countFrequencySmallestChar(queries[i]);
		rs.push(fCount[fCount.length - 1] - fCount[count]);
	}
	return rs;
};

function countFrequencySmallestChar(word) {
	let smallest = word[0];
	let count = 0;
	for (let c of word) {
		if (c < smallest) {
			smallest = c;
			count = 1;
		} else if (c === smallest) {
			count++;
		}
	}
	return count;
}

numSmallerByFrequency(
	[
		'aabbabbb',
		'abbbabaa',
		'aabbbabaa',
		'aabba',
		'abb',
		'a',
		'ba',
		'aa',
		'ba',
		'baabbbaaaa',
		'babaa',
		'bbbbabaa',
	],
	[
		'b',
		'aaaba',
		'aaaabba',
		'aa',
		'aabaabab',
		'aabbaaabbb',
		'ababb',
		'bbb',
		'aabbbabb',
		'aab',
		'bbaaababba',
		'baaaaa',
	]
);
