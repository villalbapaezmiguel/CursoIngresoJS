/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUno ;
	let numDos ;
	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	let resultado = numUno + numDos;
	
	alert(`la suma es ${resultado}`);
	
}

