function mostrar()
{
	/**Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
	mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero" ){

		alert('Es muy pequeño para NO ser soltero.');
	}
	


}//FIN DE LA FUNCIÓN