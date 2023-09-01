let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let typeArr = [];

for (let i=0; i < mix.length; i++) {
    typeArr.push(typeof(mix[i]))
}

console.log(typeArr);