

function mostrar() {
	
	let acumuladorAlcoholMas_barato;	
	let bandera_alcoholBarato = true ;
	let precioAlcoholMas_barato = 0;
	let fabricante_alcoholBarato= "";
	

	let acumulador_barbijo;	
	let acumulador_jabon ;

	let contador_alcohol;
	let contador_barbijo ;
	let contador_jabon ;

	let contador = 0;
	let tipoIngresado = "";
	let precioIngresado = 0;
	let unidadesIngresadas = 0;
	let marcaIngresada = "";
	let fabricanteIngresado = "";



	while(contador < 5)
	{
		tipoIngresado = prompt("Ingrese el tipo de prodiucto (barbijo , jabon , alcohol)");
		while (tipoIngresado != "barbijo" || tipoIngresado != "jabon" || tipoIngresado != "alcohol")
		{
			tipoIngresado = prompt("ERROR !!!,Ingrese el tipo de prodiucto (barbijo , jabon , alcohol)");
		}

		precioIngresado = prompt("Ingrese precio , no puede ser 0 o negativo y no debe superar las 1000 unidades");
		precioIngresado = parseInt(precioIngresado);

		while(precioIngresado >101 && precioIngresado < 301)
		{
			precioIngresado = prompt("ERROR !!! ,Ingrese precio , no puede ser 0 o negativo y no debe superar las 1000 unidades");
			precioIngresado = parseInt(precioIngresado);

		}

		unidadesIngresadas = prompt("Ingrese cantidad de unidades , no puede ser 0 o negativo y no debe superar las 1000 unidades");
		unidadesIngresadas = parseInt(unidadesIngresadas);

		while(unidadesIngresadas <= 0 || unidadesIngresadas > 1000)
		{
			unidadesIngresadas = prompt("ERROR !!! , Ingrese cantidad de unidades , no puede ser 0 o negativo y no debe superar las 1000 unidades");
			unidadesIngresadas = parseInt(unidadesIngresadas);
		}

		marcaIngresada = prompt("Ingrese nombre de la marca ");
		fabricanteIngresado = prompt("Ingrese nombre del fabricante");
		
		switch(tipoIngresado)
		{
			case "barbijo":
			case "jabon":
			
			case "alcohol"://A
				if(bandera_alcoholBarato == true || precioIngresado < precioAlcoholMas_barato);
				{
					precioAlcoholMas_barato = precioIngresado ;
					acumuladorAlcoholMas_barato = unidadesIngresadas ;
					fabricante_alcoholBarato = fabricanteIngresado ;
					bandera_alcoholBarato = false ;
				}

		}
	}


}
/**Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

/**let precioProductoBarbijo_marcaMiguel = 100;
	let precioProductoBarbijo_marcaOscar = 125;
	let precioProductoJabon_marcaArgenchina = 120;
	let precioProductoJabon_marcaParaguay = 170;
	let precioProductoAlcohol_marcaAdidas = 200;
	let precioProductoAlcohol_marcaPuma = 150;
	let precioProductoAlcoholGel_marcaNike = 250;
	let precioProductoAlcoholGel_marcaAxe = 300;
	let precioProductoPapel_marcaPringles = 150;
	let precioProductoPapel_marcaPan = 200;
	let marcaMiguel_Barbijo = "marcaMiguel";
	let marcaOscar_Barbijo = "marcaOscar";
	let marcaArgenchina_Jabon = "marcaArgenchina";
	let marcaParaguay_Jabon = "marcaParaguay";
	let marcaAdidas_Alcohol = "marcaAdidas";
	let marcaPuma_Alcohol = "marcaPuma";
	let marcaNike_AlcoholGel = "marcaNike";
	let marcaAxe_AlcoholGel = "marcaAxe";
	let marcaPringles_Papel = "marcaPringles";
	let marcaPan_Papel = "marcaPan";
	let marca = "";
	let confirmadorBarbijo = "";
	let confirmadorJabon = "";
	let confirmadorAlcohol = "";
	let confirmadorAlcoholGel = "";
	let confirmadorPapel = "";
	let cantidadBarbijos = 0;
	let cantidadJabon = 0;
	let cantidadAlcohol = 0;
	let cantidadAlcoholGel = 0;
	let cantidadPapel = 0;
	let bandera = true;

	alert("Tenomos 5 Productos");
	//primero mostrar los productos , luego validarlos , 

	confirmadorBarbijo = prompt("quiere llevar barbijos");
	if (confirmadorBarbijo == "si") 
	{
		confirmadorBarbijo = prompt(`tenemos barbijos de la marca ${marcaMiguel_Barbijo} y cuesta ${precioProductoBarbijo_marcaMiguel}, quiere llevarlo? `);

		if (confirmadorBarbijo === "si") 
		{
			cantidadBarbijos = parseInt(prompt(`cuantas catidades quiere llevar ?`));

			if (cantidadBarbijos > 1000 || cantidadBarbijos < 0) 
			{

				while (bandera == true) 
				{
					alert(`la cantidad no puede ser ${cantidadBarbijos}, por favor ingrese una cantidad que este entre el 1 y 1000`);
					cantidadBarbijos = parseInt(prompt(`cuantas catidades quire llevar ?`));

					if (cantidadBarbijos < 1000 && cantidadBarbijos > 0) 
					{

						bandera = false;
					}
				}
				bandera = true;
				alert(`usted compro ${cantidadBarbijos} de cantidad`);
			} else 
			{
				if (cantidadBarbijos <= 1000 && cantidadBarbijos > 0) 
				{
					confirmadorBarbijo = "";
					alert(`usted compro ${cantidadBarbijos} de cantidad`);
				}
			}
		} else 
		{
			confirmadorBarbijo = prompt(`tenemos barbijos de la marca ${marcaOscar_Barbijo} y cuesta ${precioProductoBarbijo_marcaOscar}, quiere llevarlo? `);
			if (confirmadorBarbijo === "si") 
			{
				cantidadBarbijos = parseInt(prompt(`cuantas catidades quiere llevar ?`));

				if (cantidadBarbijos > 1000 || cantidadBarbijos < 0) 
				{

					while (bandera == true) 
					{
						alert(`la cantidad no puede ser ${cantidadBarbijos}, por favor ingrese una cantidad que este entre el 1 y 1000`);
						cantidadBarbijos = parseInt(prompt(`cuantas catidades quire llevar ?`));

						if (cantidadBarbijos < 1000 && cantidadBarbijos > 0) 
						{

							bandera = false;
						}
					}
					bandera = true;
					alert(`usted compro ${cantidadBarbijos} de cantidad`);
				} else 
				{
					if (cantidadBarbijos <= 1000 && cantidadBarbijos > 0) 
					{
						confirmadorBarbijo = "";
						alert(`usted compro ${cantidadBarbijos} de cantidad`);
					}
				}

			} else 
			{
				alert("no tenemos mas marcas de barbijos");
			}

		}
	}

	confirmadorJabon = prompt("Quiere comprar jabon ?");
	if (confirmadorJabon === "si") 
	{
		confirmadorJabon = prompt(`tenemos de la marca ${marcaArgenchina_Jabon} y cuesta ${precioProductoJabon_marcaArgenchina} ,lo quiere llevar ??`);
		if (confirmadorJabon == "si") 
		{

			cantidadJabon = parseInt(prompt("Cuantas unidades quiere llevar??"));
			if (cantidadJabon > 1000 && cantidadJabon <= 0);
			{
				while (bandera == true) 
				{
					alert(`la cantidad no puede ser ${cantidadJabon}, por favor ingrese una cantidad que este entre el 1 y 1000`);
					cantidadJabon = parseInt(prompt("Cuantas unidades quiere llevar??"));
					if (cantidadJabon <= 1000 && cantidadJabon > 0) {
						bandera = false;

					}
				}
				bandera = true;
				alert(`ustded compro ${cantidadJabon} unidades de jabon marca ${marcaArgenchina_Jabon}`);
			}
		} else 
		{
			confirmadorJabon = prompt(`o tambien tenemos de la marca ${marcaParaguay_Jabon} y cuesta ${precioProductoJabon_marcaParaguay} quiere llevarla ??`);
			if (confirmadorJabon == "si") 
			{
				cantidadJabon = parseInt(prompt("cuantas unidades quiere llevar ??"));
				if (cantidadJabon > 1000 || cantidadJabon <= 0) 
				{
					while (bandera == true) 
					{
						alert(`la cantidad no puede ser ${cantidadJabon}, por favor ingrese una cantidad que este entre el 1 y 1000`)
						cantidadJabon = parseInt(prompt("cuantas unidades quiere llevar ??"));
						if (cantidadJabon <= 1000 && cantidadJabon > 0) 
						{
							bandera = false;
						}
					}
				}
				bandera = true;
				alert(`usted compro ${cantidadJabon} unidades de jabon marca ${marcaParaguay_Jabon}`);
			}
		}
	}
	confirmadorAlcohol = prompt("Quiere comprar alcohol ??");
	if(confirmadorAlcohol == "si")
	{
		confirmadorAlcohol = prompt(`tenemos la marca ${marcaAdidas_Alcohol} y cuesta ${precioProductoAlcohol_marcaAdidas} la quiere llevar ??`);
		if(confirmadorAlcohol == "si")
		{
			cantidadAlcohol = parseInt(prompt("Cuantas unidades quiere llevar ??"));
			if(cantidadAlcohol >1000 || cantidadAlcohol <=0)
			{
				while(bandera == true)
				{
					alert(`La cantidad no puede ser ${cantidadAlcohol} , por favor ingrese una cantidad que este entre el 1 y 1000`);
					cantidadAlcohol = parseInt(prompt("Cuantas unidades quiere llevar ??"));

					if(cantidadAlcohol <= 1000 && cantidadAlcohol >0)
					{
						bandera = false;
					}
				}
			}
			bandera = true ;
			alert(`usted compro ${cantidadAlcohol} cantidad de alcohol de la marca ${marcaAdidas_Alcohol}`);
		}else 
		{
			confirmadorAlcohol = prompt(`o tambien tenemos la marca ${marcaPuma_Alcohol} y cuesta ${precioProductoAlcohol_marcaPuma} la quiere llevar ??`);
			if(confirmadorAlcohol == "si")
			{
				cantidadAlcohol = parseInt(prompt("cuantas unidades quiere llevar ??"));
	
				if(cantidadAlcohol> 1000 || cantidadAlcohol <=0)
				{
					while(bandera == true)
					{
						alert(`La cantidad no puede ser ${cantidadAlcohol} , por favor ingrese una cantidad que este entre 1 y 1000`);
						cantidadAlcohol = parseInt(prompt("Cuantas unidades quiere llevar ??"));
	
						if(cantidadAlcohol <=1000 && cantidadAlcohol >0)
						{
							bandera = false ;
						}
					}
				}
				bandera = true ;
				alert(`Usted compro ${cantidadAlcohol} unidades de alcohol de la marca ${marcaPuma_Alcohol}`);
			}
		}

	}
	confirmadorAlcoholGel = prompt("quiere llevar alcohol en gel ??")
	if(confirmadorAlcoholGel == "si")
	{
		confirmadorAlcoholGel = prompt(`tenemos la marca ${marcaNike_AlcoholGel} y cuesta ${precioProductoAlcoholGel_marcaNike}, la quiere llevar ??`);
		if(confirmadorAlcoholGel == "si")
		{
			cantidadAlcoholGel = parseInt(prompt("Cuantas unidades quiere llevar ??"));
			if(cantidadAlcoholGel >1000 || cantidadAlcoholGel <0)
			{
				while(bandera == true )
				{
					alert(`La cantidad no puede ser ${cantidadAlcoholGel} , por favor ingrese una cantidad que este entre 1 y 1000`);
					cantidadAlcoholGel = parseInt(prompt("Cuantas unidades quiere llevar ??"));
					if(cantidadAlcoholGel <=1000 && cantidadAlcoholGel >0)
					{
						bandera = false ;
					}
				}
			}
			bandera = true ;
			alert(`Usted compro ${cantidadAlcoholGel} unidades de alcohol de la marca ${marcaNike_AlcoholGel}`);
		}else
		{
			confirmadorAlcoholGel = prompt(`o tambien tenemos la marca ${marcaAxe_AlcoholGel} y cuesta ${precioProductoAlcoholGel_marcaAxe} , la quiere llevar ??`);
			if(confirmadorAlcoholGel == "si")
			{
				cantidadAlcoholGel = parseInt(prompt("Cuantas unidades quiere llevar ??"));

				if(cantidadAlcoholGel >1000 || cantidadAlcoholGel <0)
				{
					while(bandera == true)
					{
						alert(`La cantidad no puede ser ${cantidadAlcoholGel} , por favor ingrese una cantidad que este entre 1 y 1000`);
						cantidadAlcoholGel = parseInt(prompt("Cuantas unidades quiere llevar ??"));
						if(cantidadAlcoholGel <1000 && cantidadAlcoholGel >0)
						{
							bandera = false;
						}
					}
				}
				bandera = true ;
				alert(`Usted compro ${cantidadAlcoholGel} unidades de alcohol de la marca ${marcaAxe_AlcoholGel}`)
			}
		}
		
	}
	confirmadorPapel = prompt("Quiere llevar papel??");
	if(confirmadorPapel == "si")
	{
		confirmadorPapel = prompt(`Tenemos la marca ${marcaPringles_Papel} y cuesta ${precioProductoPapel_marcaPringles} , la quiere llevar ??`);

		if(confirmadorPapel == "si")
		{
			cantidadPapel = parseInt(prompt("cuantas unidades quiere llevar ?"));
			if(cantidadPapel >1000 || cantidadPapel <0)
			{
				while(bandera == true)
				{
					alert(`La cantidad no puede ser ${cantidadPapel} , por favor ingrese una cantidad que este entre 1 y 1000`);
					cantidadPapel = parseInt(prompt("cuantas cantidades quiere llevar ?"));
					if(cantidadPapel <=1000 && cantidadPapel >0)
					{
						bandera = false ;
					}
				}
			}
			bandera = true ;
			alert(`usted compro ${cantidadPapel} unidades de la marca ${marcaPringles_Papel}`);
		}else
		{
			confirmadorPapel = prompt(`o tambien tenemos la marca ${marcaPan_Papel} y cuesta ${precioProductoPapel_marcaPan} , la quiere llevar ??`);

			if(confirmadorPapel == "si")
			{
				cantidadPapel = parseInt(prompt("Cuantas unidades quiere llevar ??"));

				if(cantidadPapel >1000 || cantidadPapel <0)
				{
					while(bandera = true)
					{
						alert(`La cantidad de unidades no puede ser ${cantidadPapel} , por favor ingrese una cantidad que este entre 1 y 1000`);
						cantidadPapel = parseInt(prompt("Cuantas unidades quiere llevar ??"));
						if(cantidadPapel <=1000 && cantidadPapel >0)
						{
							bandera = true;							
						}
					}
				}
				bandera = true;
				alert(`Usted compro ${cantidadPapel} unidades de la marca ${marcaPan_Papel}`);
			}
		}
	} */

	/*
repetir 5 veces 
	pedir tipo validar (barbijo-jabon-alcohol)
	pedir precio validar (100 y 300 )
	pedir catidad y validar (1-1000)
	pedir marca 
	pedir fabticante 

	preguntar sie el tipo es alcohol
		preguntar si el alcochol es el mas barato
		(x)	guardar cantidad de unidades del mas barato 
		(x)	guardar el fabricante del mas barato 
			guardar el precio del mas barato 
		fin si
	fin si 


	preguntar 
		case	si es jabon
			contar vaces que se compro jabon
			acumulo las cantidades  
		
		case	si es barbijo 
			contar vaces que se compro jabon
			acumulo las cantidades  

		case	si es alcohol 
			contar vaces que se compro jabon
			acumulo las cantidades  
	fin 

termino de repetir

preguntar si la cantidad de jabones es mayor a la cantidad de barbijos y ademas a la cantiadd de 
alcoholes 

	calculo promedio para jabones 
		sino la cantidad de babijos es mayor 
			calculo promedio para barbijos 
				sino 
					calculo el promedio de alcoholes 
fin preguntar*/

