/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const paths = [];
  const dfs = (node, path) => {
    const newPath = [...path, node];
    if (node === n - 1) {
      return paths.push(newPath);
    }
    for (let n of graph[node]) {
      dfs(n, newPath);
    }
  };
  dfs(0, []);
  return paths;
};
console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
