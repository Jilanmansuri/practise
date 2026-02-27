// Q-22 sum of digits

// Method 1: for-loop
function sumdigits(n) {
	let sum = 0;
	for (let i = Math.abs(n); i > 0; i = Math.floor(i / 10)) {
		sum += i % 10;
	}
	return sum;
}

// Method 2: while-loop
function digitssum(n) {
	let sum = 0;
	n = Math.abs(n);
	while (n > 0) {
		sum += n % 10;
		n = Math.floor(n / 10);
	}
	return sum;
}

console.log(sumdigits(1234));
console.log(digitssum(200));
