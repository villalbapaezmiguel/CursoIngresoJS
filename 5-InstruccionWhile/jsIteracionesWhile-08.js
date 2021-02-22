/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado ;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=-1;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while( isNaN(numeroIngresado) == true )//mientrass la variable numeroIngresado es igual a un dato string y como resultado me de verdaredo , pasas
		{
			numeroIngresado = prompt("Ingrese un NUMERO ");
			numeroIngresado = parseInt(numeroIngresado);
		}		

		if(numeroIngresado  > 0)
		{
			sumaPositivos += numeroIngresado;
		}else
		{
			if(numeroIngresado < 0)
			{
				multiplicacionNegativos *= numeroIngresado ;
			}
		}

		respuesta = prompt("desea continuar ??");
	}



	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
/**	while(respuesta == "si")
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
	} */