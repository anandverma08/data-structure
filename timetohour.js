let time = "09:00PM";

let hours = 0
let minutes = 0
if (time.substring(time.length - 2) == "PM") {
  hours = +time.substring(0, 2) + 12;
} else {
  hours = time.substring(0,2);
}
minutes = time.split(':')[1].substring(0,2);

time = hours +minutes+ " hours";
console.log(time)
