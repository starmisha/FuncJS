function createAdder(x) {
	return function (y) {
		return x + y;
	};
}
let addTWo = createAdder(10)
console.log(addTWo(2))
