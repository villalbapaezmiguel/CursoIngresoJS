function mostrar()
{
	/**al seleccionar un mes informar.
	si es Febrero: " Este mes no tiene más de 29 días."
	si NO es Febrero: "Este mes tiene 30 o más días" */
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje = "";

	switch (mesDelAño){
		case "Febrero":
			mensaje = " Este mes no tiene más de 29 días.";
			break ;
		default :
			mensaje = "Este mes tiene 30 o más días";
	}
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN