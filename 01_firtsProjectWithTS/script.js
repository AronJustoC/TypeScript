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
