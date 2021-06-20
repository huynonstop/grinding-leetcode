/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let n = edges.length;
  let connectedEdge = {};
  for (let e of edges) {
    let [u, v] = e;
    connectedEdge[u] = connectedEdge[u] ? connectedEdge[u] + 1 : 1;
    connectedEdge[v] = connectedEdge[v] ? connectedEdge[v] + 1 : 1;
  }
  for (let node in connectedEdge) {
    if (connectedEdge[node] === n) return node;
  }
  return null;
};
findCenter([
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
]);
