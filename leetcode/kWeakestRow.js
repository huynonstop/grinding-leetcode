/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
	let counts = [];
	for (let i = 0; i < mat.length; i++) {
		let count = 0;
		for (let num of mat[i]) {
			count += num;
		}
		counts[i] = count;
	}
	let idx = [...Array(counts.length).keys()];
	idx.sort((a, b) => counts[a] - counts[b]);
	return idx.slice(0, k);
};
kWeakestRows(
	[
		[1, 1, 0, 0, 0],
		[1, 1, 1, 1, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 1, 1, 1, 1],
	],
	3
);

var kWeakestRows = function (mat, k) {
	let bucket = [];

	const binarySearch = (arr) => {
		let l = 0;
		let r = arr.length - 1;
		while (l <= r) {
			let mid = (l + r) >>> 1;
			if (arr[mid] === 1) l = mid + 1;
			else r = mid - 1;
		}
		return l;
	};

	let soldiers;

	for (let i = 0; i < mat.length; i++) {
		soldiers = binarySearch(mat[i]);
		if (bucket[soldiers]) bucket[soldiers].push(i);
		else bucket[soldiers] = [i];
	}

	return bucket.flat().slice(0, k);
};

var kWeakestRows = function (mat, k) {
	let counts = [];
	const binarySearch = (arr) => {
		let l = 0;
		let r = arr.length - 1;
		while (l <= r) {
			let mid = (l + r) >>> 1;
			if (arr[mid] === 1) l = mid + 1;
			else r = mid - 1;
		}
		return l;
	};
	for (let i = 0; i < mat.length; i++) {
		counts[i] = binarySearch(mat[i]);
	}
	let idx = [...Array(counts.length).keys()];
	idx.sort((a, b) => counts[a] - counts[b]);
	return idx.slice(0, k);
};