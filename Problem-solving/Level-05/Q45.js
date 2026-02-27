// Q45. Count Digits in a String - multiple methods

// Method 1: using charCodeAt
function countdigit(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) <= 57 && str.charCodeAt(i) >= 48){
			count++;
		}
	}
	return count;
}


// Method 2: comparing characters
function countdigit2(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= '0' && str[i] <= '9' && str[i] != ' ') count++;
	}
	return count;
}

console.log(countdigit('hello2345678'));
console.log(countdigit2('hello 2345678'));