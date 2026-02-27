// Q47. Count Lowercase Letters - multiple methods

// Method 1: using charCodeAt
function countlower1(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (code >= 97 && code <= 122) count++;
	}
	return count;
}

// Method 2: using character comparison
function countlower2(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= 'a' && str[i] <= 'z') count++;
	}
	return count;
}

// Note: original file contained a buggy variant that used assignment inside the if.
// That variant is intentionally omitted or can be shown commented to avoid unexpected behavior.

console.log(countlower1('Hello2345678'));
console.log(countlower2('Hello2345678'));

