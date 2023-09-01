let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    // let newArray = []
    // //your code here
    // firstArray.forEach((i) => {
    //     newArray.push(i)
    // });
    // secondArray.forEach((i) => {
    //     newArray.push(i)
    // });
    let newArray = [...chunk_one, ...chunk_two];
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));