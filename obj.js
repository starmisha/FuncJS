// Создаем пустой объект
let myObject = {};



// Добавляем свойства
myObject.name = "Test Object";    // Строка
myObject.age = 25;                // Число
myObject.isMarried = false;       // Булево значение
myObject.children = ["John", "Jane"];   // Массив
myObject.nullProp = null;         // Null
myObject.undefinedProp = undefined;    // Undefined

// Добавляем метод
myObject.sayHello = function () {
	console.log("Привет!");
};

// Проверка объекта
console.log(myObject);

// Удаление свойства
delete myObject.age;

// Проверка объекта после удаления свойства
console.log(myObject);