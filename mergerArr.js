let a = [1, 2, 4, 4, 5, 6, 6]
let b = [2, 3, 3, 5, 7, 8]

let c = []
let i = 0,
  j = 0;
while (i < a.length && j < b.length) {
  if (a[i] == b[j]) {
    c.push(a[i]);
    c.push(b[j]);
    i++;
    j++;
  } else if (a[i] < b[j]) {
    c.push(a[i]);
    i++
  } else if (a[i] > b[j]) {
    c.push(b[j]);
    j++
  } 
}

while(i<a.length){
c.push(a[i]);
i++
}

while(j<b.length){
c.push(b[j]);
j++
}


console.log(c);
