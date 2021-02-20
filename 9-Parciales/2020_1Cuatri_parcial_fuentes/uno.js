
function mostrar() {
	
	let productoUno;
	let productoDos ;
	let productoTres ;
	let productoCuatro ;
	let productoCinco ;
	let marcaUno_ProductoUno = "";
	let marcaDos_ProductoUno = "";
	let marcaUno_ProductoDos = "";
	let marcaDos_ProductoDos = "";
	let marcaUno_ProductoTres = "";
	let marcaDos_ProductoTres = "";
	let marcaUno_ProductoCuatro = "";
	let marcaDos_ProductoCuatro = "";
	let marcaUno_ProductoCinco = "";
	let marcaDos_ProductoCinco = "";
	let precioProductoUno_marcaUno = 0;
	let precioProductoUno_marcaDos = 0; 
	let precioProductoDos_marcaUno = 0;
	let precioProductoDos_marcaDos = 0;
	let precioProductoTres_marcaUno = 0;
	let precioProductoTres_marcaDos = 0;
	let precioProductoCuatro_marcaUno = 0;
	let precioProductoCuatro_marcaDos = 0;
	let precioProductoCinco_marcaUno = 0;
	let precioProductoCinco_marcaDos = 0;
	let cantidadProductoUno = 0;
	let cantidadProductoDos = 0;
	let cantidadProductoUnoTres = 0;
	let cantidadProductoUnoCuatro = 0;
	let cantidadProductoUnoCinco = 0;
	let confirmadorProductoUno = "";
	let confirmadorProductoDos = "";
	let confirmadorProductoTres = "";
	let confirmadorProductoCuatro = "";
	let confirmadorProductoCinco = "";

	//nombres de los productos
	productoUno = prompt("Ingrese el nombre del producto 1");
	productoDos = prompt("Ingrese el nombre del producto 2");
	productoTres = prompt("Ingrese el nombre del producto 3");
	productoCuatro = prompt("Ingrese el nombre del producto 4");
	productoCinco = prompt("Ingrese el nombre del producto 5");
	//nombres de las marcas 
	marcaUno_ProductoUno = prompt(`Ingrese la marca del producto ${productoUno} `);
	marcaDos_ProductoUno = prompt(`Ingrese la marca del producto ${productoUno} `);
	marcaUno_ProductoDos = prompt(`Ingrese la marca del producto ${productoDos} `);
	marcaDos_ProductoDos = prompt(`Ingrese la marca del producto ${productoDos} `);
	marcaUno_ProductoTres = prompt(`Ingrese la marca del producto ${productoTres} `);
	marcaDos_ProductoTres = prompt(`Ingrese la marca del producto ${productoTres} `);
	marcaUno_ProductoCuatro = prompt(`Ingrese la marca del producto ${productoCuatro} `);
	marcaDos_ProductoCuatro = prompt(`Ingrese la marca del producto ${productoCuatro} `);
	marcaUno_ProductoCinco = prompt(`Ingrese la marca del producto ${productoCinco} `);
	marcaDos_ProductoCinco = prompt(`Ingrese la marca del producto ${productoCinco} `);
	
	//precios de las marcas 
	precioProductoUno_marcaUno = parseInt(prompt(`Ingrese el precio de producto ${productoUno}`));
	precioProductoUno_marcaDos = parseInt(prompt(`Ingrese el precio de producto ${productoUno}`));
	precioProductoDos_marcaUno = parseInt(prompt(`Ingrese el precio de producto ${productoDos}`));
	precioProductoDos_marcaDos = parseInt(prompt(`Ingrese el precio de producto ${productoDos}`));
	precioProductoTres_marcaUno = parseInt(prompt(`Ingrese el precio de producto ${productoTres}`));
	precioProductoTres_marcaDos = parseInt(prompt(`Ingrese el precio de producto ${productoTres}`));
	precioProductoCuatro_marcaUno = parseInt(prompt(`Ingrese el precio de producto ${productoCuatro}`));
	precioProductoCuatro_marcaDos = parseInt(prompt(`Ingrese el precio de producto ${productoCuatro}`));
	precioProductoCinco_marcaUno = parseInt(prompt(`Ingrese el precio de producto ${productoCinco}`));
	precioProductoCinco_marcaDos = parseInt(prompt(`Ingrese el precio de producto ${productoCinco}`));
	
	confirmadorProductoUno = prompt(`Quiere comprar ${productoUno} ??`);
	


	



	



	 

	






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