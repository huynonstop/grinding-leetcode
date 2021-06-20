/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let hashmap = {};
  let rs = 0;
	for (let email of emails) {
    let [local, domain] = email.split('@');
    local = getLocalName(local);
    if(!hashmap[local+"@"+domain]) {
      rs++;
      hashmap[local+"@"+domain] = 1;
    }
  }
  return rs;
};

var getLocalName = function (local) {
	let rs = '';
	for (let i = 0; i < local.length; i++) {
    if(local[i] !== '.' && local[i] !== '+') {
      rs += local[i]
    }
    if(local[i] === '+') {
      break;
    }
  }
  return rs;
};
