"use strict";
console.log('Pilares TypeScript!');
//######### TIPOS DE DATOS EN TS #############
//01 Tipos basicos
let nombre = 'Juan';
let edad = 30;
let estudiante = true;
//02 Arreglos
let numeros = [1, 2, 3, 4, 5, 6];
let nombres = ['Arito', 'Boli', 'Percy', 'Luchito'];
//03 Tuplas
let persona = ['Maria', 25];
//04 Enums:
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 0] = "Lunes";
    Dia[Dia["Martes"] = 1] = "Martes";
    Dia[Dia["Miercoles"] = 2] = "Miercoles";
    Dia[Dia["Jueves"] = 3] = "Jueves";
    Dia[Dia["Viernes"] = 4] = "Viernes";
    Dia[Dia["Sabado"] = 5] = "Sabado";
    Dia[Dia["Domingo"] = 6] = "Domingo";
})(Dia || (Dia = {}));
//Usa el enum
let diaFavorito = Dia.Miercoles;
let persona1 = {
    nombre: 'Pedro',
    edad: 22,
    esEstudiante: false
};
//06 Fuciones
function sumThreeNumbers(a, b, c) {
    return (a + b + c);
}
let result = sumThreeNumbers(1, 2, 3);
console.log(result);
let id1 = 123;
let id2 = 'ABC';
//######### USOS DE ANY #############
//01 Asignacion de any a una variable
let variable;
variable = 5;
console.log(variable);
//02 Uso de any en Fuciones
function logValue(value) {
    console.log(value);
}
logValue(10);
logValue('Cualquier valor');
logValue(true);
logValue({ name: 'Jhon' });
//03 Arrays con tipo any
let array = [];
array.push(1);
array.push('string');
array.push({ key: 'value' });
logValue(array);
//04 Uso de any en objetos
let obj = {};
obj.name = 'Jhon';
obj.age = 30;
obj.isStudent = true;
logValue(obj);
//05 Convercion de tipos con any
let value = '123';
let numericValue = value;
logValue(numericValue);
//######### USOS ARRAY #############
//01 Crear o manipular un array de numeros
let numbers = [1, 2, 3, 4, 5];
//aniadir un elemento al final
numbers.push(6);
logValue(numbers);
//Eliminar un elemento de un array del final
numbers.pop();
logValue(numbers);
//Acceder a un elemento del array
logValue(numbers[2]);
//02 Crear o manipular un array de cadenas de texto
let fruits = ['apple', 'banana', 'cherry'];
//Aniadir una fruta al array
fruits.push('orange');
logValue(fruits);
//Elininar la primera fruta del array
fruits.shift();
logValue(fruits);
//Acceder a los elemetos dela array 
logValue(fruits[1]);
//03 Iterar sobre un array
let colors = ['red', 'blue', 'green'];
//Usar un for en el bucle
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//Usar forEach en un array
colors.forEach(color => {
    console.log(color);
});
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 15 }
];
//Aniadir una persona al array
people.push({ name: 'Dave', age: 40 });
logValue(people);
//Acceder a una propiedad de un objeto en el array
logValue(people[1].name);
//05 Filtrar y mapear un array
let numbers1 = [1, 2, 3, 4, 5];
//Filtrar numeros pares 
let evenNumbers = numbers1.filter(number => number % 2 == 0);
logValue(evenNumbers);
//Mapear a sus cuadrados
let squaredNumbers = numbers1.map(number => number * number);
logValue(squaredNumbers);
let person1 = {
    name: 'Alice',
    age: 23,
    city: 'New York'
};
//Acceder a las propiedades del objeto
console.log('NOMBRE: ', person1.name);
console.log('EDAD: ', person1.age);
//Modificar propiedades
person1.age = 25;
logValue(person1.age);
let car = {
    brand: "Toyota",
    model: "Corolla"
};
//Aniadir una propiedad
car.year = 2004;
logValue(car);
//Eliminar una propiedad
delete car.year;
logValue(car);
let book = {
    title: '1983',
    author: 'George Owell',
    year: 1949
};
//Usar for...in
for (let key in book) {
    logValue(`${key}: ${book[key]}`);
}
let student = {
    name: 'Jhon',
    age: 23,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        zip: "90001"
    }
};
//Acceder a propiedades anidadas
logValue(student.address.city);
//Modificar propiedades anidadas
student.address.zip = "90002";
logValue(student.address.zip);
let calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};
logValue(calculator.add(1, 3));
logValue(calculator.subtract(8, 4));
let original = {
    name: 'Jane',
    age: 25
};
//Copiar usando Object.assign
let copy = Object.assign({}, original);
logValue(copy);
//Modificar la copia no afecta a la original
copy.age = 29;
logValue(copy);
let point = {
    x: 10,
    y: 20
};
logValue(point);
let userId;
userId = 3;
logValue(userId);
userId = 'abc123';
logValue(userId);
let employee = {
    name: 'Jhon',
    age: 30,
    employeeId: 1234
};
logValue(employee);
function move(direction) {
    console.log(`Moving ${direction}`);
}
move('up');
move('right');
let user1 = {
    name: 'Alice'
};
let user2 = {
    name: 'Bob',
    age: 25
};
logValue(user1);
logValue(user2);
let greet = (name) => {
    return `Hello, ${name}`;
};
logValue(greet('Alice'));
let tuple = [12, 'tia'];
logValue(tuple);
let result3 = {
    success: true,
    data: 'Operation completed'
};
logValue(result3);
let person4 = {
    name: 'Juana',
    age: 56
};
logValue(person4);
let car1 = {
    brand: 'Toyota',
    model: 'Corolla',
};
logValue(car1);
let car2 = {
    brand: 'Honda',
    model: 'Civic',
    year: 2024
};
logValue(car2);
let calculator3 = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    }
};
logValue(calculator3.add(5, 4));
logValue(calculator3.subtract(2, 4));
let dog = {
    name: 'Firulais',
    age: 2,
    breed: "wau wau"
};
logValue(dog);
let greet1 = (name) => {
    return `Hello, ${name}`;
};
logValue(greet1('Alice'));
let point1 = {
    x: 10,
    y: 24
};
logValue(point1);
let myArray = ['Alice', 'Luchito', 'Bob', 'Charlie'];
logValue(myArray[0]);
logValue(myArray[2]);
let dictionary = {
    hello: 'Hola',
    world: 'mundo!'
};
logValue(dictionary.hello);
logValue(dictionary.world);
//######### CLASES Y POO #############
//01 Definir una clase basica
class Person7 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person7 = new Person7('Alice', 25);
person7.greet();
//02 Herencia
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        logValue(`${this.name} moved ${distance} meters.`);
    }
}
class Dog extends Animal {
    bark() {
        logValue("Woof! Woof!");
    }
}
let dog2 = new Dog('Buddy');
dog2.bark();
dog2.move(10);
//03 Modificadores de acceso
class Car4 {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getBrand() {
        return this.brand;
    }
}
let car4 = new Car4('Toyota', 'Corolla', 2022);
logValue(car4.year);
logValue(car4.getBrand());
//04 Getter y Setters
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get area() {
        return this._width * this._height;
    }
    set width(value) {
        if (value <= 0) {
            throw new Error("Width must be greater than zero.");
        }
        this._width = value;
    }
    set height(value) {
        if (value <= 0) {
            throw new Error("Width must be greater than zero.");
        }
        this._height = value;
    }
}
let rectangle = new Rectangle(10, 20);
logValue(rectangle.area);
rectangle.width = 15;
logValue(rectangle.area);
//05 Clases abstractasas
class Shape {
    printArea() {
        logValue(`Area: ${this.getArea()}`);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Bird {
    fly() {
        logValue("Flying high!");
    }
}
let bird = new Bird();
bird.fly();
//07 Metodos estaticos //se peude llamar directamente desde la clase
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
logValue(MathUtils.add(4, 3));
//08 Clases genericos
class Box {
    constructor(contents) {
        this.contents = contents;
    }
    getContents() {
        return this.contents;
    }
}
let numberBox = new Box(234);
logValue(numberBox.getContents());
let stringBox = new Box('Tu vieja');
logValue(stringBox.getContents());
//######### ENCAPSULAMIENTO Y GENERICOS #############
//01 Clases en TypeScript
class Person01 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
//Uso de la clase Person01
const person03 = new Person01('Juan', 30);
logValue(person03.getName());
person03.setAge(31);
logValue(person03.getAge());
//02 Genericos
function getFirstElement(array) {
    return array[0];
}
//Uso indiferente entre arrays de acualquier tipo
const numbers04 = [1, 2, 3];
const firstElementOfnumbers = getFirstElement(numbers04);
logValue(firstElementOfnumbers);
const words = ['letra1', 'palabra1', 'words'];
const firstElementOfwords = getFirstElement(words);
logValue(firstElementOfwords);
//03 Clase generica
class Box01 {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
const boxOfNumbers = new Box01(321);
logValue(boxOfNumbers.getValue());
boxOfNumbers.setValue(125);
logValue(boxOfNumbers.getValue());
const boxOfStrings = new Box01("Arito");
logValue(boxOfStrings.getValue());
boxOfStrings.setValue("Adanko");
logValue(boxOfStrings.getValue());
