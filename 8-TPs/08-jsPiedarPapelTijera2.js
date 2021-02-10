var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	let random = Math.floor(Math.random()*3)+1; 	
	
	alert(random);
	return random ;

}//FIN DE LA FUNCIÓN
eleccionMaquina = comenzar ();
function piedra(){

	let mensaje = "";
	switch(eleccionMaquina){
		case 1 :
			mensaje = "Empate , Piedra con Piedra ";
			ContadorDeEmpates ++;
		break;
		
		case 2 :
			mensaje = "Perdio , Papel envuelve Tijeras ";
			ContadorDePerdidas ++;
		break

		case 3 :
			mensaje = "Gano , Piedra aplasta Tijeras";
			ContadorDeGanadas ++;
		break;
		default :
	}
	alert(mensaje);
	return mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
	let mensaje = "";
	switch(eleccionMaquina){
		case 1 :
			mensaje = "Ganaste , Papel envuelve Piedra ";
			ContadorDeGanadas ++;
		break;
		
		case 2 :
			mensaje = "Empate , Papel con Papel ";
			ContadorDeEmpates ++;
		break

		case 3 :
			mensaje = "Perdiste , Tijeras corta Papel";
			ContadorDePerdidas ++;
		break;
		default :
	}
	alert(mensaje);
	return mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{   
	let mensaje = "";

	switch(eleccionMaquina){
		case 1 :
			mensaje = "Perdiste , Piedra aplasta Tijeras ";
			ContadorDePerdidas ++;
		break;
		
		case 2 :
			mensaje = "Ganaste , Tijeras corta Papel ";
			ContadorDeGanadas ++;
		break

		case 3 :
			mensaje = "Empate , Tijeras cortra Tijeras";
			ContadorDeEmpates ++;
		break;
		default :
	}
	alert(mensaje);
	return mostrarResultado();
}//FIN DE LA FUNCIÓN

	
function mostrarResultado(){

	document.getElementById("txtIdGanadas").value =`Ganadas : ${ContadorDeGanadas}`;
	document.getElementById("txtIdPerdidas").value = `Perdidas : ${ContadorDePerdidas}` ;
	document.getElementById("txtIdEmpatadas").value = `Empatadas : ${ContadorDeEmpates}`;
}