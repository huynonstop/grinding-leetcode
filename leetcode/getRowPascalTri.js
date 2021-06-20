/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(!rowIndex) return [1];
  let rs = [1];
  for(let i = 1;i<=rowIndex;i++) {
    let temp = [1];
    for(let j = 1;j<i;j++) {
      temp[j] = rs[j] + rs[j-1]
    }
    temp.push(1);
    rs = temp;
  }
  return rs;
};
getRow(3)