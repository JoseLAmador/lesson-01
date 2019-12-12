console.log("Works");

// Seleccionar DIV

const divEl = document.querySelector(".results");
console.log(divEl)

// Obtener nuestro JSON

fetch("db.json")
  .then((response) => {
    console.log(response);
    return response.json()
  })
  .then((data) => {
    console.log(data)

    // Obtener datos básicos de nuestro JSON
    const movies = data.peliculas.map((pelicula) =>{

      const cardMovie = `<div>
        <h2>El nombre de la pelicula es: ${pelicula.name}</h2>
        <p>Descripción: ${pelicula.duration}</p>
        <p>${pelicula.year}</p>
        <p>${pelicula.director}</p>
        <p>${pelicula.genre}</p>
      </div>`;

      return cardMovie;
    })


    // Inyectar resultados en nuestro HTML

    divEl.innerHTML = movies;

    console.log(movies)

  })

