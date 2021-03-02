/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	let mascotas ;
	let tipoPelaje ;
	let edad ;
	let raza ;
	let peso ;
	let nombre ;
	let estadoClinico ;
	let temmperaturaCorporal ;
	let perroMas_pesado = 0;
	let banderaPerro_masPesado = true;
	let ultimoOta_cosa = "";
	let animasSinPelo_temperaturaBaja = 0;
	let perroEnfermo = 0; 
	let acumuladorTemperaturaCorporalGato = 0;
	let acumuladorTemperaturaCorporalPerro = 0;
	let acumuladorTemperaturaCorporalOtra_cosa = 0;
	let promediomayorTemperatura_gato =0;
	let promediomayorTemperatura_perro = 0;
	let promediomayorTemperatura_otraCosa = 0;
	let mascotaPromedioMayorTemperatura  = "";
	let contadorTemperatura_gato =0;
	let contadorTemperatura_perro =0;
	let contadorTemperatura_otraCosa =0;
	let nombreMasLiviano = "";
	let mensaje = "";

	let contador = 0;
	while(contador < 5)
	{

			mascotas = prompt("su mascota es un  perro , gato o otra cosa");
		while(mascotas != "perro" && mascotas != "gato" && mascotas != "otra cosa")
		{
			mascotas = prompt("ERROR ,su mascota es un  perro o gato");
		}

		nombre = prompt("ingrese nombre de su mascota");

		tipoPelaje = prompt("ingrese el tipo pelaje (corto, largo , sin pelo)");
		while(tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo" )
		{
			tipoPelaje = prompt("ERROR ,ingrese el tipo pelaje (corto, largo , sin pelo)");
		}

		edad = prompt(`edad de la ${mascotas}`);
		edad = parseInt(edad);
		while(isNaN(edad) == true)
		{
			edad = prompt(`ERROR , edad de la ${mascotas}`);
			edad = parseInt(edad);
			
		}

		raza = prompt("ingrese el nombre de la raza");
		
		peso = prompt("ingrese peso");
		peso = parseInt(peso);
		while(isNaN(peso) == true || peso < 150 && peso >1)
		{
			peso = prompt("ERROR, ingrese peso");
			peso = parseInt(peso);
		}

		estadoClinico = prompt("ingrese esatdo clinico (enfermo,internado o adopcion) ");
		estadoClinico = estadoClinico.toLowerCase();//hacerlo para todo
		while(estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion")
		{
			estadoClinico = prompt("ERROR, ingrese esatdo clinico (enfermo,internado o adopcion) ");
		}

		temmperaturaCorporal = prompt("ingrese temperatura corporal ");
		temmperaturaCorporal = parseInt(temmperaturaCorporal);
		while(isNaN(temmperaturaCorporal) == true || temmperaturaCorporal <1 || temmperaturaCorporal>80)//clase abel
		{
			temmperaturaCorporal = prompt("ERROR ,ingrese temperatura corporal ");
			temmperaturaCorporal = parseInt(temmperaturaCorporal);
		}

		switch(mascotas)
		{
			case "gato":
				acumuladorTemperaturaCorporalGato = temmperaturaCorporal ;
				contadorTemperatura_gato ++;
				promediomayorTemperatura_gato = acumuladorTemperaturaCorporalGato / contadorTemperatura_gato;
				break ;
			case "perro":
				acumuladorTemperaturaCorporalPerro = temperaturaCorporal ;
				contadorTemperatura_perro ++;
				promediomayorTemperatura_perro = acumuladorTemperaturaCorporalPerro / contadorTemperatura_perro ;

				break;
			case "otra cosa":
				acumuladorTemperaturaCorporalOtra_cosa = temperaturaCorporal ;
				contadorTemperatura_otraCosa ++;
				promediomayorTemperatura_otraCosa = acumuladorTemperaturaCorporalOtra_cosa / contadorTemperatura_otraCosa ;
				break;
				default :
		}

		//A
		if(banderaPerro_masPesado == true || peso  > perroMas_pesado)
		{
			perroMas_pesado	 = peso ;
			banderaPerro_masPesado = false;
		}

		//B
		if(estadoClinico == "enfermo")
		{
			perroEnfermo ++;
		}

		//c
		if(mascotas == "otra cosa")
		{
			ultimoOta_cosa = nombre ;
		}

		//d 
		if(tipoPelaje == "sin pelo" || temmperaturaCorporal <  animasSinPelo_temperaturaBaja )
		{
			animasSinPelo_temperaturaBaja = temmperaturaCorporal ;
		}

		contador ++;
	}

	//E
	if(promediomayorTemperatura_gato > promediomayorTemperatura_perro && promediomayorTemperatura_gato > promediomayorTemperatura_otraCosa)
	{
		mascotaPromedioMayorTemperatura = "gato";
	}else
	{
		if(promediomayorTemperatura_perro > promediomayorTemperatura_gato && promediomayorTemperatura_perro > promediomayorTemperatura_otraCosa)
		{
			mascotaPromedioMayorTemperatura = "perro";
		}else
		{
			if(promediomayorTemperatura_otraCosa > promediomayorTemperatura_gato && promediomayorTemperatura_otraCosa > promediomayorTemperatura_perro)
			{
				mascotaPromedioMayorTemperatura = "otra cosa";
			}	
		}	
	}

	 
	mensaje = `
	A- El perro mas pesado pesa ${perroMas_pesado}
	B- El porcentaje de enfermos sobre el total de mascotas es ${perroEnfermo}
	C- El nombre de la ultima mascota de tipo "otra cosa" es ${ultimoOta_cosa}
	D- El animal sin pelo con menor temperatura corporal es : ${animasSinPelo_temperaturaBaja}
	E- Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal es : ${mascotaPromedioMayorTemperatura}`;

	alert(mensaje);

}
/**Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano

 */
//Miguel Villalba Paez


