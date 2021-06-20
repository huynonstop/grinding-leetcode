/**
 * Time complexity : O(2n) = O(n)O(2n)=O(n). In the worst case each character will be visited twice by ii and jj.
 * "aaaaaa"
 */
function longestUniqueSubString(str: string) {
	const hash = {};
	let left = 0;
	let right = 0;
	let max = [left, right];
	while (left < str.length && right < str.length) {
		console.log(hash);
		if (!hash[str[right]]) {
			hash[str[right]] = 1;
			right++;
			if (right - left > max[1] - max[0]) {
				max = [left, right];
			}
		} else {
			delete hash[str[left]];
			left++;
		}
	}
	console.log(max);
	return max;
}
function longestUniqueSubStringOp(str: string) {
	const hash = {};
	let max = [0, 0];
	for (let i = 0, j = 0; j < str.length; j++) {
		if (hash[str[j]]) {
			i = Math.max(hash[str[j]], i);
		}
		if (j - i > max[1] - max[0]) {
			max = [i, j];
		}
		hash[str[j]] = j + 1;
	}
	return max;
}
longestUniqueSubStringOp("abcabcbb");