/**
	let acumulador_barbijo =0; 
	let acumulador_jabon = 0;
	let acumulador_alcohol =0;
	let contador_barbijo = 0; 
	let contador_jabon = 0;
	let contador_alcohol = 0;
	
	let precio_alcoholBarato = 0;
	let fabricante_alcoholBarato ;
	let cantidad_alcoholBarato = 0;
	let bandera_alcoholBarato = true ;
	let fabricante ;
	
	let mensaje = "";
	let marca = "";
	let tipo ="";
	let mayorTipo = "";
	
	let precio = 0;
	let cantidad = 0;
	let contador = 0 ;
	let mayorUnidades = 0;
	let promedioCompra = 0;

	while(contador < 5)
	{
		tipo = prompt("Ingrese tipo de producto (barbijo , alcohol  o jabon)");
		while(tipo != "barbijo" &&  tipo != "alcohol" && tipo != "jabon" )
		{
			tipo = prompt("ERROR , ingrese tipo (barbijo , alcohol  o jabon)");
		}

		precio  = prompt("Ingrese precio entre 100 y 300");
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
			precio  = prompt("ERROR ,Ingrese precio entre 100 y 300");
			precio = parseInt(precio);
		}

		cantidad = prompt ("Ingre la cantidad que quiere llevar ");
		cantidad = parseInt(cantidad);
		while (cantidad < 1 || cantidad > 1000)
		{
			cantidad = prompt ("ERROR ,Ingre la cantidad que quiere llevar entre 1 y 1000");
			cantidad = parseInt(cantidad);
			
		}
		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante ");


		switch(tipo)
		{
			case "barbijo":
				acumulador_barbijo += cantidad ;
				contador_barbijo ++;
				break;
			case "alcohol":
				acumulador_alcohol += cantidad ;
				contador_alcohol ++;

				if(bandera_alcoholBarato == true  || precio_alcoholBarato > precio)//A
				{
					precio_alcoholBarato = precio ;
					cantidad_alcoholBarato = cantidad ;
					fabricante_alcoholBarato = fabricante ;
					bandera_alcoholBarato = false ;
				}
				break;
			case "jabon":
				acumulador_jabon += cantidad ;//c
				contador_jabon ++;
				break;
			default :
		}

		contador++;
	}
	//b
	if(acumulador_alcohol > acumulador_barbijo && acumulador_alcohol > acumulador_jabon)
	{
		mayorTipo = "alcohol";
		promedioCompra = acumulador_alcohol/ contador_alcohol ;
		mayorUnidades = acumulador_alcohol ;
	}else
	{
		if(acumulador_barbijo > acumulador_alcohol && acumulador_barbijo > acumulador_jabon)
		{
			mayorTipo = "barbijo";
			promedioCompra = acumulador_barbijo / contador_barbijo ;
			mayorUnidades = acumulador_barbijo;
		}else
		{
			if(acumulador_jabon > acumulador_alcohol && acumulador_jabon > acumulador_barbijo)
			{
				mayorTipo = "jabon";
				promedioCompra = acumulador_jabon / contador_jabon;
				mayorUnidades = acumulador_jabon ; 
			}
		}
	}

	mensaje = `
	A- Del más barato de los alcohol, la cantidad de unidades es ${cantidad_alcoholBarato} y el fabricante es ${fabricante_alcoholBarato}
	B- Del tipo con mas unidades es ${mayorTipo} y el promedio por compra es ${promedioCompra} 
	C-La cantidad de jabones en total son ${acumulador_jabon}` ;

	alert(mensaje)
	
	//MIGUEL Villalba Paez
 */