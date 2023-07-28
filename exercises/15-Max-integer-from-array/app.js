let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

function findMax(arr) {
    // let maxInt = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > maxInt) {
    //         maxInt = arr[i];
    //     }
    // }
    // return maxInt;
    return Math.max(...arr);
}

console.log(findMax(myArray));