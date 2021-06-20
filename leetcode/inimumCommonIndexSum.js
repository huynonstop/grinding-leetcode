/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let hashmap = list1.reduce((p, c, i) => {
    p[c] = Math.min(i, p[c] || list1.length);
    return p;
  }, {});
  let rs = [];
  let min = list1.length + list2.length;
  list2.forEach((v, i) => {
    if (hashmap[v] !== undefined) {
      let sumIndex = i + hashmap[v];
      if (sumIndex < min) {
        min = sumIndex;
        rs = [v];
      } else if (sumIndex === min) {
        rs.push(v);
      }
    }
  });
  return rs;
};
findRestaurant(
  ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
  ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
);
