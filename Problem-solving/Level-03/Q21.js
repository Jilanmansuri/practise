// Q-21 count digit in number


let m = 12345;
let res = String(Math.abs(m)).split("").length;
console.log(res);


// Method 1: for-loop by dividing by 10
function countdigits(n) {
	let count = 0;
	for (let i = Math.abs(n); i > 0; i = Math.floor(i / 10)) {
		count++;
	}
	return count;
}

// Method 2: while-loop
function digitsWhile(n) {
	let count = 0;
	n = Math.abs(n);
	while (n > 0) {
		count++;
		n = Math.floor(n / 10);
	}
	return count;
}

console.log(countdigits(125434));
console.log(digitsWhile(-200));

