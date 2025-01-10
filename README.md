# TypeScript

# 📘 Curso Básico de TypeScript

¡Bienvenido/a! Este repositorio contiene ejemplos prácticos para aprender TypeScript desde cero. Cada sección está acompañada de fragmentos de código para facilitar tu aprendizaje. 😊

---

## Contenidos

### **Comienzo**

Introducción a TypeScript y qué aprenderás en este curso.

```typescript
// Hola, TypeScript
const saludo: string = "¡Hola, TypeScript!";
console.log(saludo);
```

---

### **Instalaciones necesarias**

Configura tu entorno de desarrollo. Instala Node.js y TypeScript:

```bash
# Instalación global de TypeScript
npm install -g typescript

# Verificar la versión instalada
tsc --version
```

---

### **Modo Observador**

Compila automáticamente con el modo observador.

```bash
# Usa el flag --watch para compilar automáticamente
tsc archivo.ts --watch
```

---

### **Tipos de datos**

Exploración de los diferentes tipos de datos en TypeScript.

```typescript
let nombre: string = "Juan";
let edad: number = 25;
let isStudent: boolean = true;

console.log(
  `Hola, soy ${nombre} y tengo ${edad} años. ¿Estudiante? ${isStudent}`,
);
```

---

### **Datos primitivos**

Trabajando con cadenas, números y booleanos.

```typescript
const mensaje: string = "Esto es TypeScript";
const anio: number = 2023;
const esVerdadero: boolean = true;

console.log(mensaje, anio, esVerdadero);
```

---

### **Any (cualquier dato)**

Cómo y cuándo usar el tipo `any`.

```typescript
let cualquierCosa: any = "Hola";
console.log(cualquierCosa); // Hola

cualquierCosa = 42;
console.log(cualquierCosa); // 42
```

---

### **Arrays**

Declaración y uso de arreglos en TypeScript.

```typescript
let numeros: number[] = [1, 2, 3, 4];
let palabras: string[] = ["hola", "mundo"];

console.log(numeros, palabras);
```

---

### **Objetos literales (introducción)**

Definición de objetos y acceso a sus propiedades.

```typescript
const persona = {
  nombre: "Ana",
  edad: 30,
};

console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
```

---

### **Type personalizado**

Creación de tipos personalizados para estructuras más claras.

```typescript
type Persona = {
  nombre: string;
  edad: number;
};

const usuario: Persona = {
  nombre: "Luis",
  edad: 25,
};

console.log(usuario);
```

---

### **Interface**

Usa `interface` para definir estructuras de datos.

```typescript
interface Animal {
  nombre: string;
  patas: number;
}

const perro: Animal = {
  nombre: "Rex",
  patas: 4,
};

console.log(perro);
```

---

### **Clases y POO**

Uso básico de clases y Programación Orientada a Objetos.

```typescript
class Persona {
  constructor(
    public nombre: string,
    public edad: number,
  ) {}

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona = new Persona("María", 28);
persona.saludar();
```

---

### **Encapsulamiento y genéricos**

Usar encapsulamiento y genéricos en TypeScript.

```typescript
class Caja<T> {
  private contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  obtenerContenido(): T {
    return this.contenido;
  }
}

const cajaNumeros = new Caja<number>(123);
console.log(cajaNumeros.obtenerContenido());
```

---

### **Proyecto React con TS**

Configura un proyecto básico de React con TypeScript.

```bash
# Crear una app de React con TypeScript
npx create-react-app mi-app --template typescript
```

---

### **Proyecto Angular con TS**

Configura un proyecto básico de Angular con TypeScript.

```bash
# Instala Angular CLI
npm install -g @angular/cli

# Crea un nuevo proyecto Angular
ng new mi-app
```

---

### **Despedida**

Gracias por aprender TypeScript. ¡Sigue practicando y mejorando!

```typescript
console.log("¡Gracias por aprender TypeScript!");
```

---

¡Espero que te sea útil! Si tienes preguntas, no dudes en abrir un issue en este repositorio. 😊
