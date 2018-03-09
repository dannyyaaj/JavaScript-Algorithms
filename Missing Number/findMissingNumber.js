function missingNumber(arr) {
  const numberArr = arr.sort((num1, num2) => {
    return num1 - num2;
  });

  for (let i = 0; i < numberArr.length; i++) {
    if (i !== numberArr[i]) {
      return i;
    }
  }

  return numberArr;
  console.log(numberArr);



}

console.log(missingNumber([0, 1, 2, 3, 4, 5, 7]));
console.log(missingNumber([0, 1, 2, 3, 4, 6, 7]));
console.log(missingNumber([0, 2, 3, 4, 5]));
