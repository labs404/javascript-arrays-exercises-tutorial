let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
let num = 10

for (let i = 0; i < num ; i++) {
    arr.push(Math.floor(Math.random()*1000))
}

console.log(arr)