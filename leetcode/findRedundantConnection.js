/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// O(n^2)
// For each edge (u, v), traverse the graph with a depth-first search to see if we can connect u to v. If we can, then it must be the duplicate edge.
var findRedundantConnection = function (edges) {
  const graph = {};
  const dfs = (source, target, seen) => {
    let stack = [source];
    while (stack.length) {
      let cur = stack.pop();
      if (!seen.has(cur)) {
        seen.add(cur);
        if (cur === target) return true;
        for (let i = graph[cur].length - 1; i >= 0; i++) {
          stack.push(graph[cur][i]);
        }
      }
    }
    return false;
  };
  for (let [u, v] of edges) {
    const seen = new Set();
    if (graph[u] && graph[v] && dfs(u, v, seen)) return [u, v];
    if (!graph[u]) graph[u] = [];
    graph[u].push(v);
    if (!graph[v]) graph[v] = [];
    graph[v].push(u);
  }
};

// https://leetcode.com/problems/redundant-connection/solution/
var findRedundantConnection = function (edges) {
  const sets = [];
  const find = (v) => {
    return sets[v] ? find(sets[v]) : v;
  };
  for (let [u, v] of edges) {
    const rootU = find(u);
    const rootV = find(v);
    if (rootU === rootV) return [u, v];
    sets[rootU] = rootV;
  }
};
findRedundantConnection([
  [1, 2],
  [1, 3],
  [2, 3],
]);
