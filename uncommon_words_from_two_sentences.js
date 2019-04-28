// 884. Uncommon Words from Two Sentences
// We are given two sentences A and B.  (A sentence is a string of space separated words.  
// Each word consists only of lowercase letters.) A word is uncommon if it appears exactly once 
// in one of the sentences, and does not appear in the other sentence.
// Return a list of all uncommon words. You may return the list in any order.
// Example 1:
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]

var uncommonFromSentences = function(A, B) {
  let uniqueWords = [];
  A.split(' ').forEach(function(element) {
    if ((checkIfOnlyWord(element, A))&& (checkIfDoesntAppear(element, B))) {
      uniqueWords.push(element)
    }
  })
  B.split(' ').forEach(function(element) {
    if ((checkIfOnlyWord(element, B))&& (checkIfDoesntAppear(element, A))) {
      uniqueWords.push(element)
    }
  })
  return uniqueWords;
}

function checkIfOnlyWord(word, sentence) {
  let count = 0;
  sentence.split(' ').forEach(element => {
    if (element === word) count++
  });
  return count === 1
}

function checkIfDoesntAppear(word, sentence){
  return sentence.split(' ').every(element => element!==word)
}

// uncommonFromSentences("apple apple banana banana carrot", "sour apple");