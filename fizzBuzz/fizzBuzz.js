// First Solution
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  else if (num >= 3 && num % 3 === 0) {
    return 'fizz';
  }
  else if (num >= 5 && num % 5 === 0) {
    return 'buzz';
  }

  return '';
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(8));


// Second Solution
function fizzBuzz2(num) {
  let word = '';
  if (num >= 3 && num % 3 === 0) {
    word = word.concat('fizz');
  }

  if (num >= 3 && num % 5 === 0) {
    word = word.concat('buzz');
  }

  return word;
}
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(8));