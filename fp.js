function mapForEach(arr, fn) {
  newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]))
  }
  return newArr;
}

arr = [1, 2, 3, 4];
someArray = mapForEach(arr, function(val) {
  return val > 2  ;
})

console.log(someArray);
