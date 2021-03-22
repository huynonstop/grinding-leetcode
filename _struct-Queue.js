// https://stackoverflow.com/questions/44031591/performance-of-array-push-vs-array-unshift
class Queue {
	constructor() {
		this.queue = {};
		this.tail = 0;
		this.head = 0;
	}
	enqueue(value) {
		this.queue[this.tail] = value;
		this.tail++;
	}
	dequeue() {
		let size = this.tail - this.head;
		if (size <= 0) return null;
		let temp = this.queue[this.head];
		delete this.queue[this.head];
		this.head++;
		if (this.head === this.tail) {
			this.head = 0;
			this.tail = 0;
		}
		return temp;
	}
	peek() {
		return this.queue[this.tail - 1];
	}
	size() {
		return this.tail - this.head;
	}
}
