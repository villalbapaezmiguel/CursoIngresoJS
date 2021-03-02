function mostrar()
{
	let nombre ;	
	let edad ;	
	let sexo ;
	let esatadoCivil ;
	let temperatura ;
	let pregunta = "si";
	let nombre_temperaturaAlta ;
	let temperaturaMas_alta = 0;
	let bandera_Temperatura = true ;
	let contadorViudos = 0;
	let contadorSoltero = 0;
	let contadorTemperatura_terceraEdad = 0;
	let acumulador_edad_soltero=0;
	let promedioEdad_soltero = 0;
	let mensaje = "";

	while(pregunta == "si")
	{
		nombre = prompt("Ingrese nombre");
		while(isNaN(nombre) == false )
		{
			nombre = prompt("ERROR , Ingrese nombre");
		}

		edad = prompt("Ingrese edad ");
		edad = parseInt(edad);
		while(isNaN(edad) == true )
		{
			edad = prompt("ERROR , Ingrese edad ");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo (f o m) ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR , Ingrese su sexo (f o m) ");
		}
		
		esatadoCivil = prompt("Ingrese su esatado civil (soltero, casado o viudo) ");
		while(esatadoCivil != "soltero" && esatadoCivil != "casado" && esatadoCivil != "viudo" )
		{
			esatadoCivil = prompt("ERROR , Ingrese su esatado civil (soltero, casado o viudo) ");
		}
		
		temperatura = prompt("Ingrese la temperatura");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) == true )
		{
			temperatura = prompt("ERROR , Ingrese la temperatura");
			temperatura = parseInt(temperatura);
		}
		//a
		if(bandera_Temperatura == true || temperatura > temperaturaMas_alta)
		{
			nombre_temperaturaAlta = nombre ;
			temperaturaMas_alta = temperatura ;
			bandera_Temperatura = false ;
		}

		switch(esatadoCivil)
		{
			case "casado":
			case "soltero"://c , b y e
				contadorSoltero ++;
				acumulador_edad_soltero = edad ;
				promedioEdad_soltero = acumulador_edad_soltero /contadorSoltero ;
				break ;
			case "viudo"://b
				contadorViudos ++;
				break ;
		}
		//d
		if(edad > 60 && temperatura > 38)
		{
			contadorTemperatura_terceraEdad ++;
		}

		pregunta = prompt("quiere ingresar mas psajeros ??");
	}

	mensaje = `
	A- El nombre de la persona con mas temperatura es : ${nombre_temperaturaAlta}
	B- La cantidad de mayores de edad viudos es : ${contadorViudos}
	C- La cantidad de hombres que hay solteros es: ${contadorSoltero} viudos es : ${contadorViudos}
	D- La cantidad de personas de la tercera edad que tienen mas de 38 de temperatura es : ${contadorTemperatura_terceraEdad}
	E- El promedio de edad entre los hombres solteros es :${promedioEdad_soltero}`;

	alert(mensaje);
	//probar
	




}
/**Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

/**
 tomar datos tipo (nombre, edad , sexo(f o m) esatado  )
	dentro de switch civil(soltero , casado , viudo) y su temperatura

 A- el tipo nombre con la temperatura mas alta 

 B- la cantidad de mayores de edad estado civil(viudos)

 C- la cantidad de estado civil(viudos y solteros)
 
 D- condicional 
		si tiene mas de 60 años es una persona de tercera edad  y su temperatura es mas de 38 
		mostrar 
 E- mostrar el promedio de edad de estado civik (soltero)
		
 */