/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeros ;
	numeros = 0;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=-1;
	respuesta='si';

	while(respuesta == "si")
	{
		numeros = prompt("INgrese numero");
		numeros = parseInt(numeros);

		if(numeros >= 0)
		{
			sumaPositivos += numeros ; 
		}else
		{
			if(numeros < 0 )
			{
				multiplicacionNegativos = multiplicacionNegativos* numeros;
			}
		}

		respuesta = prompt("quiere ingresar otro numero ??");
	}


	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN