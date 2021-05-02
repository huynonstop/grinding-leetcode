/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const display = [];
  const map = {};
  const headerSet = new Set();
  const tableSet = new Set();
  for (const [name, table, food] of orders) {
    if (!map[table + '-' + food]) map[table + '-' + food] = 0;
    map[table + '-' + food]++;
    headerSet.add(food);
    tableSet.add(table);
  }
  display.push(['Table', ...Array.from(headerSet).sort()]);
  Array.from(tableSet)
    .sort((a, b) => +a - +b)
    .forEach((t, index) => {
      display.push([t]);
      for (let i = 1; i < display[0].length; i++) {
        display[index + 1].push((map[t + '-' + display[0][i]] || 0).toString());
      }
    });
  return display;
};

var displayTable = function (orders) {
  orders.sort((a, b) => {
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
    return 0;
  });
  let foods = new Map([['Table', 0]]);
  for (let order of orders) {
    if (!foods.has(order[2])) foods.set(order[2], foods.size);
  }
  let result = [[...foods.keys()]];
  let table = new Map();
  for (let i = 0; i < orders.length; i++) {
    if (!table.has(orders[i][1])) {
      let newOrder = new Array(foods.size).fill('0');
      newOrder[0] = orders[i][1];
      table.set(orders[i][1], newOrder);
    }
    let newTable = table.get(orders[i][1]);
    newTable[foods.get(orders[i][2])] = (
      parseInt(newTable[foods.get(orders[i][2])]) + 1
    ).toString();
    table.set(orders[i][1], newTable);
  }
  result.push(...table.values());
  return result.sort((a, b) => {
    if (a[0] == 'Table') return -1;
    return a[0] - b[0];
  });
};
displayTable([
  ['David', '3', 'Ceviche'],
  ['Corina', '10', 'Beef Burrito'],
  ['David', '3', 'Fried Chicken'],
  ['Carla', '5', 'Water'],
  ['Carla', '5', 'Ceviche'],
  ['Rous', '3', 'Ceviche'],
]);
