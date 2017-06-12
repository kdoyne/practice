// check permutation - Given two strings, write a method to decide if one is a permutation of the other.

'use strict';
// Questions:
// do digits count?
// special characters?
// spaces?
// upper case vs lower case

function checkPermutation(inputA, inputB) {
	let err;

	if (typeof inputA === 'string' && typeof inputB === 'string') { // says given 2 strings, might be redundant
		if (inputA.length === inputB.length) {
			let arrA = inputA.split('');
			let arrB = inputB.split('');

			for (let i = 0; i < arrA.length; i++) {
				return arrA.sort()[i] === arrB.sort()[i];
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
}

console.log(checkPermutation('abc', 'bca')); //true
console.log(checkPermutation('asd', 'afdsfad')); //false
console.log(checkPermutation('   we', 'we')); //false
console.log(checkPermutation('123', '321')); //true
console.log(checkPermutation('abc', 'abc')); //true