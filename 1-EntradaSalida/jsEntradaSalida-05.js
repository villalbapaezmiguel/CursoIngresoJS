/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = document.getElementById("txtIdNombre").value ;
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let apellido = prompt("ingrese su apeliido");

	alert(`Usted se llama ${nombre} ${apellido} y tiene ${edad} años`);
}
//Villalba Paez Miguel
//ejercicio 5bis
