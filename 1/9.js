'use strict';

const isSubstring = (strA, strB) => {
	return 	strA.indexOf(strB) > -1;
}

const isRotation = (strA, strB) => {
	return isSubstring(strA + strA, strB);
}

console.log(isRotation('waterbottle', 'lewaterbott')); // true
console.log(isRotation('rekwrh', 'hreiuw')); // false