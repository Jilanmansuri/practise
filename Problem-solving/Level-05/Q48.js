// Q48. Remove All Vowels from a String - multiple methods

// Method 1: regex replace
function removevowels(str) {
	return str.replaceAll(/[aeiouAEIOU]/gi, "");
}

// Method 2: using includes in loop
function removevowels2(str) {
	let output = "";
	for (let i = 0; i < str.length; i++) {
		if (!"aeiouAEIOU".includes(str[i])) {
			output += str[i];
		}
	}
	return output;
}

// Method 3: using array of vowels
function removevowels3(str) {
	let output = "";
	let str1 = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	for (let i = 0; i < str.length; i++) {
		if (!str1.includes(str[i])) {
			output += str[i];
		}
	}
	return output;
}

// Method 4: using lookup object
function removevowels4(str) {
	let output = "";
	let vowels = {
		a: true, e: true, i: true, o: true, u: true,
		A: true, E: true, I: true, O: true, U: true
	};

	for (let i = 0; i < str.length; i++) {
		if (!vowels[str[i]]) {
			output += str[i];
		}
	}
	return output;
}

// Additional example: object-based filter on a sentence
function removeVowelsWithObj(sentence) {
	let res = "";
	let obj = {
		a: 1, A: 1, e: 1, E: 1, I: 1, i: 1, O: 1, o: 1, u: 1, U: 1
	};
	for (let i = 0; i < sentence.length; i++) {
		if (obj[sentence[i]] == undefined) res += sentence[i];
	}
	return res;
}

console.log(removevowels('Hello2345678'));
console.log(removevowels2('Hello'));
console.log(removevowels3('Hello2'));
console.log(removevowels4('Hello2'));
console.log(removeVowelsWithObj('This is the problem solving class'));

