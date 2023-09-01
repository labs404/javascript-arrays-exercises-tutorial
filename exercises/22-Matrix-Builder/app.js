// Code goes here
function matrixBuilder(int) {
    containerArr = []
    for (let i = 0; i < int; i++) {
        let column = [];
        for (let i = 0; i < int; i++ ) {
            column.push(Math.floor(Math.random()*2))
        }
        containerArr.push(column);
    }
    return containerArr;
}

// do not change anything from this line down
console.log(matrixBuilder(5))