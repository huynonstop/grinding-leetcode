/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArrayLinear = function(arr) {
  for(let i =0;i<arr.length;i++) {
    if(arr[i] > arr[i+1]) return i;
  }
};

var peakIndexInMountainArrayBinary = function(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let mid =  Math.floor((left+right)/2)
    if(arr[mid] < arr[mid+1])
      left = mid + 1;
    else 
      right = mid;
  }
  return left
};