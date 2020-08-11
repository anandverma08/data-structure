function binarySearch(arr, val) {
  let found = isFound(arr, 0, arr.length - 1, val);
  return found;
}

function isFound(arr, start, end, val) {
  let mid = Math.floor((start + end) / 2);
  if (val == arr[mid]) {
    return true;
  }
  if (start > end) {
    return false;
  }
  if (val < arr[mid]) {
    return isFound(arr, 0, mid - 1, val)
  } else {
    return isFound(arr, mid + 1, arr.length - 1, val)
  }
  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 923, 45, 67, 89, 91, 95, 98], 95));
