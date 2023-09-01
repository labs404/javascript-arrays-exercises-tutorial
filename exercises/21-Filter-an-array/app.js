let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter((firstName) => {
    return (firstName[0] == "R")
})

console.log(resultingNames);