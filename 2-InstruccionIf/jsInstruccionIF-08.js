function mostrar()
{
	/**Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
	pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value ;
	if(edad < 18 && estadoCivil != "Soltero"){

	}else if(edad > 18 && estadoCivil == "Soltero"){
		alert("Es soltero y no es menor.");
	}
	


}//FIN DE LA FUNCIÓN