// Q-15 Sum 1 to N

function sumof(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	console.log(sum);
}
sumof(5);