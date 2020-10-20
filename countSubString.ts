function countSubString1(str: string, sub: string): number {
	let count = 0;
	const n = str.length;
	const m = sub.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; str[i + j] === sub[j] && j < m; j++) {
			if (j === m - 1) count++;
		}
	}
	console.log(count);
	return count;
}
countSubString1('dhimanamanmman', 'man');

function KMPSearch(str: string, pat: string) {
	const lps = suffixArray(pat);
	const n = str.length;
	const m = pat.length;
	let i = 0;
	let j = 0;
	const res = [];
	while (i < n) {
		if (pat[j] === str[i]) {
			i++;
			j++;
		}
		if (j === m) {
			res.push(i - j);
			j = lps[j - 1];
		} else if (i < n && pat[j] !== str[i]) {
			if (j !== 0) {
				j = lps[j - 1];
			} else {
				i++;
			}
		}
	}
	console.log(res)
	return res;
}

function suffixArray(pat: string): number[] {
	// longest proper prefix (lps)
	const len = pat.length;
	const lps = new Array(len).fill(0);
	let lpsLength = 0;
	let i = 1;
	while (i < len) {
		if (pat[i] === pat[lpsLength]) {
			lpsLength++;
			lps[i] = lpsLength;
			i++;
		} else {
			if (lpsLength !== 0) {
				lpsLength = lps[lpsLength - 1];
			} else {
				lps[i] = 0;
				i++;
			}
		}
	}
	return lps;
}

KMPSearch('ABABDABACDABABCABAB', 'ABABCABAB');
