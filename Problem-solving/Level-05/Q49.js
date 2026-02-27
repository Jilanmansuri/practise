// Q49. Remove All Digits from a String - multiple methods

// Method 1: loop + charCodeAt
function removedigit(str) {
	let output = "";
	for (let i = 0; i < str.length; i++) {
		if (!(str[i] >= "0" && str[i] <= "9")) {
			output += str[i];
		}
	}
	return output;
}

// Method 2: object lookup to filter digits from a sentence
function removeDigitsWithObj(str2) {
	let res2 = "";
	let obj2 = { 0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1 };
	for (let i = 0; i < str2.length; i++) {
		if (obj2[str2[i]] == undefined) res2 += str2[i];
	}
	return res2;
}

console.log(removedigit('hello345678'));
console.log(removeDigitsWithObj('javascript ES6 module 2010'));

