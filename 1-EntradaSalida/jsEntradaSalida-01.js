
function mostrar() {
	//Miguel villalba paez
	/**9 BIS: Ingresar 10 números distintos de cero. Determinar de los pares el menor y de los negativos el mayor. 
	 */

	let numeroIngresado ;
	let menor_Par ; 
	let mayor_negativo ;
	let contador = 0 ;
	let bandera_Par = true ;
	let bandera_Negativo = true ;

	while(contador < 10)
	{
		numeroIngresado = prompt("("+contador+") Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(numeroIngresado == 0)
		{
			numeroIngresado = prompt("("+contador+") ERROR ingrese un numero distinto de cero");
			numeroIngresado = parseInt(numeroIngresado);

		}
		
		if(numeroIngresado %2 == 0)
		{
			if(bandera_Par == true || numeroIngresado < menor_Par)
			{
				menor_Par = numeroIngresado;
				bandera_Par = false ;
			}
			
			/*
			if(bandera_Par == true)
			{
				menor_Par = numeroIngresado;
				bandera_Par = false;
			}else
			{
				if(numeroIngresado < menor_Par)
				{
					menor_Par = numeroIngresado;
				}
			}*/
		}

		if(numeroIngresado < 0)
		{

			if(bandera_Negativo == true || numeroIngresado > mayor_negativo)
			{
				mayor_negativo = numeroIngresado ;
				bandera_Negativo = false ;
			}

			/*
			if(bandera_Negativo == true)
			{
				mayor_negativo = numeroIngresado ;
				bandera_Negativo = false ;
			}else
			{
				if(numeroIngresado > mayor_negativo)//arreglado
				{
					mayor_negativo = numeroIngresado;
				}
			}*/	
		}
		
		contador ++;
	}

	document.write("El menor par :" +menor_Par +"</br>"+
	"El mayor negativo  :" +mayor_negativo +"</br>");
}

