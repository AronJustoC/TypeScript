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

//######### CUSTOM TYPE #############
//01 Definir y usar un tipo personalizado
type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 10,
  y: 20
};

logValue(point);

//02 Iipos de union 
type IDs = number | string;
let userId: IDs;
userId = 3;
logValue(userId);
userId = 'abc123';
logValue(userId);

//03 Tipos de interseccion
type Person2 = {
  name: string;
  age: number;
};

type Employee = Person2 & {
  employeeId: number;
};

let employee: Employee = {
  name: 'Jhon',
  age: 30,
  employeeId: 1234
};
logValue(employee)

//04 Tipos literales
type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}
move('up');
move('right');

//05 Tipos opcionales
type User = {
  name: string;
  age?: number; // Propiedad opcional
};

let user1: User = {
  name: 'Alice'
};

let user2: User = {
  name: 'Bob',
  age: 25
};
logValue(user1);
logValue(user2);

//06 Tipos de funcion 
type Greet = (name: string) => string;
let greet: Greet = (name: string) => {
  return `Hello, ${name}`;
};
logValue(greet('Alice'));

//07 Tipos de Tuplas
type Tuple = [number, string];
let tuple: Tuple = [12, 'tia'];
logValue(tuple);

//08 Tipos genericos
type Result<T> = {
  success: boolean;
  data: T;
};
let result3: Result<string> = {
  success: true,
  data: 'Operation completed'
};
logValue(result3);

//######### INTERFACES #############

//01 Definir y usar una interfaz basica 
interface Person {
  name: string;
  age: number;
}

let person4: Person = {
  name: 'Juana',
  age: 56
};
logValue(person4);

//02 Interfaz con propiedades opcionales
interface Car {
  brand: string;
  model: string;
  year?: number; // Propiedad opcional 
}

let car1: Car = {
  brand: 'Toyota',
  model: 'Corolla',
};
logValue(car1);
let car2: Car = {
  brand: 'Honda',
  model: 'Civic',
  year: 2024
};
logValue(car2);

//03 Interfaz con Metodos
interface Calculator1 {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

let calculator3: Calculator1 = {
  add: (a: number, b: number): number => {
    return a + b;
  },
  subtract: (a: number, b: number): number => {
    return a - b;
  }
};

logValue(calculator3.add(5, 4));
logValue(calculator3.subtract(2, 4));

//04 Extender Interfaces
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

let dog: Dog = {
  name: 'Firulais',
  age: 2,
  breed: "wau wau"
};
logValue(dog);

//05 Interfaz para funciones 
interface Greet1 {
  (name: string): string;
}

let greet1: Greet1 = (name: string): string => {
  return `Hello, ${name}`;
};
logValue(greet1('Alice'));

//06 Interfaz con propiedades de solo lectura
interface Point1 {
  readonly x: number;
  readonly y: number;
}

let point1: Point1 = {
  x: 10,
  y: 24
};
logValue(point1);

//07 Interfaz con propiedades de indice
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ['Alice', 'Luchito', 'Bob', 'Charlie'];
logValue(myArray[0]);
logValue(myArray[2]);

//08 Interfaz para describir a un objeto con propiedades dinamicas
interface Dictionary {
  [key: string]: string;
}

let dictionary: Dictionary = {
  hello: 'Hola',
  world: 'mundo!'
};
logValue(dictionary.hello);
logValue(dictionary.world);


