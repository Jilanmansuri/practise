// Q-20 First N Multiples of 7

function multitable(n) {
	let a=7;
	let str3 = "";
	for (let i = 1; i <= n; i++) {
		let multi = a * i;
		str3 += multi + " ";
	}
	console.log(str3);
}
multitable(8);

