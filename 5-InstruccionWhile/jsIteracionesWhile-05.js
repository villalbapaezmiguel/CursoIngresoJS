/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{

	let sexoIngresado ;

	sexoIngresado = prompt("ingrese f o m");
	sexoIngresado = sexoIngresado.toLocaleLowerCase(); // combierte a miniscula caulquier string
								//toUppercase() combierte a mayuscula ;

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ingrese f o m");
	}


	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN