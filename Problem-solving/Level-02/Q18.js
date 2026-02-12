// Q-18 Count Numbers Divisible by 3 (1 to N)

function countby(n) {
	 let count=0;
		for (let i = 1; i <=n; i++) {
			if(i%3==0){
				count++;
			}       
		}
		console.log(count);
}
countby(5);