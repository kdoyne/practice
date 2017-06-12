'use strict';

// do spaces count as characters?

function check(string) {
	let chars = {};
	if (string.length > 1) {
		for (let i = 0; i < string.length; i++) {
			if (chars[string[i]]) {
				delete chars[string[i]];
			} else {
				chars[string[i]] = 1;
			}
		}
		return !(Object.keys(chars).length >= 2);
	}
}

console.log(check('ada')); //true
console.log(check('fdsafew')); //false
console.log(check('rew rew')); // true