// Como se nombra una clase en ES-5

function Persona( nombre, apellido ) {
  this.nombre = nombre;
  this.apellido = apellido;

  this.gritarNombre = function(){
    console.log(this.nombre.toUpperCase());
  }

  this.nombreCompleto = function(){
    console.log(this.nombre + " " + this.apellido)
  }
}


// Nueva instancia de nuestra clase Persona
const jose = new Persona("Jose", "Perez");

console.log(jose);
//console.log(jose.gritarNombre())
console.log(jose.nombreCompleto())