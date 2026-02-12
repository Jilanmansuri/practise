// Q-13 Print Even number 1 to N
function printEven(n1) {
	let str3 = "";
	for (let i = 1; i <= n1; i++) {
		if (i % 2 == 0) {
			str3 += i + " ";
		}
	}
	console.log(str3);
}
printEven(20);