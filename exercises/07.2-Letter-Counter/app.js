let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let i=0; i < par.length; i++) {
    let currentLetter = par[i].toLowerCase();
    if (currentLetter == " "){
        continue;
    }
    else if (counts[currentLetter] == undefined){
        counts[currentLetter] = 1;
    }
    else {
        counts[currentLetter] += 1;
    }
}

console.log(counts);