/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let hashmap = {};
  let rs = [];
	for (let cpdomain of cpdomains) {
		let [count, domain] = cpdomain.split(' ');
		countDomain(+count, domain, hashmap);
  }
  for(let key in hashmap) {
    rs.push(`${hashmap[key]} ${key}`)
  }
  return rs;
};

var countDomain = function (count, domain, hashmap) {
  let sub = domain.split(".");
  for(let i = 0; i < sub.length; i++) {
    let subdomain = sub.slice(i).join(".");
    hashmap[subdomain] = hashmap[subdomain] + count || count;
  }
};

subdomainVisits(["9001 discuss.leetcode.com"])