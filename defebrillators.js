/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = readline();
const LAT = readline();
let newLON = parseFloat(LON.replace(',', '.'))
let newLAT = parseFloat(LAT.replace(',', '.'))
newLON = newLON * (Math.PI / 180);
newLAT = newLAT * (Math.PI / 180);
let name = "";
let min;
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    let xC = parseFloat(DEFIB.split(';')[4].replace(',', '.'))
    let yC = parseFloat(DEFIB.split(';')[5].replace(',', '.'))

    xC = xC * (Math.PI / 180);
    yC = yC * (Math.PI / 180);

    let x = (xC - newLON) * Math.cos((newLAT + yC) / 2)
    let y = yC - newLAT;
    let d = Math.sqrt(x * x + y * y)
    if (i == 0) {
        min = d;
        name = DEFIB.split(';')[1]
    }

    if (d < min) {
        min = d;
        name = DEFIB.split(';')[1]
    }
}

console.log(name);
