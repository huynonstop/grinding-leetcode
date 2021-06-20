//0 1 1 2 3 5 8
let memo = {};
function fibonacciRecursion(n) {
	if (n < 2) return n;
	if (memo[n]) return memo[n];
	memo[n] = fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
	return memo[n];
}

console.log(fibonacciRecursion(4));
console.log(fibonacciRecursion(6));
console.log(fibonacciRecursion(3));

function fibonacci(n) {
	if (n < 2) return n;
	let memo = [0, 1];
	for (let i = 2; i < n; i++) {
		let next = memo[0] + memo[1];
		memo[0] = memo[1];
		memo[1] = next;
	}
	return memo[0] + memo[1];
}

console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(3));

function fibonacci(n) {
	if (n < 2) return n;
	let memo = [0, 1];
	for (let i = 2; i <= n; i++) {
		let next = memo[i-1] + memo[i-2];
		memo.push(next);
	}
	return memo[n];
}