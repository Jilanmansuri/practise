// Q-16 product 1 to N

function product(n) {
	let multi = 1;
	for (let i = 1; i <= n; i++) {
		multi = multi*i;
	}
	console.log(multi);
}
product(5);

