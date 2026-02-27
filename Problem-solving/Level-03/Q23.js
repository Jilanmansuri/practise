// Q-23 Product of Digits

function productOfDigits(n) {
	let multi = 1;             

	for (let i = n; i > 0; i = Math.floor(i / 10)) {
		multi *= i % 10;      
	}

	console.log(multi);
}

productOfDigits(555);




let sum=1;
let n=1234;
n=Math.abs(n);
while(n>0){
    sum *= n%10;
    n=Math.floor(n/10);
}
console.log(sum);
