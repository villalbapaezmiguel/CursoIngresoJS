function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/**Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4 */
	let random = Math.floor(Math.random()*10)+1;
	let mensaje = "";
	if(random <=10 && random >= 9){
		mensaje = "EXCELENTE";
	}else if(random <9 && random >= 4){
		mensaje = "APROBÓ";
	}else if(random <4){
		mensaje = "Vamos, la proxima se puede";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
//Miguel Villalba Paez