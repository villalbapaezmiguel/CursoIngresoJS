/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadPositivo = 0;
	let cantidadNegativo = 0;
	let promedioPositivo = 0;
	let promedioNegativo = 0; 
	let cantidadCeros = 0 ;
	let cantidadPar = 0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado ;
			cantidadPositivo ++;
			promedioPositivo = sumaPositivos/cantidadPositivo;
			
		}else
		{
			if(numeroIngresado < 0 )
			{
				sumaNegativos += numeroIngresado ;
				cantidadNegativo ++;
				promedioNegativo = sumaNegativos / cantidadNegativo;

			}else
			{
				if(numeroIngresado == 0)
				{
					cantidadCeros ++;
				}
			}
		}
		if(numeroIngresado %2 == 0)
		{
			cantidadPar++;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write(`
	1-Suma de los negativos es : ${sumaNegativos}</br>
	2-Suma de los positivos es : ${sumaPositivos}</br>
	3-Cantidad de positivos es : ${cantidadPositivo}</br>
	4-Cantidad de negativos es : ${cantidadNegativo}</br>
	5-Cantidad de ceros es : ${cantidadCeros}</br>
	6-Cantidad de números pares es : ${cantidadPar}</br>
	7-Promedio de positivos es : ${promedioPositivo}</br>
	8-Promedios de negativos es : ${promedioNegativo}</br>
	9-Diferencia entre positivos y negativos : (${sumaPositivos} - ${sumaNegativos}).`);
}//FIN DE LA FUNCIÓN
// todos los tps de whille y si queres bucles