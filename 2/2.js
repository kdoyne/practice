// kth to last element

'use strict';

class Item {
	constructor(value) {
		this.value = value;
		this.next = null;
	}

	addItem(value) {
		const item = new Item(value);
		let current = this;
		while (current.next !== null) {
			current = current.next;
		}
		current.next = item;
		return this;
	}
}


const kthToLast =(k, list) => {
	let first = list;
	let second = list;
	let count = 1;

	while (first && first.next) {
		if (count === k) {
			second = second.next;
		} else {
			++count;
		}
		first = first.next;
	}

	if (count === k) {
		return second.value;
	}
}

const testList = new Item(1)
  .addItem(2)
  .addItem(3)
  .addItem(4)
  .addItem(5);

console.log(kthToLast(2, testList)); // O(n) where n is length of the list
console.log(kthToLast(4, testList))
