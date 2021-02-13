function mostrar()
{
	/**Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let mensaje = "";
	switch(destinoIngresado){
		case "Bariloche":
			mensaje = "Frio";
			break ;
		case "Cataratas":
			mensaje = "Calor";
			break ;
		case "Mar del plata" :
			mensaje = "Calor";
			break ;
		case "Ushuaia":
			mensaje = "Frio" ;
			break ;
			default :
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN