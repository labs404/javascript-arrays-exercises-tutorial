let arr = [45,67,87,23,5,32,60];

//Your code here.
let newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}

console.log(newArr);