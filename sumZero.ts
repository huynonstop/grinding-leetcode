function sumZero(nums: number[]) {
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		let sum: number = nums[left] + nums[right];
		console.log(sum,[left, right]);
		if (sum < 0) {
			left++;
		} else if (sum > 0) {
			right--;
		} else {
			return [nums[left], nums[right]];
		}
	}
}

console.log(sumZero([1,-1].sort((a,b) => a-b)));
