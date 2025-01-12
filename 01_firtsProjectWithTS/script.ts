console.log('Pilares TypeScript!');
//######### TIPOS DE DATOS EN TS #############
//01 Tipos basicos
let nombre: string = 'Juan';
let edad: number = 30;
let estudiante: boolean = true;

//02 Arreglos
let numeros: number[] = [1, 2, 3, 4, 5, 6];
let nombres: string[] = ['Arito', 'Boli', 'Percy', 'Luchito'];

//03 Tuplas
let persona: [string, number] = ['Maria', 25];

//04 Enums:
enum Dia {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo
}
//Usa el enum
let diaFavorito: Dia = Dia.Miercoles;

//05 Interfaces
interface Persona {
  nombre: string;
  edad: number;
  esEstudiante: boolean;
}
let persona1: Persona = {
  nombre: 'Pedro',
  edad: 22,
  esEstudiante: false
}

//06 Fuciones
function sumThreeNumbers(a: number, b: number, c: number): number {
  return (a + b + c);
}

let result: number = sumThreeNumbers(1, 2, 3);
console.log(result);

//07 Tipos personalizados
type ID = number | string;

let id1: ID = 123;
let id2: ID = 'ABC';



//######### USOS DE ANY #############

//01 Asignacion de any a una variable
let variable: any;
variable = 5;
console.log(variable);

//02 Uso de any en Fuciones
function logValue(value: any): void {
  console.log(value);
}

logValue(10);
logValue('Cualquier valor');
logValue(true);
logValue({ name: 'Jhon' });

//03 Arrays con tipo any
let array: any[] = [];
array.push(1);
array.push('string');
array.push({ key: 'value' })
logValue(array);

//04 Uso de any en objetos
let obj: { [key: string]: any } = {};
obj.name = 'Jhon';
obj.age = 30;
obj.isStudent = true;
logValue(obj);

//05 Convercion de tipos con any
let value: any = '123';
let numericValue: number = value as number;
logValue(numericValue);


//######### USOS ARRAY #############

//01 Crear o manipular un array de numeros
let numbers: number[] = [1, 2, 3, 4, 5];
//aniadir un elemento al final
numbers.push(6);
logValue(numbers);
//Eliminar un elemento de un array del final
numbers.pop();
logValue(numbers);
//Acceder a un elemento del array
logValue(numbers[2]);

//02 Crear o manipular un array de cadenas de texto
let fruits: string[] = ['apple', 'banana', 'cherry'];
//Aniadir una fruta al array
fruits.push('orange');
logValue(fruits);
//Elininar la primera fruta del array
fruits.shift();
logValue(fruits);
//Acceder a los elemetos dela array 
logValue(fruits[1]);

//03 Iterar sobre un array
let colors: string[] = ['red', 'blue', 'green'];
//Usar un for en el bucle
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
//Usar forEach en un array
colors.forEach(color => {
  console.log(color);
})

//04 Array de objetos
interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
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
let numbers1: number[] = [1, 2, 3, 4, 5];
//Filtrar numeros pares 
let evenNumbers = numbers1.filter(number => number % 2 == 0);
logValue(evenNumbers);
//Mapear a sus cuadrados
let squaredNumbers = numbers1.map(number => number * number);
logValue(squaredNumbers);


//######### OBJEROS LITERALES #############
interface Person1 {
  name: string;
  age: number;
  city: string;
}

let person1 = {
  name: 'Alice',
  age: 23,
  city: 'New York'
}
//Acceder a las propiedades del objeto
console.log('NOMBRE: ', person1.name);
console.log('EDAD: ', person1.age);
//Modificar propiedades
person1.age = 25;
logValue(person1.age);

//02 Aniadir y eliminar propiedades de un objeto
interface Car {
  brand: string;
  model: string;
  year?: number; //Propiedad obcional
}

let car: Car = {
  brand: "Toyota",
  model: "Corolla"
};

//Aniadir una propiedad
car.year = 2004;
logValue(car);
//Eliminar una propiedad
delete car.year;
logValue(car);

//03 Iterar sobre las propiedades de un objeto
interface Book {
  title: string;
  author: string;
  year: number;
}

let book: Book = {
  title: '1983',
  author: 'George Owell',
  year: 1949
};

//Usar for...in
for (let key in book) {
  logValue(`${key}: ${book[key as keyof Book]}`);
}

//04 Anidar objetos 
interface Address {
  street: string;
  city: string;
  zip: string;
}

interface Student {
  name: string;
  age: number;
  address: Address;
}

let student: Student = {
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

//05 Metodos en objetos
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

let calculator: Calculator = {
  add: function (a: number, b: number): number {
    return a + b;
  },
  subtract: function (a: number, b: number): number {
    return a - b;
  }
};
logValue(calculator.add(1, 3));
logValue(calculator.subtract(8, 4));

//Copiar objetos
interface Original {
  name: string;
  age: number;
}

let original: Original = {
  name: 'Jane',
  age: 25
};

//Copiar usando Object.assign
let copy: Original = Object.assign({}, original);
logValue(copy);
//Modificar la copia no afecta a la original
copy.age = 29;
logValue(copy);

