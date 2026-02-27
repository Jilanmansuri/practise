// Q46. Count Uppercase Letters - methods

// Method 1: using charCodeAt
function countUppercase1(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (code >= 65 && code <= 90) count++;
	}
	return count;
}

// Method 2: using character comparison
function countUppercase2(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= 'A' && str[i] <= 'Z') count++;
	}
	return count;
}

console.log(countUppercase1('Hello2345678'));
console.log(countUppercase2('Hello2345678'));

