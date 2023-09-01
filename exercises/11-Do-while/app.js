let i = 20;

do {
    // Magic goes here;
    if (i>0) {
        if (i % 5 === 0) {
            console.log(i + "!");
            i--;}
        else {
            console.log(i);
            i--;
        };
    }
    else {
        console.log("LIFTOFF")
        i--;
    }

} while (i >= 0);