function countUnique(nums: number[]) {
	if (nums.length < 2) return nums.length;
	let count = 1;
	let i = 0;
	let j = 1;
	while (j < nums.length) {
		if (nums[i] !== nums[j]) {
			count++;
			i = j;
		}
		j++;
	}
	return count;
}

console.log(countUnique([]));
