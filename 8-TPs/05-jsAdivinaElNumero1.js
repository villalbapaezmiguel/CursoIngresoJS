/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos = 0;

function comenzar() {
  //Genero el número RANDOM entre 1 y 100
  let random = Math.floor(Math.random() * 100) + 1;

  //alert(numeroSecreto );
  alert(random);
  return random;

}
numeroSecreto = comenzar();
function verificar() {
  let numeroIngresado = document.getElementById("txtIdNumero").value;
  let mensaje = "";
  numeroIngresado = parseInt(numeroIngresado);

  if (numeroIngresado == numeroSecreto) {
    mensaje = `Usted es un ganador!!!`;
    contadorIntentos++;
  } else if (numeroIngresado > numeroSecreto) {
    mensaje = `se paso...`;
    contadorIntentos++;
  } else if (numeroIngresado < numeroSecreto) {
    mensaje = `falta..`;
    contadorIntentos++;
  }
  alert(mensaje);
  document.getElementById("txtIdIntentos").value = contadorIntentos;
}
//Miguel Villalba Paez