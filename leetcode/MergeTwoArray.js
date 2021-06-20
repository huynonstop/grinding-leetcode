/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
function mergeTwoArray(array1, array2) {
	const res = [];
	let i1 = 0;
	let i2 = 0;
	if (!array1[i1]) return array2;
	if (!array2[i2]) return array1;
	while (array1[i1] || array2[i2]) {
    if(!array2[i2] || array1[i1] <= array2[i2]) {
      res.push(array1[i1])
      i1++;
    }
    if(!array1[i1] || array1[i1] > array2[i2]) {
      res.push(array2[i2])
      i2++;
    }
  }
	return res;
}

console.log(mergeTwoArray([1,3,5],[2,4,6,8]))