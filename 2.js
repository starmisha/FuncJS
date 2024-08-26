function isPrime(num) {
	if (num > 1000) {
		return 'Данные неверны. Число должно быть меньше или равно 1000.';
	}

	if (num <= 1) {
		return false;
	}

	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) {
			return 'Число составное'
		}
	}

	return 'Число простое'
}
console.log(isPrime(17))