let inputs = []  //someArray

let min;
if (inputs.length == 1 && inputs[0] == 0) {
    min = 0;
}
else {
    min = inputs[0];
    inputs.forEach(i => {
        if (Math.abs(i - 0) < Math.abs(min - 0)) {
            min = i;
        }
        if (Math.abs(i - 0) == Math.abs(min - 0)) {
            if (i > 0) {
                min = i;
            }
        }
    })
}


console.log(min)