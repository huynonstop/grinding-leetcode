/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
	let s_array = S.split('');
	let left = 0;
	let right = s_array.length - 1;
	while (left < right) {
		while (left < right && !isLetters(s_array[left])) {
			left++;
		}
		while (left < right && !isLetters(s_array[right])) {
			right--;
		}
		if (left < right) {
			swap(s_array, left, right);
			left++;
			right--;
		}
	}
	return s_array.join('');
};

var reverseOnlyLetters = function (S) {
	let rs = '';
	let left = 0;
	let right = S.length - 1;
	while (left < S.length) {
		if (isLetters(S[left])) {
			while (!isLetters(S[right])) right--;
			rs += S[right--];
		} else {
			rs += S[left];
		}
		left++;
	}
	return rs;
};

var reverseOnlyLetters = function (S) {
	let letters_S = [];
	for (let c of S) {
		if (isLetters(c)) letters_S.push(c);
	}
	let rs = '';
	for (let c of S) {
		if (isLetters(c)) rs += letters_S.pop();
		else rs += c;
	}
	return rs;
};

function swap(array, i, j) {
	let t = array[i];
	array[i] = array[j];
	array[j] = t;
}

function isLetters(c) {
	return c && c.toLowerCase() != c.toUpperCase();
}

reverseOnlyLetters('7_28]');
