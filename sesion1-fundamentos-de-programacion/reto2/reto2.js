// RETO 2, Piedra, papel y tijera básico para prácticar el condicional IF

/**
 * Requerimientos
 * 
 * Opciones: Piedra, papel, tijeras.
 * Jugadores: Jugador 1, Jugador 2.
 * Mostrar Ganador.
 */


 // Jugador 1 elige piedra

 var playerOne = "piedra";

 // Jugador 2 puede elegir piedra, papel, tijeras
 // Cambiar esta opción ***
 var playerTwo = "tijeras";
 
 // Ganador
 var winner = "";
 
 if ( playerOne === playerTwo ) {
  winner = `Jugador 1 eligió: ${playerOne}, Jugador 2 eligió ${playerTwo}, por lo tanto: EMPATARON!`;
 } else if ( playerOne === "piedra" ) {
   if ( playerTwo === "tijeras" ) {
     winner = `Jugador 1 eligió: ${playerOne}, Jugador 2 eligió ${playerTwo}, por lo tanto: JUGADOR 1 GANÓ!!`;
   } else {
     winner = `Jugador 1 eligió: ${playerOne}, Jugador 2 eligió ${playerTwo}, por lo tanto: JUGADOR 2 GANÓ!!`;
   }
 } else if ( playerOne === "papel" ) {
   if ( playerTwo ===  "piedra" ) {
     winner = `Jugador 1 eligió: ${playerOne}, Jugador 2 eligió ${playerTwo}, por lo tanto: JUGADOR 1 GANÓ!!`;
   } else {
      winner = `Jugador 1 eligió: ${playerOne}, Jugador 2 eligió ${playerTwo}, por lo tanto: JUGADOR 2 GANÓ!!`;
   }
 } else if ( playerOne === "tijeras" ) {
    if ( playerTwo ===  "piedra" ) {
      winner = `Jugador 1 eligió: ${playerOne}, Jugador 2 eligió ${playerTwo}, por lo tanto: JUGADOR 2 GANÓ!!`;
    } else {
      winner = `Jugador 1 eligió: ${playerOne}, Jugador 2 eligió ${playerTwo}, por lo tanto: JUGADOR 1 GANÓ!!`;
    }
 }
 
 console.log(winner);