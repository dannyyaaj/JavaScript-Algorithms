function factorializeNum(num) {
  let total = 1;

  for (let i = 2; i <= num; i++) {
    total *= i;
  }

  return total;
}

console.log(factorializeNum(0));
console.log(factorializeNum(4));
console.log(factorializeNum(5));
console.log(factorializeNum(10));