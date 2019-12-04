const peliculas = [
  {
    id: 1,
    name: "Señor de los anillos",
    duration: 200,
    description: "El Señor de los Anillos es una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien.",
    img: "https://vignette.wikia.nocookie.net/eldragonverde/images/b/b2/Cinemania_lordoftherings.jpg/revision/latest?cb=20130103162924&path-prefix=es"
  },
  {
    id: 2,
    name: "The Joker",
    duration: 100,
    description: "La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
    img: "https://vignette.wikia.nocookie.net/eldragonverde/images/b/b2/Cinemania_lordoftherings.jpg/revision/latest?cb=20130103162924&path-prefix=es",

  },
  {
    id: 3,
    name: "Búsqueda Implacable",
    duration: 93,
    description: "El exagente de las fuerzas especiales de élite Bryan Millis se ve enredado en la trama de una organización criminal cuando intenta salvar a su hija Kim, pero solo tiene 96 horas para rescatarla antes de perder el rastro.",
    img: "https://vignette.wikia.nocookie.net/eldragonverde/images/b/b2/Cinemania_lordoftherings.jpg/revision/latest?cb=20130103162924&path-prefix=es",
  },
  {
    id: 4,
    name: "Terminator",
    duration: 80,
    description: "Sarah Connor une todas sus fuerzas con una mujer cyborg para proteger a una joven de un extremadamente poderoso y nuevo Terminator.",
    img: "https://vignette.wikia.nocookie.net/eldragonverde/images/b/b2/Cinemania_lordoftherings.jpg/revision/latest?cb=20130103162924&path-prefix=es",
  },
  {
    id: 5,
    name: "Cars",
    duration: 93,
    description: "El aspirante a campeón de carreras Rayo McQueen parece que está a punto de conseguir el éxito. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado.",
    img: "https://vignette.wikia.nocookie.net/eldragonverde/images/b/b2/Cinemania_lordoftherings.jpg/revision/latest?cb=20130103162924&path-prefix=es",
  },
  {
    id: 6,
    name: "Cars",
    duration: 120,
    description: "El aspirante a campeón de carreras Rayo McQueen parece que está a punto de conseguir el éxito. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado.",
    img: "https://vignette.wikia.nocookie.net/eldragonverde/images/b/b2/Cinemania_lordoftherings.jpg/revision/latest?cb=20130103162924&path-prefix=es",
  }
];

// ...BUSCADOR DE PELÍCULAS...

// Elementos Disponibles

const btnSearch = document.querySelector('.btn-search');
const inputSearch = document.querySelector('.input-search');
const results = document.querySelector('.wrapper-results');

// Eventos

btnSearch.addEventListener('click', ()=>{
  // Valor de nuestro input
  console.log(inputSearch.value)

  // Filtrando películas, comparando el nombre de la película
  // con el nombre que tenemos en nuestro input

  const filtro = peliculas.filter((pelicula)=>{
    return pelicula.name.toLowerCase() === inputSearch.value.toLowerCase();
  })

  // Resultado de nuestro filtro
  console.log(filtro)

  // Colando nuestros resultados en "cards"

  const myCard = filtro.map((pelicula) => {
    return `<div>
    <img class="card-item" src=${pelicula.img} height=200 width=200>
    <h2>${pelicula.name}</h2>
    <p>${pelicula.duration} min</p>
    <p>${pelicula.description}</p>
    </div>`;
  })

  // Insertando nuestro resultados ya en "cards"
  // dentro de nuestro html

  results.innerHTML = myCard;

})
