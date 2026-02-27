// Q38. Palindrome string check
let str8 = "madam";
let reverse = str8.split("").reverse().join("");
console.log(str8 == reverse ? "Is palindrome" : "Not a palindrome");

// Two-pointer method
let i = 0;
let j = str8.length - 1;
let isPalindrome = true;
while (i < j) {
	if (str8[i] !== str8[j]) {
		isPalindrome = false;
		break;
	}
	i++;
	j--;
}
console.log(isPalindrome);

