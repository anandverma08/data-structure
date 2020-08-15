

const fs = require('fs');
const zlib = require('zlib');

//Code to compress a text file

let rS = fs.createReadStream('input.txt');
let wS = fs.createWriteStream('input.txt.gz')
rS.pipe(zlib.createGzip()).pipe(wS);


//code to unzip a zip file
 let newR = fs.createReadStream('input.txt.gz');
 let newS = fs.createWriteStream('abc.txt')
 newR.pipe(zlib.createUnzip()).pipe(newS);
