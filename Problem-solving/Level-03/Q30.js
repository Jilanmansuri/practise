// Q-30  LCM of Two Numbers (Simple Loop)

function LCM(a, b) {
	let lcmValue = 1;
	for (let i = 1; i <= a * b; i++) {
		if (i % a === 0 && i % b === 0) {
			lcmValue = i;
			break;
		}
	}
	console.log(lcmValue);
}

LCM(12,18);

