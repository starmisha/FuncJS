function sortArrayElements(array) {
	let evens = array.filter(item => item % 2 === 0 && item !== 0 && typeof item === 'number' && item !== NaN);
	let odds = array.filter(item => item % 2 !== 0 && typeof item === 'number' && item !== NaN);
	let zeros = array.filter(item => item === 0);

	console.log('Кол-во чётных элементов:', evens.length);
	console.log('Кол-во нечётных элементов:', odds.length);
	console.log('нулевой элемент:', zeros);
}
sortArrayElements([null, 8, 3, 3, 5, 13, 24, 0])