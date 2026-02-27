// // Q-25 check a Number is palindrome

// // Method 1: manual reverse and compare
// function palindrome(n) {
// 	let rev = 0;
// 	let n1 = n;
// 	let sign = n < 0 ? -1 : 1;
// 	n = Math.abs(n);
// 	while (n > 0) {
// 		let digit = n % 10;
// 		rev = rev * 10 + digit;
// 		n = Math.floor(n / 10);
// 	}
// 	return sign * rev === n1;
// }

// // Method 2: string method
// function palindromeString(n) {
// 	const s = String(n);
// 	const rev = s.split("").reverse().join("");
// 	return s === rev;
// }

// console.log(palindrome(121));
// console.log(palindromeString(121));











function palindrome(n) {
	let rev = 0;
	let n1 = n;
	if (n < 0) {
		return false;
	}
	n = Math.abs(n);
	while (n > 0) {
		let digit = n % 10;
		rev = rev * 10 + digit;
		n = Math.floor(n / 10);
	}
	return rev === n1;

}
console.log(palindrome(121));
console.log(palindrome(-121));
console.log(palindrome(122));