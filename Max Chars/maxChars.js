function maxChars(str) {
  let chars = {};
  let max = 0
  let maxChar = '';

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChars("How are you today?"));
console.log(maxChars("Hello World"));
console.log(maxChars("Danny Yang"));