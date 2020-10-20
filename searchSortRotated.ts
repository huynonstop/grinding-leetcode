function search(arr: number[], key: number): number {
	return arr.indexOf(key);
}

console.log(search([5, 6, 7, 8, 9, 10, 1, 2, 3], 4));

function searchBinary(
	arr: number[],
	l: number,
	r: number,
	key: number
): number {
	if (r < l) return -1;
	const m = Math.floor((l + r) / 2);
	if (arr[m] > key) {
		return searchBinary(arr, key, l, m - 1);
	} else if (arr[m] < key) {
		return searchBinary(arr, key, m + 1, r);
	} else {
		return m;
	}
}

function findPivot(arr: number[], l: number, r: number): number {
	if (r < l) return -1;
	const m = Math.floor((l + r) / 2);
	if (m < r && arr[m] > arr[m + 1]) {
		return m;
	}
	if (m > l && arr[m] < arr[m - 1]) {
		return m - 1;
	}
	if (arr[l] >= arr[m]) return findPivot(arr, l, m - 1);
	return findPivot(arr, m + 1, r);
}

function search2(arr: number[], key: number): number {
	const n = arr.length;
	const pivot = findPivot(arr, 0, n - 1);
	if (pivot === -1) {
		return searchBinary(arr, 0, n - 1, key);
	}
	if (arr[pivot] === key) return pivot;
	if (arr[0] <= key) {
		return searchBinary(arr, 0, pivot - 1, key);
	}
	return searchBinary(arr, pivot + 1, n - 1, key);
}

console.log(search2([5, 6, 7, 8, 9, 10, 1, 2, 3], 10));

function search3(arr: number[], key: number): number {
	const _ = (l: number, r: number): number => {
		if (r < l) {
			return -1;
		}
		const m = Math.floor((l + r) / 2);
		if (arr[m] === key) return m;
		if (arr[l] <= arr[m]) {
			if (key >= arr[l] && key <= arr[m]) {
				return _(l, m - 1);
			}
			return _(m + 1, r);
		}
		if (key >= arr[m] && key <= arr[r]) {
			return _(m + 1, r);
		}
		return _(l, m - 1);
	};
	return _(0, arr.length - 1);
}
console.log(search3([5, 6, 7, 8, 9, 10, 1, 2, 3], 10));
