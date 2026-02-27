// Q40. Remove All Spaces
let str10 = "  a b  c  ";
let result = "";
result = str10.split(" ").join("");
console.log(result);

// Manual loop variant to remove spaces
let str10b = " x y  z ";
let resManual = "";
for (let i = 0; i < str10b.length; i++) {
	if (str10b[i] !== " ") {
		resManual += str10b[i];
	}
}
console.log(resManual);