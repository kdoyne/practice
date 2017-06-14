// write code to remove duplicates from an unsorted linked list.

// linked list - has value and reference to next item in list.

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

const removeDups = (list) => {
	let vals = {};
	let item = list;

	while (item && item.next) {
		if (!vals[item.next.value]) {
			vals[item.next.value] = 1;
		} else {
			item.next = item.next.next;
		}
		item = item.next;
	}
	return list;
}

const removeDupsNoBuffer = (list) => {
	let item = list;
// need to flip through list once for each thing in list - will end up being O(n^2)
	while (item && item.next) {
		
	}
	return list;
}


const testList = new Item(1)
  .addItem(2)
  .addItem(3)
  .addItem(3)
  .addItem(4)
  .addItem(5);

console.log(JSON.stringify(removeDups(testList))); // O(n) where n is length of the list


