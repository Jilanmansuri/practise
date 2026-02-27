// Q33. Count Vowels
// let str3 = "hello";
// let vowels = "aeiouAEIOU";
// let count3 = 0;
// for (let i = 0; i < str3.length; i++) {
// 	if (vowels.includes(str3[i])) {
// 		count3++;
// 	}
// }
// console.log(count3);


let str3 = "hello";
let count3 = 0;

for (let i = 0; i < str3.length; i++) {
	if (
		str3[i] === 'a' || str3[i] === 'e' || str3[i] === 'i' ||
		str3[i] === 'o' || str3[i] === 'u' ||
		str3[i] === 'A' || str3[i] === 'E' || str3[i] === 'I' ||
		str3[i] === 'O' || str3[i] === 'U'
	) {
		count3++;
	}
}

console.log(count3);
