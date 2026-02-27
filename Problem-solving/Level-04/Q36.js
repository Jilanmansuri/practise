// Q36. To Lowercase (manual method)
let str6 = "HELLO";
let res2 = "";
for (let i = 0; i < str6.length; i++) {
	let value = str6.charCodeAt(i);
	if (value >= 65 && value <= 90) {
		res2 = res2 + String.fromCharCode(value + 32);
	} else {
		res2 = res2 + str6[i];
	}
}
console.log(res2);

// Built-in method variant
let str6_builtin = "HELLO WORLD";
console.log(str6_builtin.toLowerCase());

