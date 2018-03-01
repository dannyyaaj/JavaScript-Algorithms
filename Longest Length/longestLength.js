// Solution One
function longestLength(str) {
  let longestStr = 0;
  let strArray = str.split(' ');

  strArray.forEach((word) => {
    longestStr = longestStr < word.length ? word.length : longestStr;
  })

  return longestStr;
}

console.log(longestLength("Hello, my name is Danny Yang"));
console.log(longestLength("Hello, my name is Justine"));
console.log(longestLength("I am Legendary"));

// Solution Two
function longestLength2(str) {
  let longestStr = str.split(' ').sort((word1, word2) => {
    return word2.length - word1.length;
  })[0].length;

  return longestStr;
}

console.log(longestLength2("Hello, my name is Danny Yang"));
console.log(longestLength2("Hello, my name is Justine"));
console.log(longestLength2("I am Legendary"));