function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  return max;
}
function findLargestNums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(findMax(arr[i]));
  }
  return newArr;
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

console.log(findMax([4, 2, 7, 1]));
