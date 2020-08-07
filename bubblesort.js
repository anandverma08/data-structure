function bubbleSort(arr) {
let noSwap = true, times =0
  for (let i = arr.length - 1; i >= 0; i--) {
    if(!noSwap) break;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwap = false;
      }      
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 5, 23, 34, 21, 43, 56, 44]))