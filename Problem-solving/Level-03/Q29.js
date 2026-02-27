// Q-29  GCD of Two Numbers (Simple Loop)

function GCD(a, b) {
	let gcdValue = 1;
	for (let i = 1; i <= Math.min(a, b); i++) {
		if (a % i === 0 && b % i === 0) {
			gcdValue = i;
		}
	}
	console.log(gcdValue);
}
GCD(12, 18);






// Alternative variant: determine limit first and return value
function GCD_withLimit(a, b) {
	let gcdValue = 1;
	let limit = Math.min(a, b);
	for (let i = 1; i <= limit; i++) {
		if (a % i === 0 && b % i === 0) {
			gcdValue = i;
		}
	}
	return gcdValue;
}

console.log(GCD_withLimit(12, 18));

