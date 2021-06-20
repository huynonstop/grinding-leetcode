/**
 * @param {string} tiles
 * @return {number}
 * https://leetcode.com/problems/letter-tile-possibilities/discuss/308398/C%2B%2B-Permutation-of-Combinations
 * https://leetcode.com/problems/letter-tile-possibilities/discuss/308284/Concise-java-solution
 */
var numTilePossibilities = function (tiles) {
  const setTitle = new Set();
  const dfs = (pre, tiles) => {
    for (let i = 0; i < tiles.length; i++) {
      setTitle.add(pre + tiles[i]);
      dfs(
        pre + tiles[i],
        tiles.substring(0, i) + tiles.substring(i + 1, tiles.length)
      );
    }
  };
  dfs('', tiles);
  return setTitle.size;
};
numTilePossibilities('AAB');
