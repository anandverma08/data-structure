function len(n) {
  let l = 0;
  while (n > 1) {
    l++;
    n = n / 10;
  }
  return l;
}

console.log(len(1905437))