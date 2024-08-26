function printNumbersWithDelay(start, end) {
	let current = start;
	const intervalId = setInterval(function () {
		console.log(current);
		if (current >= end) {
			clearInterval(intervalId);
		}
		current++;
	}, 1000);
}

printNumbersWithDelay(1, 18);
/* Можно и через setTimeout()
function printNumbersWithDelay(start, end) {
setTimeout(() => {
	 console.log(start);
	 if (start < end) {
		  printNumbersWithDelay(start + 1, end);
	 }
}, 1000 * (start - (start - 1))); // задержка в 1 секунду
}

printNumbersWithDelay(1, 10);*/
