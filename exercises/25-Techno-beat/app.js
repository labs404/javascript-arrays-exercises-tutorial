// Add your code here
function lyricsGenerator(array) {
    let count = 0;
    let string = "";
    for (let i=0; i < array.length; i++) {
        if (array[i] == 0) {
            count = 0;
            string += "Boom ";
        }
        if (array[i] == 1) {
            count += 1;
            if (count == 3 ) {
                string += "Drop the base !!!Break the base!!! "
            }
            else {string += "Drop the base "}
        }
    }
    return string;
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))