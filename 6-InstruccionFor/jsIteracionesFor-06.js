function mostrar()
{

	let numeroIngresado ;
	numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);
	let numerosPares = 0 ;
	let contadorPares = 0;

	for(let i = 1 ; i <= numeroIngresado ; i ++)
	{

		if(i %2 == 0)
		{
			numerosPares = i ;
			contadorPares ++;

			console.log(`numero par : ${numerosPares}`);

		}
		
	}
	console.log(`la cantidad de numeros pares encontrados son : ${contadorPares}`);


}//FIN DE LA FUNCIÓN
//MIguel Villalba Paez
/**al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontra */