let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
function wikiWoko(number) {
    return number == 1 ? "wiki" : "woko"
}

console.log(theBools.map(wikiWoko))