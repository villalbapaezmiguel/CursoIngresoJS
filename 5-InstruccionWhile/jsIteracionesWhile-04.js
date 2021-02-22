/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	if(isNaN(numeroIngresado))//si mo es un numero entra
	{
		alert("ingre un numero");
	}

	while( numeroIngresado < 10 != numeroIngresado > 0)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	}
	
}//FIN DE LA FUNCIÓN
//Miguel Villalba Paez