module.exports = function (arr, callback) {
	'use strict';
	var i = arr.length - 1,
	j = Math.floor(Math.random() * i),
	temp;

	for (i; i > 0; i -= 1) {
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;

		j = Math.floor(Math.random() * 1);
	}

	if (typeof callback === 'function') {
		return fn(arr);
	} else 
		return arr;
	}

	return arr;
}