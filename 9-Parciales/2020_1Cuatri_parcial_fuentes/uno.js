
function mostrar() {
	
	let productoUno = prompt("Ingrese el nombre del producto 1");
	let productoDos = prompt("Ingrese el nombre del producto 2");
	let productoTres = prompt("Ingrese el nombre del producto 3");
	let productoCuatro = prompt("Ingrese el nombre del producto 4");
	let productoCinco = prompt("Ingrese el nombre del producto 5");
//	let precioProductoUno = parseInt(prompt(`Ingrese el precio de producto ${productoUno}`));
//	let precioProductoDos = parseInt(prompt(`Ingrese el precio de producto ${productoDos}`));
//	let precioProductoTres = parseInt(prompt(`Ingrese el precio de producto ${productoTres}`));
//	let precioProductoCuatro = parseInt(prompt(`Ingrese el precio de producto ${productoCuatro}`));
//	let precioProductoCinco = parseInt(prompt(`Ingrese el precio de producto ${productoCinco}`));
	
	let cantidadMarcas = parseInt(prompt("cuantas marcas quiere para el producto "+productoUno));
	let marcaUno ="";
	for (i = 0; i < cantidadMarcas ; i ++)
	{
		marcaUno = prompt("nombre de la marca "+i);
	}
	

	alert("Ingrese los nombre de los productos y sus precios ");



	



	 

	






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