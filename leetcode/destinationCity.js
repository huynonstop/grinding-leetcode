/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  let hashmap = {};
  for(let [from,to] of paths ) {
    hashmap[from] = true;
    hashmap[to] = hashmap[to] || false;
  }
  for(let city in hashmap) {
    if(!hashmap[city]) return city;
  }
};