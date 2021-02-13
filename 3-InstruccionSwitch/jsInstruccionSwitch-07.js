function mostrar()
{	
	/**Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */
	let destinoIngresado =document.getElementById("txtIdDestino").value;
	let mensaje = "";
	
	switch(destinoIngresado){

		case "Bariloche":
			mensaje = "Bariloche queda en el Oeste";
			break ;
		case "Cataratas":
			mensaje = "Cataratas queda en el Norte";
			break;
		case "Mar del plata":
			mensaje = "Mar del plata queda en el Este"
				break ;
		case "Ushuaia":
			mensaje = "Sur"

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN