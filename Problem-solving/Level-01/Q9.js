// Q9 - Check Leap Year

let year = 400;

if (year % 100 == 0) {
    if (year % 400 == 0) {
        console.log(year, "Leap year");
    } else {
        console.log(year, "is not Leap year");
    }
} else if (year % 4 == 0) {
    console.log(year, "is Leap year");
} else {
    console.log(year, "is not Leap year");
}
