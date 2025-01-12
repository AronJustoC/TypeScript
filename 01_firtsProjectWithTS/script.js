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
