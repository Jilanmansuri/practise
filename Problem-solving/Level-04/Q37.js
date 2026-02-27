// Q37. reverse string (in-built and manual)
let str7 = "hello";
let reversed = str7.split("").reverse().join("");
console.log(reversed);

let str72 = "helloword";
let rev = "";
for (let i = str72.length - 1; i >= 0; i--) {
	rev = rev + str72[i];
}
console.log(rev);

