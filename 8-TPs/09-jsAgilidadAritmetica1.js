/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    let randomUno = Math.floor(Math.random()*10)+1;
    let randomDos = Math.floor(Math.random()*10)+1;
    let randomOperaciones = Math.floor(Math.random()*4)+1;
    let operaciones = "";
    let resultadoFinal = 0;

    switch(randomOperaciones)
    {
        case 1 :
            resultadoFinal = randomUno *randomDos ;
            operaciones = "multiplicación (*)";
            break;
        case 2 :
            resultadoFinal = randomUno / randomDos ;
            operaciones = "divisíon (/)";
            break ;
        case 3 :
            resultadoFinal = randomUno - randomDos ;
            operaciones = "resta (-)";
            break;
        case 4 :
            resultadoFinal = randomUno + randomDos ;
            operaciones = "suma (+)";
            break ;
            default :
    }

    document.getElementById("txtIdPrimerNumero").value = randomUno ;
    document.getElementById("txtIdSegundoNumero").value = randomDos ;
    document.getElementById("txtIdOperador").value = operaciones;

	return resultadoFinal ;

}//FIN DE LA FUNCIÓN
respuesta = comenzar();
function Responder()
{
	let respuestaIngresada = document.getElementById("txtIdRespuesta").value;
    respuestaIngresada = parseInt(respuestaIngresada);

    if(respuestaIngresada == respuesta)
    {
        alert(`es correcto el resultado es ${respuesta}`);
    }else
    {

    }


}//FIN DE LA FUNCIÓN
