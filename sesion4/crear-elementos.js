// Crear elementos con javascript

const myDiv = document.createElement('div');
const myImg = document.createElement('img');
const myTitle = document.createElement('h2');
myTitle.textContent = "Insertado con puro Javascript :)";
myImg.src = "https://vignette.wikia.nocookie.net/eldragonverde/images/b/b2/Cinemania_lordoftherings.jpg/revision/latest?cb=20130103162924&path-prefix=es";
myImg.width = 150;
myImg.height = 150;


// Agregar un "img" a nuestro "div"

myDiv.appendChild(myImg);

// Agregar un "h2" a nuestro "div"
myDiv.appendChild(myTitle);

// Agregar nuestro "div", con "img" y "h2"
// al body

document.body.appendChild(myDiv);