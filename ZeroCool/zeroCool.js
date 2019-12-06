const ZERO = "Zero",
    COOL = "Cool";

function printTypeOf(i) {
    let isMultThree = i % 3 == 0;
    let isMultFive = i % 5 == 0;
    if (isMultFive && isMultThree) {
        return ZERO+COOL;
    }
    return isMultThree ? ZERO : isMultFive ? COOL : i;
}

function myFunction(){
    for (var i = 1; i <= 100; i++) {
        console.log(printTypeOf(i));
    }
}
myFunction();