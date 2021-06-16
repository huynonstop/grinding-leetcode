function linearSearch(arr: number[], key: number): number {
	//O(1) O(n) O(n)
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === key) return i;
	}
	return -1;
}
// https://stackoverflow.com/questions/12144802/finding-multiple-entries-with-binary-search
function binarySearchR(arr: number[], key: number): number {
	//O(1) O(logN)
	const n = arr.length;
	const _ = (l: number, r: number): number => {
		if (l > r) return -1;
		const m = Math.floor((l + r) / 2);
		//const m = Math.floor(l + (r-l)/2); overflow case
		if (arr[m] > key) {
			return _(l, m - 1);
		} else if (arr[m] < key) {
			return _(m + 1, r);
		} else {
			return m;
		}
	};
	return _(0, n - 1);
}

function binarySearch(arr: number[], key: number) {
	let l = 0;
	let r = arr.length - 1;
	while (l <= r) {
		const m = Math.floor((l + r) / 2);
		if (arr[m] === key) {
			return m;
		} else if (arr[m] > key) {
			r = m - 1;
		} else {
			l = m + 1;
		}
	}
	return -1;
}
