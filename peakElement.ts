function searchPeak(arr: number[]): number {
	const n = arr.length;
	if (n < 2) return n - 1;
	if (arr[0] >= arr[1]) return 0;
	if (arr[n - 1] >= arr[n - 2]) return n - 1;
	for (let i = 1; i < n - 1; i++) {
		if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
	}
	return -1;
}

// console.log(searchPeak([1, 2]));
// console.log(searchPeak([2, 2]));
// console.log(searchPeak([2, 1]));
// console.log(searchPeak([1, 2, 4, 5]));
// console.log(searchPeak([1, 3, 5, 4, 2]));
// console.log(searchPeak([1, 1, 4, 3]));

function binarySearchPeak(arr: number[]): number {
	const n = arr.length;
	const _ = (l: number, r: number): number => {
		const m = Math.floor((l + r) / 2);
		if (
			(m === 0 || arr[m-1] <= arr[m]) &&
			(m === n - 1 || arr[m + 1] <= arr[m])
		) {
			return m;
		}
		if (m > 0 && arr[m - 1] > arr[m]) {
			return _(l, m - 1);
		} else {
			return _(m + 1, r);
		}
	};
	return _(0, n - 1);
}

// console.log(binarySearchPeak([1, 2]));
// console.log(binarySearchPeak([2, 2]));
// console.log(binarySearchPeak([2, 1]));
// console.log(binarySearchPeak([1, 2, 4, 5]));
// console.log(binarySearchPeak([1, 3, 5, 4, 2]));
console.log(binarySearchPeak([1, 1, 4, 3]));