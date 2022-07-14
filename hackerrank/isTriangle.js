function isTriangle(a,b,c) {
  return a + b > c && a + c > b && b + c > a
}

function canFormTriangle(arr) {
  const n = arr.length
  arr.sort((a,b) => b - a);
  for(let i = 0; i < n - 2;i++) {
    if (isTriangle(arr[i],arr[i+1],arr[i+2])) {
      return true
    }
  }
  return false
}

console.log(canFormTriangle([1,2,3,4]) == true)
console.log(canFormTriangle([1,2,3,5]) == false)