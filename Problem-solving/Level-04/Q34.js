// Q34. Count Consonants
let str4 = "hello";
let vowelsSet = "aeiouAEIOU";
let count4 = 0;
for (let i = 0; i < str4.length; i++) {
	if (!vowelsSet.includes(str4[i]) && /[a-zA-Z]/.test(str4[i])) {
		count4++;
	}
}
console.log(count4);

