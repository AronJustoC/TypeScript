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
