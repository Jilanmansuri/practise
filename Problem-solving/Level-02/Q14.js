// Q-14 Print Odd number 1 to N

function odd(n) {
	let str3 = "";
	for (let i = 1; i <= n; i++) {
		if (i % 2 == 1) {
			str3 += i + " ";
		}
	}

	console.log(str3);
}
odd(20);

