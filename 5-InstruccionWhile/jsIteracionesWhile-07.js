/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado ;

	acumulador=0;
	contador=0;
	respuesta='si';

	while(respuesta == "si")
	{

		numeroIngresado = prompt("Ingrese numero ");
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador += numeroIngresado ;
		contador ++;
		
		respuesta = prompt("quiere ingresar otro numero ??")
	}



	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN