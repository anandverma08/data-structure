let a = [1, 2, [3, 4, 5, [3, 4, [5, 6]]]]

let res = [];

let i = 0;
while (i < a.length) {
  if (Array.isArray(a[i])) {
    a.splice(i, 1, ...a[i])
  }
  i++;
}

console.log(a);