// 771. Jewels and stones.
// You're given strings J representing the types of stones that are jewels, 
// and S representing the stones you have.  Each character in S is a type of stone you have.  
// You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. 
// Letters are case sensitive, so "a" is considered a different type of stone from "A".


// function checkMyStones(J, S){
// 	let count = 0;
// 	S.split('').forEach(function(element) {
// 	if ((J.split('')).includes(element)) {
// 		count++;
// 	}
// 	})
// 	return count;
// }

function checkMyStones(J, S) {
	let result = S.split('').filter(letter => J.split('').includes(letter))
	return result.length;
}

// console.log(checkMyStones('aA', 'aAAbbbb'))