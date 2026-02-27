// Q41. Count Words in a Sentence - multiple methods

// Method 1: using trim + regex split
function countWords1(sentence) {
	return sentence.trim().split(/\s+/).filter(s => s.length > 0).length;
}

// Method 2: split and loop (handles extra spaces)
function countWords2(string) {
	let count = 0;
	let arr = string.split(" ");
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== "") {
			count++;
		}
	}
	return count;
}

// Method 3: manual scan (counts transitions from space to non-space)
function countWords3(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (i == 0 && str[i] != " ") {
			count++;
		} else if (str[i] !== " " && str[i - 1] == " ") {
			count++;
		}
	}
	return count;
}

const sample = "   This  is  the   problem     solving   lecture   ";
console.log(countWords1(sample));
console.log(countWords2(sample));
console.log(countWords3(sample));

