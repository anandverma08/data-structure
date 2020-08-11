var fs = require("fs");


fs.open('input.txt', 'a+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read one: " + data.toString());
    });
    let data = "This is appended";
    fs.appendFile('input.txt', 'data to append', function (err) {
        if (err) throw err;
        console.log('Saved!');
        fs.readFile('input.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read inside: " + data.toString());
        });
    });
   

});

