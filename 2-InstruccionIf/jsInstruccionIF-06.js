function mostrar()
{
	/**Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o
	adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let mensaje ="";
	if(edad >18){
		mensaje = "Es mayor de edad";
	}else if(edad >= 13 && edad <= 17){
		mensaje = "Es un adolescente";
	}else if(edad <13){
		mensaje = "Es un niñe";
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN