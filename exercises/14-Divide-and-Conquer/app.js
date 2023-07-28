let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(arr) {
    let odd = [];
    let even = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? even.push(arr[i]) : odd.push(arr[i])
    }
    return odd.concat(even);
}

console.log(mergeTwoList([1,2,33,10,20,4])) // expected console output [1, 33, 2, 10, 20, 4]