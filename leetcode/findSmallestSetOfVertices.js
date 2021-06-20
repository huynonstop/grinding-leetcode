/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const noInVertexes = new Set();
  for (let i = 0; i < n; i++) {
    noInVertexes.add(i);
  }
  for (const [u, v] of edges) {
    noInVertexes.delete(v);
  }
  return Array.of(...noInVertexes);
};
findSmallestSetOfVertices(3, [
  [1, 2],
  [1, 0],
  [0, 2],
]);
