// Q-17 multiplication table of number
function multitable(n) {
	let str3 = "";
	for (let i = 1; i <= 10; i++) {
		let multi = n * i;
		str3 += multi + " ";
	}
	console.log(str3);
}
multitable(8);