function longestWord(str) {
  let newStr = str.replace(/[\W_]/g,' ').split(' ');
  let largest = '';
  
  newStr.forEach((word) => {
  largest = word.length > largest.length ? word : largest
  });

  return largest;
}

console.log(longestWord("Ready, steady, let's go!"));
console.log(longestWord("Hello, Goodbye"));
console.log(longestWord("Happy Birthday to you"));

