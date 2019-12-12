// Reto 1

const allPilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

allPilots.map((piloto)=>{
  console.log(`Nombre: ${piloto.name} y su edad es ${piloto.years}`);
});
// Mostrar nombre y edad de cada piloto
// Nombre : Jose
// Edad : 19


// RETO 2

const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

// Crear una función que me devuelva 
// los pilotos "Rebels" y otra para "Empire"

const result = (faction = "Rebels") => {
  const currentResult = pilots.filter((pilot)=>{
    return pilot.faction === faction;
  })

  return currentResult;
}


console.log(result("Rebels"));
console.log(result("Empire"));
console.log(result());
