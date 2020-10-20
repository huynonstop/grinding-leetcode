/**
 * initialize your data structure here.
 */
var Node = function (value, min, next = null) {
	this.value = value;
	this.min = Math.min(value, min);
	this.next = next;
};

var MinStack = function () {
	this.head = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	if (this.head) this.head = new Node(x, this.head.min, this.head);
	else this.head = new Node(x, x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.head.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.head.min;
};

/*------------------------------------------------------------------------------------------*/
class MinStack {
	constructor() {
		this.stack = [];
		this.min = Infinity;
	}
	push(x) {
		if (this.stack.length === 0) {
			this.stack.push(0);
			this.min = x;
		} else {
			this.stack.push(x - min);
			if (x < min) this.min = x;
		}
	}
	pop() {
		if (this.stack.length > 0) {
			const top = this.stack.pop();
			if (top < 0) min = min - top;
		}
	}
	top() {
		const top = this.stack[this.stack.length - 1];
		if (top > 0) return top + this.min;
		return this.min;
	}
	getMin() {
		return this.min;
	}
}
/*------------------------------------------------------------------------------------------*/
class MinStack {
	constructor() {
		this.stack = [];
		this.min = Infinity;
	}
	push(x) {
		if (x <= this.min) {
			this.stack.push(this.min);
			this.min = x;
		}
		this.stack.push(x);
	}
	pop() {
		if (this.stack.pop() === this.min) {
			this.min = this.stack.pop();
		}
	}
	top() {
		return this.stack[this.stack.length - 1];
	}
	getMin() {
		return this.min;
	}
}
/*------------------------------------------------------------------------------------------*/
class MinStack1 {
	constructor() {
		this.stack = [];
	}
	push(x) {
		let min = this.getMin();

		if (min === null || (min > x)) {
			min = x;
		}
		this.stack.push([x, min]);
	}
	pop() {
		this.stack.pop();
	}
	top() {
		return this.stack.length
			? this.stack[this.stack.length - 1][0]
			: null;
	}
	getMin() {
		return this.stack.length
			? this.stack[this.stack.length - 1][1]
			: null;
	}
}

const stack = new MinStack1();
stack.push(0);
stack.push(1)
stack.push(0);
console.log(stack)
stack.getMin();
stack.pop();
stack.getMin();