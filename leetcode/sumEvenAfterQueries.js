/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let sumEven = A.reduce((p,c) => c % 2 === 0 ? p + c : p,0);
  let rs = queries.map(([val,idx]) => {
    let new_a_i = A[idx] + val;
    if(new_a_i % 2 === 0 && A[idx] % 2 === 0) {
      sumEven += val;
    }
    if(new_a_i % 2 === 0 && A[idx] % 2 !== 0) {
      sumEven += new_a_i;
    }
    if(new_a_i % 2 !== 0 && A[idx] % 2 === 0) {
      sumEven -= A[idx];
    }
    A[idx] = new_a_i;
    return sumEven;
  });
  return rs;
};

sumEvenAfterQueries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]])