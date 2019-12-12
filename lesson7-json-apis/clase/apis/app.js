console.log("Works Fine");

// Seleccionar DIV
const divResults = document.querySelector(".results");
console.log(divResults)

// Hacer petición a la API de Rick and Morty
// Obtener un JSON con los personajes de Rick and Morty

fetch("https://rickandmortyapi.com/api/character/")
  .then((response)=> {
    console.log(response)
    return response.json();
  })
  .then((data)=> {
    console.log(data)

    // Obtener los datos básicos de los primeros 20 personajes
    // Hacer una pequeña Card por cada personaje

    const results = data.results.map((character)=> {
      return `
      <div class="col mb-4">
        <div class="card">
          <img src=${character.image} class="card-img-top" alt=${character.name}>
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">${character.species}</p>
          </div>
        </div>
      </div>
      `
    });

    // Inyectar las Cards de cada personaje en HTML

    divResults.innerHTML = results;
  })