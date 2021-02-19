
function mostrar() {
	//Miguel villalba paez

	let numeros ;
	let resultado = 0;
	
	for(i = 0 ; i <10; i ++)
	{	
		numeros = prompt("ingrese numero");
		numeros = parseInt(numeros);

		resultado = resultado + numeros;	
	}

	alert("El resultado es " + resultado);

}

