function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      //  newArr.push(max);
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
      min = arr[i];
      // newArr.push(min);
    }
  }
  return min;
}

function seqLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr.length;
  }
}

function avgValue(arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg = avg + arr[i];
  }
  return avg / arr.length;
}

function minMaxLengthAverage(arr) {
  let newArr = [];
  let max = findMax(arr);
  let min = findMin(arr);
  let seq = seqLength(arr);
  let avg = avgValue(arr);
  newArr.push(min, max, seq, avg);
  return newArr;
}

console.log(minMaxLengthAverage([6, 9, 15, -2, 92, 11]));
console.log(minMaxLengthAverage([1, 2, 3, 4, 5, 6, 7, 100]));
