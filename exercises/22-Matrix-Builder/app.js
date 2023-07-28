// Code goes here
function matrixBuilder(num) {
    let outterArray = [];

    for (let i = 1; i <= num; i++) {
        outterArray.push(generateArray(num));
    }
    console.log(outterArray);
}

function generateArray(num) {
    innerArray = [];
    for (let j = 1; j <= num; j++) {
        innerArray.push(Math.floor(Math.random()*2));
    }
    return innerArray;
}


// do not change anything from this line down
console.log(matrixBuilder(5))