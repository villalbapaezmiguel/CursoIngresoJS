
function mostrar() {
	//Miguel villalba paez
	/**9 BIS: Ingresar 10 números distintos de cero. Determinar de los pares el menor y de los negativos el mayor. 
	 */

	let numeroIngresado ;
	let menor_Par ; 
	let mayor_negativo ;
	let contador = 0 ;
	let bandera_Par = true ;
	let bandera_Negativo = true ;

	while(contador < 10)
	{
		numeroIngresado = prompt("("+contador+") Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(numeroIngresado == 0)
		{
			numeroIngresado = prompt("("+contador+") ERROR ingrese un numero distinto de cero");
			numeroIngresado = parseInt(numeroIngresado);

		}
		
		if(numeroIngresado %2 == 0)
		{
			if(bandera_Par == true || numeroIngresado < menor_Par)
			{
				menor_Par = numeroIngresado;
				bandera_Par = false ;
			}
			
			/*
			if(bandera_Par == true)
			{
				menor_Par = numeroIngresado;
				bandera_Par = false;
			}else
			{
				if(numeroIngresado < menor_Par)
				{
					menor_Par = numeroIngresado;
				}
			}*/
		}

		if(numeroIngresado < 0)
		{

			if(bandera_Negativo == true || numeroIngresado > mayor_negativo)
			{
				mayor_negativo = numeroIngresado ;
				bandera_Negativo = false ;
			}

			/*
			if(bandera_Negativo == true)
			{
				mayor_negativo = numeroIngresado ;
				bandera_Negativo = false ;
			}else
			{
				if(numeroIngresado > mayor_negativo)//arreglado
				{
					mayor_negativo = numeroIngresado;
				}
			}*/	
		}
		
		contador ++;
	}

	document.write("El menor par :" +menor_Par +"</br>"+
	"El mayor negativo  :" +mayor_negativo +"</br>");
}

/**function mostrar() {
    var respuesta;
    var nombre;
    var edad;
    var estadoCivil;
    var temperatura;
    var banderaTemperatura;
    var mayorTemperatura;
    var nombreMayorTemperatura;
    var contadorViudos;
    var contadorSolterosViudosHombres;
    var contadorTemperatura;
    var acumuladorEdadHombres;
    var contadorSolterosHombres;
    var promedioSolteros;

    respuesta = "si";
    banderaTemperatura = "si";
    contadorViudos = 0;
    contadorSolterosViudosHombres = 0;
    contadorTemperatura = 0;
    acumuladorEdadHombres=0;
    contadorSolterosHombres=0;


    while (respuesta != "no") {
        nombre = prompt("ingrese el nombre: ");
        nombre = nombre.toLowerCase();
        while (nombre == "" || !(isNaN(nombre))) {
            nombre = prompt("Error. ingrese el nombre: ");
            nombre = nombre.toLowerCase();
        }

        edad = prompt("Ingrese la edad");
        edad = parseInt(edad);
        while (edad < 1 || isNaN(edad)) {
            edad = prompt("Error. Ingrese la edad");
            edad = parseInt(edad);
        }

        sexo = prompt("ingrese su sexo(f/m)");
        sexo = sexo.toLowerCase();
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Error. ingrese su sexo(f/m)");
            sexo = sexo.toLowerCase();

        }

        estadoCivil = prompt("ingrese estado civil(casado/soltero/viudo)");
        estadoCivil = estadoCivil.toLowerCase();
        while (estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo") {
            estadoCivil = prompt("ingrese estado civil(casado/soltero/viudo)");
            estadoCivil = estadoCivil.toLowerCase();
        }

        temperatura = prompt("ingrese temperatura");
        temperatura = parseFloat(temperatura);
        while (temperatura < 1 || isNaN(temperatura)) {
            temperatura = prompt("Error. Ingrese temperatura");
            temperatura = parseFloat(temperatura);
        }

        if (banderaTemperatura == "si" || temperatura > mayorTemperatura) {
            mayorTemperatura = temperatura;
            nombreMayorTemperatura = nombre;
            banderaTemperatura = "no";
        }

        if (edad > 17 && estadoCivil == "viudo") {
            contadorViudos++;

        }

        if (sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo")) {
            contadorSolterosViudosHombres++;
        }

        if (edad > 60 && temperatura > 38) {
            contadorTemperatura++;
        }

        if(sexo=="m" && estadoCivil=="soltero"){
        	contadorSolterosHombres++;
        	acumuladorEdadHombres=acumuladorEdadHombres+edad
        }
        respuesta = prompt("Desea continuar?");
    }
    promedioSolteros=acumuladorEdadHombres/contadorSolterosHombres;

    document.write("la persona con mas temperatura fue: "+ nombreMayorTemperatura+"con: "+mayorTemperatura+"<br>");
    document.write("personas mayores de edad viudos: "+ contadorViudos+"<br>");
    document.write("hombres solteros/viudos: "+ contadorSolterosViudosHombres+"<br>");
    document.write("personas de tercera edad con mas de 38 de temperatura: "+ contadorTemperatura+"<br>");
    
    if (contadorSolterosHombres==0) {
    	document.write("no hubo hombres solteros");
    }else{
    	document.write("promedio de edad de hombres solteros: "+ promedioSolteros);
    }

}
 */