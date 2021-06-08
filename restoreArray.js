/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
  let graph = {};
  for (let [x, y] of adjacentPairs) {
    if (!graph[x]) {
      graph[x] = [];
    }
    if (!graph[y]) {
      graph[y] = [];
    }
    graph[x].push(y);
    graph[y].push(x);
  }
  let rs = new Set();
  for (let k in graph) {
    if (graph[k].length === 1) {
      rs.add(+k);
      let next = graph[k][0];
      while (graph[next].length !== 1) {
        rs.add(next);
        const [l, r] = graph[next];
        next = rs.has(l) ? r : l;
      }
      rs.add(next);
      return Array.from(rs);
    }
  }
};

restoreArray([
  [2, 1],
  [3, 4],
  [3, 2],
]);
