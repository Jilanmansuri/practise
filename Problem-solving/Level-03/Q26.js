// Q-26 prime number - multiple methods

// Method 1: simple loop up to sqrt(n)
function isPrime(n) {
	if (n <= 1) 
	return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) 
		return false;
	}
	return true;
}

// Method 2: count divisors (easy method)
function checkprime(n) {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i == 0) 
		count++;
	}
	return count == 2;
}

console.log(isPrime(5));
console.log(checkprime(7));

