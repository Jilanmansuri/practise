// Q42. Replace All 'a' with 'e' - multiple methods

// Method 1: replaceAll (modern)
function replaceAwithE1(str) {
	return str.replaceAll('a', 'e');
}


// Method 2: using loop
function replaceAwithE2(str1) {
	let str2 = "";
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] === 'a') {
			str2 += 'e';
		} else {
			str2 += str1[i];
		}
	}
	return str2;
}

console.log(replaceAwithE1('hallo'));
console.log(replaceAwithE2('hallo'));

