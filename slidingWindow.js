
function findMaxSum (arr, num) {
    let max = 0;
    for (let i = 0; i < num; i++) {
        max += arr[i]
    }
    let temp = max;
    let i = 0;
    for (let k = num - 1; k <= arr.length - num + 1; k++) {
        temp = temp + arr[k + 1] - arr[i];
        if (temp > max) {
            max = temp;
        }
        i++;
    }
    return max;
}

let a = [1,2,3,3,222,332,343,234,65,453,567,43,234, 231, 12, 54, 76, 45, 87];
let sum = findMaxSum(a, 5);
console.log(sum);