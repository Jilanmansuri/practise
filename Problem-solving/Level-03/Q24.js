// Q-24 reverse a Number

// Method 1: manual while-loop
function reverseNumber(n) {
	let rev = 0;
	let sign = n < 0 ? -1 : 1;
	n = Math.abs(n);
	while (n > 0) {
		let digit = n % 10;
		rev = rev * 10 + digit;
		n = Math.floor(n / 10);
	}
	return sign * rev;
}


// Method 2: using string built-ins
function reverseNumberBuiltin(n) {
	let sign = n < 0 ? -1 : 1;
	n = Math.abs(n);
	return sign * Number(String(n).split("").reverse().join(""));
}

console.log(reverseNumber(1234));
console.log(reverseNumberBuiltin(-1234));