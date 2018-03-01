// Solution One
function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
}

console.log(reverseString('javascript'));
console.log(reverseString('dog'));

// Solution Two

function reverseString2(string) {
  let newString = '';

  newString = string.split('').reverse().join('');
  return newString;
}

console.log(reverseString2('javascript'));
console.log(reverseString2('dog'));