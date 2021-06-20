function maxSumArray(array: number[], num: number): number {
	let max = 0;
	if (array.length < num) {
		return null;
	}
	for (let i = 0; i < num; i++) {
		max += array[i];
	}
	let temp = max;
	for (let i = num; i < array.length; i++) {
		temp = temp - array[i - num] + array[i];
		max = Math.max(max, temp);
	}
	return max;
}

console.log(maxSumArray([2, 6, 9, 2, 1, 8], 2));
