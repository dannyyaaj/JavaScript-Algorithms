function isPalindrome(str) {
  let newStr = str.toLowerCase().replace(/[\W_\d]/g, '');
  let reversedStr = newStr.split('').reverse().join('');

  return reversedStr === newStr;
}

console.log(isPalindrome('My age is 0,0 si ega ym.'));
console.log(isPalindrome('-_eye'));
console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('League of Legends'));
console.log(isPalindrome('Hello World'));
