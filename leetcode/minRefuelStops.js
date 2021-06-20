/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  const dfs = (i, cur, fuel, count) => {
    if (i === stations.length) {
      return cur + fuel >= target ? count : -1;
    }
    if (fuel < 0) return -1;
    const [s, f] = stations[i];
    const d = s - cur;
    if (fuel - d < 0) return -1;
    const skip = dfs(i + 1, s, fuel - d, count);
    if (skip !== -1) return skip;
    return dfs(i + 1, s, fuel - d + f, count + 1);
  };
  return dfs(0, 0, startFuel, 0);
};
minRefuelStops(1000, 299, [
  [13, 21],
  [26, 115],
  [100, 47],
  [225, 99],
  [299, 141],
  [444, 198],
  [608, 190],
  [636, 157],
  [647, 255],
  [841, 123],
]);
