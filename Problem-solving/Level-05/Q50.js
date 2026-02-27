// Q50. Toggle Case of Each Character - multiple methods

// Method 1: character comparison (original style)
function toggleCase1(str) {
	let output = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= "a" && str[i] <= "z") {
			output += str[i].toUpperCase();
		} else if (str[i] >= "A" && str[i] <= "Z") {
			output += str[i].toLowerCase();
		} else {
			output += str[i];
		}
	}
	return output;
}

// Method 2: using charCodeAt and String.fromCharCode
function toggleCase2(str) {
	let res = "";
	for (let i = 0; i < str.length; i++) {
		let ascii = str.charCodeAt(i);
		if (ascii >= 65 && ascii <= 90) {
			ascii = ascii + 32;
		} else if (ascii >= 97 && ascii <= 122) {
			ascii = ascii - 32;
		}
		res = res + String.fromCharCode(ascii);
	}
	return res;
}

// Method 3: using toLowerCase check
function toggleCase3(str) {
	let res = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() == str[i]) {
			res = res + str[i].toUpperCase();
		} else {
			res = res + str[i].toLowerCase();
		}
	}
	return res;
}

console.log(toggleCase1('heLlo'));
console.log(toggleCase2('HEllo'));
console.log(toggleCase3('HEllo'));

