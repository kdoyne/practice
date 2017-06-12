// Is unique - implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

'use strict';
// Questions:
// do digits count?
// special characters?
// spaces?
// upper case vs lower case

function isUnique(input) {
	let letters = {};

	if (typeof input === "string") {
		for (let i = 0; i < input.length; i++) {
			letters[input[i]] = 1;
		}
		return Object.keys(letters).length === input.length;
	} else {
		return false;
		// should this return an error message?
	}
}

console.log(isUnique('asdfghjkl')); // true
console.log(isUnique('asdasdffghjkl')); // false
console.log(isUnique('2asd3fg4hj1kl')); // true
console.log(isUnique(1234)); // false


function isUniqueSpace(input) {
	if (typeof input === "string") {
		for (let i = 0; i < input.length; i++) {
			for (let j = i + 1; j < input.length; j++) {
				if (input[i] === input[j]) {
					return false;
				}
			}
		}
		return true;
	} else {
		return false;
		// should this return an error message?
	}
}

console.log(isUniqueSpace('asdfghjkl')); // true
console.log(isUniqueSpace('asdasdffghjkl')); // false
console.log(isUniqueSpace('2asd3fg4hj1kl')); // true
console.log(isUniqueSpace(1234)); // false
