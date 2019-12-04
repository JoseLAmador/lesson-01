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

// Filter

// **** Abrir consola del navegador para ver el resultado



const pelis = peliculas.filter((pelicula) => {
  return pelicula.duration < 100;
});

console.log(pelis)

