// Q7 - Divisible by 5

let num7 = 30;
if (num7 % 5 == 0) {
    console.log("divisible by 5");
} else {
    console.log("not divisible by 5");
}

// method 2
function div5(n) {
    console.log(n % 5 == 0 ? "Number is divisible by 5" : "number is not divisible by 5");
}

div5(20);
div5(18);
