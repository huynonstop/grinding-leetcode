/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
	let month = {
		Jan: '01',
		Feb: '02',
		Mar: '03',
		Apr: '04',
		May: '05',
		Jun: '06',
		Jul: '07',
		Aug: '08',
		Sep: '09',
		Oct: '10',
		Nov: '11',
		Dec: '12',
	};
	let dateArray = date.split(' ');
	dateArray[1] = month[dateArray[1]];
	dateArray[0] = dateArray[0]
		.slice(0, dateArray[0].length - 2)
		.toString()
		.padStart(2, '0');
	return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
};

var reformatDate = function (date) {
	let monthHashMap = {
		Jan: '01',
		Feb: '02',
		Mar: '03',
		Apr: '04',
		May: '05',
		Jun: '06',
		Jul: '07',
		Aug: '08',
		Sep: '09',
		Oct: '10',
		Nov: '11',
		Dec: '12',
	};
	let n = date.length;
	let day =
		date.length === 12
			? '0' + date[0]
			: date[0] + date[1];
	let month = date[n - 8] + date[n - 7] + date[n - 6];
	let year = date[n - 4] + date[n - 3] + date[n - 2] + date[n - 1];
	return `${year}-${monthHashMap[month]}-${day}`;
};
reformatDate(
  "20th Oct 2052")