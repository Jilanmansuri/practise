// Q3 - Find maximum in 3 numbers
function max3(b1, b2, b3) {
    if (b1 > b2 && b1 > b3) {
        console.log("b1 is Maximum number");
    } else if (b2 > b3) {
        console.log("b2 is Maximum");
    } else {
        console.log("b3 is maximum");
    }
}
max3(10, 40, 30);