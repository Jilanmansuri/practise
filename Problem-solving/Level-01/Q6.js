// Q6 - Grade calculator (multiple methods)

// Method: if-else
var m = 50;
if (m >= 90 && m <= 100) {
    console.log("Grade A");
} else if (m >= 80 && m <= 89) {
    console.log("Grade B");
} else if (m >= 70 && m <= 79) {
    console.log("Grade C");
} else if (m >= 60 && m <= 69) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// Method: switch(true)
let marks = 80;
switch (true) {
    case (marks >= 90 && marks <= 100):
        console.log("A");
        break;
    case (marks >= 80 && marks <= 89):
        console.log("B");
        break;
    case (marks >= 70 && marks <= 79):
        console.log("C");
        break;
    case (marks >= 60 && marks <= 69):
        console.log("D");
        break;
    case (marks >= 0 && marks <= 59):
        console.log("F");
        break;
    default:
        console.log("Invalid Marks");
}

// Method 2: using Math.floor(mark/10)
let mark = 75;
switch (Math.floor(mark / 10)) {
    case 10:
    case 9:
        console.log("A");
        break;
    case 8:
        console.log("B");
        break;
    case 7:
        console.log("C");
        break;
    case 6:
        console.log("D");
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("F");
        break;
    default:
        console.log("Invalid Marks");
}
