// 728. Self Dividing Numbers
// A self-dividing number is a number that is divisible by 
// every digit it contains.
// For example, 128 is a self-dividing number 
// because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every 
// possible self dividing number, including the bounds if possible.

var selfDividingNumbers = function(left, right) {
	let i = 1;
	let result = []
	if (right <= 9) {
		while( i <= right) {
			console.log(i);
			i++;
		}
	} else {
	for (let j = left; j <=right; j++){
		let numToString = j.toString().split('');
		if (!(numToString.includes('0'))) {
			if (numToString.every(element => j % Number(element)===0)) {
				result.push(j);
			} 
		}
	}
	return result;
	}
};
// console.log(selfDividingNumbers(1, 22));