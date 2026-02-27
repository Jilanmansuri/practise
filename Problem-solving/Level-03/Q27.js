// Q-27 All Primes from 1 to N - multiple methods

// Method 1: sieve-like check using sqrt for each number
function printPrimes(N) {
	let str = "";
	for (let num = 2; num <= N; num++) {
		let isPrime = true;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			str += num + " ";
		}
	}
	return str.trim();
}

// Method 2: helper checkPrime and collect
function checkPrime(X) {
	let count = 0;
	for (let i = 1; i <= X; i++) {
		if (X % i == 0) {
			count++
		}
	}
	return count == 2;
}

function PrintPrime(n) {
	let res = [];
	for (let i = 0; i <= n; i++) {
		if (checkPrime(i)) {
			res.push(i)
		}
	}
	return res.join(" ");
}

console.log(printPrimes(20));
console.log(PrintPrime(20));

