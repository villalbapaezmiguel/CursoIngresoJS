/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado = prompt("ingrese nombre", "ejemplo Roman");

	document.getElementById("txtIdNombre").value = nombreIngresado;
}

