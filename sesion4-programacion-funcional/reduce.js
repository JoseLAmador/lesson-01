// REDUCE

// **** Abrir consola del navegador para ver el resultado

const letras = ["H", "o", "l", "a"];

const palabra = letras.reduce(function(valor_anterior, valor_actual){
  return valor_anterior + valor_actual;
})
// H
// Ho
// Hol
// Hola

console.log(palabra);


// Ejemplo 2

const numbers = [1, 2, 3, 5];
const total = numbers.reduce(function(valor_anterior, valor_actual){
  return valor_anterior + valor_actual;
})
// 1
// 3
// 6
// 11
console.log("La suma total es", total);


// Ejemplo 3 Obtener la duración promedio de nuestras películas

const peliculas = [
  {
    id: 1,
    name: "Señor de los anillos",
    duration: 200,
  },
  {
    id: 2,
    name: "The Joker",
    duration: 100,
  },
  {
    id: 3,
    name: "Búsqueda Implacable",
    duration: 93,
  },
  {
    id: 4,
    name: "Terminator",
    duration: 80,
  },
  {
    id: 5,
    name: "Cars",
    duration: 93,
  }
];

// 1.- Obtener los minutos

const minPeliculas = peliculas.map((pelicula) => {
  return pelicula.duration;
})

console.log("Minutos por película", minPeliculas)

// 2.- Obtener la suma total

const duracionPromedio = minPeliculas.reduce(function(valor_anterior, valor_actual) {
  return (valor_anterior + valor_actual);
})

console.log("Total de minutos", duracionPromedio)

// 3.- Obtener la duración promedio


console.log("La duración promedio es de:", duracionPromedio / peliculas.length);