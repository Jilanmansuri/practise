// Q43. Check if String Contains a Character - multiple methods

// Method 1: using includes
function checkChar1(str, ch) {
	return str.includes(ch);
}

// Method 2: loop and return on first match
function checkChar2(string, char) {
	for (let i = 0; i < string.length; i++) {
		if (string[i] === char) {
			return true; // character is present
		}
	}
	return false;
}

// Method 3: count occurrences
function checkChar3(str, ch) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (ch == str[i]) {
			count++;
		}
	}
	return count > 0;
}

console.log(checkChar1('hello', 'e'));
console.log(checkChar2('hello', 'e'));
console.log(checkChar3('hello', 'e'));

