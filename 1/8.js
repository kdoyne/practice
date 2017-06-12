'use strict';

const zeroMatrix = (matrix) => {
	let row = {};
	let col = {};
	let newMatrix = [];

	for(var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				row[i] = 1;
				col[j] = 1;
			}
		}
	}

	for (var i = 0; i < matrix.length; i++) {
		newMatrix.push([]);
		for (var j = 0; j < matrix[i].length; j++) {
			if (row[i] || col[j]) ? newMatrix[i][j] = 0 : newMatrix[i][j] = matrix[i][j];
		}
	}

	return newMatrix;
}


const input = [
  [1, 2, 3, 4],
  [1, 2, 0, 4],
  [1, 2, 3, 4]
];


console.log(zeroMatrix(input));
// expected: 
// [
//    [1, 2, 0, 4],
//    [0, 0, 0, 0],
//    [1, 2, 0, 4]
//  ]
