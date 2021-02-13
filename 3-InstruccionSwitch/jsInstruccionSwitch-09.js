function mostrar() {
	/**una agencia de viajes debe sacar las tarifas de los viajes , 
	se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
	localidad para vacacionar para poder calcular el precio final

	en Invierno: bariloche tiene un aumento del 20% 
	cataratas y Cordoba tiene un descuento del 10% 
	Mar del plata tiene un descuento del 20%

	en Verano: bariloche tiene un descuento del 20% 
	cataratas y Cordoba tiene un aumento del 10% 
	Mar del plata tiene un aumento del 20%

	en Otoño y Primavera: bariloche tiene un aumento del 10% 
	cataratas tiene un aumento del 10% 
	Mar del plata tiene un aumento del 10% 
	y Cordoba tiene el precio sin descuento */

	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	let mensaje = "";
	let estadiaBase = 15000;
	let precioFinalDescuento = 0;
	let precioFinalAumento = 0;
	let descuento = 0;
	let aumento = 0;
	let precioCordoba = estadiaBase;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					aumento = 20;
					precioFinalAumento = estadiaBase * aumento / 100 + estadiaBase;
					mensaje = `${destinoIngresado} en ${estacionIngresada} tiene un aumento del ${aumento}% y su precio final es : ${precioFinalAumento} `;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
					precioFinalDescuento = estadiaBase * descuento / 100;
					precioFinalDescuento = estadiaBase - precioFinalDescuento;
					mensaje = `${destinoIngresado} en ${estacionIngresada} tiene un descuento del ${descuento}% y su precio final es : ${precioFinalDescuento} `;
					break;
				case "Mar del plata":
					descuento = 20;
					precioFinalDescuento = estadiaBase * descuento / 100;
					precioFinalDescuento = estadiaBase - precioFinalDescuento;
					mensaje = `${destinoIngresado} en ${estacionIngresada} tiene un descuento del ${descuento}% y su precio final es : ${precioFinalDescuento} `;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					descuento = 20;
					precioFinalDescuento = estadiaBase * descuento / 100;
					precioFinalDescuento = estadiaBase - precioFinalDescuento;
					mensaje = `${destinoIngresado} en ${estacionIngresada} tiene un descuento del ${descuento}% y su precio final es : ${precioFinalDescuento} `;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10;
					precioFinalAumento = estadiaBase * aumento / 100 + estadiaBase;
					mensaje = `${destinoIngresado} en ${estacionIngresada} tiene un aumento del ${aumento}% y su precio final es : ${precioFinalAumento} `;
					break;
				case "Mar del plata":
					aumento = 20;
					precioFinalAumento = estadiaBase * aumento / 100 + estadiaBase;
					mensaje = `${destinoIngresado} en ${estacionIngresada} tiene un aumento del ${aumento}% y su precio final es : ${precioFinalAumento} `;
					break;
				default:
			}
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 10;
					precioFinalAumento = estadiaBase * aumento / 100 + estadiaBase;
					mensaje = `${destinoIngresado} en ${estacionIngresada} tiene un aumento del ${aumento}% y su precio final es : ${precioFinalAumento} `;
					break;
				case "Cordoba":
					precioCordoba = estadiaBase;
					mensaje = `${destinoIngresado} en ${estacionIngresada} , sin descuento , el precio final es ${precioCordoba}`;
					break;
				default:

			}
	}


	//precioFinalDescuento += estadiaBase * descuento / 100;
	//precioFinalAumento = estadiaBase * aumento / 100 + estadiaBase;

	//mensaje += precioFinalDescuento;
	//mensaje += precioFinalAumento;


	alert(mensaje);

}//FIN DE LA FUNCIÓN

/**switch (estacionIngresada && destinoIngresado) {

		case "Invierno" && "Bariloche":
			aumento = 20;

			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${aumento}% , el precio Final es : `;
			break;
		case "Invierno" && "Cataratas" || "Cordoba":
			descuento = 10;

			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${descuento}% , el precio Final es :  `;
			break;
		case "Invierno" && "Mar del plata":
			descuento = 20;

			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${descuento}% , el precio Final es :  `;
			break;
		case "Verano" && "Bariloche":
			descuento = 20;

			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${descuento}% , el precio Final es :  `;
			break;
		case "Verano" && "Cataratas" || "Cordoba":
			aumento = 10;
			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${aumento}% , el precio Final es : `;
			break;
		case "Verano" && "Mar del plata":
			aumento = 20;
			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${aumento}% , el precio Final es  `;
			break;
		case "Otoño" || "Primavera" && "Bariloche":
			aumento = 10;
			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${aumento}% , el precio Final es : `;
			break;
		case "Otoño" || "Primavera" && "Cataratas":
			aumento = 10;
			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${aumento}% , el precio Final es : `;
			break;
		case "Otoño" || "Primavera" && "Mar del plata":
			aumento = 10;
			mensaje = `${estacionIngresada} en ${destinoIngresado} tiene un aumento del ${aumento}% , el precio Final es : `;
			break;
		case "Otoño" || "Primavera" && "Cordoba":
			mensaje = `${destinoIngresado} en ${estacionIngresada} no tiene descuento , su precio Final es : ${precioCordoba}`;
			break;
			default:
	}
 */


















