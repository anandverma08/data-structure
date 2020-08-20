
function merge(arr1,arr2){
    let data = []

    while(arr1.length && arr2.length){
        if(arr1[0]<arr2[0]) data.push(arr1.shift())
        else data.push(arr2.shift())
    }
    return data.concat(arr1.slice().concat(arr2.slice()))
}

function mergeSort(arr){

    if(arr.length<=1){
        return arr;
    }

    let mid =  Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    let sorted = merge(left,right);
    return sorted;
}

let arr = [1,3,2,5,3,65,45,34,76,54,65,33,44,23]
console.log(mergeSort(arr))