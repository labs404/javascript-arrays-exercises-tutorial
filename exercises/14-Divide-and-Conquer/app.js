let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(array) {

    // this is easy but bulky
    // let odd = array.filter((number) => {
    //     if(number % 2 != 0) {
    //         return number;
    //     }
    // });
    // let even = array.filter((number) => {
    //     if (number % 2 == 0) {
    //         return number;
    //     }
    // });

    let odd = [];
    let even = [];

    // this is similar to the solution
    for (let i=0; i < array.length; i++) {
        array[i] % 2 == 0 ? even.push(array[i]) : odd.push(array[i])
    }

    // this is more succinct
    // array.forEach((item) => {
    //     item % 2 == 0 ? even.push(item) : odd.push(item)
    // })


    return [...odd, ...even]
};

console.log(mergeTwoList([1,2,33,10,20,4]));