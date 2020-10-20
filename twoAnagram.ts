function isAnagrams(str1: string, str2: string) {
	if (str1.length !== str2.length) return false;
	let charMap = {};
	for (let c of str1) {
		charMap[c] = charMap[c] + 1 || 1;
  }
  console.log(charMap)
	for (let c of str2) {
		if (!charMap[c]) return false;
		charMap[c]--;
  }
  console.log(charMap)
	return true;
}
console.log(isAnagrams("abbba","ababb"))