const number = 7;
let r = 1; // row 
let c; // column

// Upper part of the diamond
do {
    c = 1;

    // Printing spaces
    do {
        process.stdout.write(" ");
    }
     while (++c <= number - r + 1);

    c = 1;

    // Printing stars
    do {
        process.stdout.write("*");
    }
    
    while (++c <= r * 2 - 1);

    console.log();
} while (++r <= number);

r = number - 1;

// Lower part of the diamond
do {
    c = 1;
    let n = 1;

    do {
        process.stdout.write(" ");
    } while (++n <= number - r + 1);

    c = 1;

    do {
        process.stdout.write("*");
    } while (++c <= r * 2 - 1);

    console.log();
} while (--r > 0);
