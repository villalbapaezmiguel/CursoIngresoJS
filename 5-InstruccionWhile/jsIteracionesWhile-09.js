/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	
	banderaDelPrimero = true;
	respuesta ='si';

	while(respuesta =="si")
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(banderaDelPrimero == true)
		{
		numeroMaximo = numeroIngresado ;
		numeroMinimo = numeroIngresado ;
		banderaDelPrimero = false ;
		}

		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado ;
		}else
		{
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado ;
			}
		}


		respuesta=prompt("desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN