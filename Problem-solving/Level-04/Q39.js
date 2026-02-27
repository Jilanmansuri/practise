// Q39. Count Occurrences of 'a' or 'A'
let str9 = "banana";
let count9 = 0;
for (let i = 0; i < str9.length; i++) {
	if (str9[i] == 'a' || str9[i] == 'A') {
		count9++;
	}
}
console.log(count9);

// Alternative: use charCodeAt to check ASCII codes for 'a' and 'A'
let str9b = "AnAnA";
let count9b = 0;
for (let i = 0; i < str9b.length; i++) {
	let code = str9b.charCodeAt(i);
	if (code === 97 || code === 65) {
		count9b++;
	}
}
console.log(count9b);

