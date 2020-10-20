function swap(arr: number[], idx1: number, idx2: number): void {
	const t = arr[idx2];
	arr[idx2] = arr[idx1];
	arr[idx1] = t;
}

/**
 * Bubble Sort
 * @param arr
 * Worst (reverse sorted) + Average case: O(n^2)
 *
 * Best (already sorted): O(n)
 *
 * Space: O(1)
 *
 * In place,
 * Stable
 */
function bubbleSort(arr: number[]) {
	const n = arr.length;
	console.log(arr);
	// for(let i = n-1;i>=0;i--) {
	// 	for(let j = 0; j < i;j++) {
	// 		if(arr[j] > arr[j+1]) swap(arr,j,j+1)
	// 	}
	// }
	for (let i = 0; i < n - 1; i++) {
		let swapped = false; // optimized
		for (let j = 0; j < n - j - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				swapped = true;
			}
		}
		if (!swapped) {
			break;
		}
	}
	console.log(arr);
}

/**
 * Selection Sort
 * @param arr
 *
 * Time: O(n^2)
 *
 * Space: O(1)
 *
 * In place,
 * Unstable
 */
function selectionSort(arr: number[]) {
	const n = arr.length;
	console.log(arr);
	for (let i = 0; i < n - 1; i++) {
		let min_idx = i;
		for (let j = i + 1; j < n - 1; j++) {
			if (arr[j] < arr[min_idx]) min_idx = j;
		}
		swap(arr, i, min_idx);
	}
	console.log(arr);
}

/**
 * Selection Sort
 * @param arr
 *
 * Time: O(n^2)
 *
 * Space: O(1)
 *
 * In place,
 * Stable
 */
function stableSelectionSort(arr: number[]) {
	const n = arr.length;
	console.log(arr);
	for (let i = 0; i < n - 1; i++) {
		let min_idx = i;
		for (let j = i + 1; j < n - 1; j++) {
			if (arr[j] < arr[min_idx]) min_idx = j;
		}
		const min = arr[min_idx];
		while (min_idx > i) {
			arr[min_idx] = arr[min_idx - 1];
			min_idx--;
		}
		arr[i] = min;
	}
	console.log(arr);
}

/**
 * Insertion Sort
 * @param arr
 *
 * Time: O(n^2)
 *
 * Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.
 *
 * Space: O(1)
 *
 * In place,
 * Stable
 *
 * Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.
 */
function insertionSort(arr: number[]) {
	console.log(arr);
	for (let i = 1; i < arr.length; i++) {
		const key = arr[i];
		let j = i - 1;
		while (j >= 0 && key < arr[j]) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
	console.log(arr);
}

/**
 * Merge Sort
 * @param arr
 *
 * Time: O(N*logN)
 *
 * Space: O(n)
 *
 * In place,
 * Stable
 *
 * Divide and Conquer
 */
function mergeSort(arr: number[]) {
	console.log(arr);
	if (arr.length > 1) {
		const m = Math.floor(arr.length / 2);
		console.log(m);
		const left = arr.slice(0, m);
		const right = arr.slice(m);
		mergeSort(left);
		mergeSort(right);
		merge(arr, left, right);
	}
	console.log(arr);
}

function merge(arr: number[], left: number[], right: number[]) {
	let i = 0,
		j = 0,
		k = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			arr[k] = left[i];
			i++;
		} else {
			arr[k] = right[j];
			j++;
		}
		k++;
	}
	while (i < left.length) {
		arr[k] = left[i];
		i++;
		k++;
	}
	while (j < right.length) {
		arr[k] = right[j];
		j++;
		k++;
	}
}

/**
 * Quick Sort
 * @param arr
 *
 * Best + Average: O(N*logN)
 *
 * Worst: O(N^2)
 *
 * Space: O(log(n))
 *
 * In place,
 * Unstable
 *
 * Divide and Conquer
 */
function quickSort(arr: number[]) {
	console.log(arr);
	const n = arr.length;
	const _ = (left: number, right: number) => {
		if (left < right) {
			const p = partition(arr, left, right);
			console.log(p);
			_(left, p - 1);
			_(p + 1, right);
		}
	};
	_(0, n - 1);
	console.log(arr);
}
function partition(arr: number[], left: number, right: number) {
	const pivot = findPivotQS(arr, left, right);
	let small = left;
	for (let i = left; i < right; i++) {
		if (arr[i] < arr[pivot]) {
			swap(arr, small, i);
			small++;
		}
	}
	swap(arr, small, pivot);
	return small;
}
function findPivotQS(arr: number[], left: number, right: number) {
	return right;
}

/**
 * Radix Sort
 * @param arr
 *
 * Time: O(nk)
 *
 * space: O(n+k)
 */
function radixSort(arr: number[]) {
	console.log(arr)
	const max = Math.max(...arr);
	let exp = 1;
	while (Math.floor(max / exp) > 0) {
		console.log(exp)
		countingSort(arr, exp);
		exp *= 10;
	}
	console.log(arr)
}
function countingSort(arr: number[], exp: number) {
	console.log(arr)
	const n = arr.length;
	const output = new Array(n).fill(0);
	const count = new Array(10).fill(0);
	for(let i = 0;i<n;i++) {
		let index = Math.floor(arr[i]/exp)
		count[index%10] += 1
	}
	console.log(count)
	for(let i=1;i<10;i++) {
		count[i] += count[i-1]
	}
	console.log(count)
	let i = n -1
	while(i>=0) {
		let index = Math.floor(arr[i]/exp)
		output[count[index%10] - 1] = arr[i]
		count[index%10] -= 1
		i--;
	}
	console.log(output)
	for(let i = 0;i < n;i++) {
		arr[i] = output[i]
	}
}
const sort = radixSort;
sort([2, 4, 6, 70, 1, 3]);
