function mostrar()
{
	//tomo el mes
	/**al seleccionar un mes informar.
	si tiene 28 días.Febrero
	si tiene 30 días.Abril, junio, septiembre y noviembre.
	si tiene 31 días. Enero, marzo, mayo, julio, agosto, octubre y diciembre. */
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje = "";

	switch(mesDelAño){
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "tiene 30 días";
		break;
		case "Febrero":
			mensaje = "tiene 28 días";
		break;
		default :
			mensaje ="tiene 31 días.";

	}
	
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN