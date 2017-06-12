'use strict';

// matt - about 1-1: I thought about doing the array.sort and then comparing each letter to the one after it, but I wasn't sure if converting the string to an array counts as an extra data structure

function slugify(str) {
	return str.split(' ').join('%20');
}

console.log(slugify('hey hey hey')); // 'hey%20hey%20hey'