// Q35. To Uppercase (manual method)
let str5 = "hello";
let res = "";
for (let i = 0; i < str5.length; i++) {
	let value = str5.charCodeAt(i);
	if (value >= 97 && value <= 122) {
		res = res + String.fromCharCode(value - 32);
	} else {
		res = res + str5[i];
	}
}
console.log(res);



// Built-in method variant
let str5_builtin = "hello world";
console.log(str5_builtin.toUpperCase());














