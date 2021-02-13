function mostrar() {
	/**Al ingresar una hora, informar:
	si está entre las 7 y las 11 : "Es de mañana.". */
	//tomo la hora
	let horaDelDia = document.getElementById("txtIdHora").value;
	let mensaje = "";
	horaDelDia = parseInt(horaDelDia);
	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;
		default:
			mensaje = "Hora no correspondida";

	}

	alert(mensaje);





}//FIN DE LA FUNCIÓN