
function mostrar()
{
	let precioProductoBarbijo_marcaMiguel = 100 ;
	let precioProductoBarbijo_marcaOscar = 125;
	let precioProductoJabon_marcaArgenchina = 120;
	let precioProductoJabon_marcaParaguay = 170;
	let precioProductoAlcohol_marcaAdidas = 200;
	let precioProductoAlcohol_marcaPuma = 150;
	let precioProductoAlcoholGel_marcaNike =250;
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
	if(confirmadorBarbijo == "si"){
		confirmadorBarbijo = prompt(`tenemos barbijos de la marca ${marcaMiguel_Barbijo} y sale ${precioProductoBarbijo_marcaMiguel}, quiere llevarlo? `);
		
		if(confirmadorBarbijo === "si" )
		{
			cantidadBarbijos = parseInt(prompt(`cuantas catidades quire llevar ?`));

			if(cantidadBarbijos > 1000 || cantidadBarbijos < 0)
			{
				
				while(bandera == true)
				{
					alert(`la cantidad no puede ser ${cantidadBarbijos}, por favor ingrese una cantidad que este entre 1 hasta 1000`);
					cantidadBarbijos = parseInt(prompt(`cuantas catidades quire llevar ?`));

					if(cantidadBarbijos <1000 && cantidadBarbijos >0)
					{

						bandera = false ;
					}
				}
				bandera = true ;
				alert(`usted compro ${cantidadBarbijos} de cantidad`);
			}else 
			{
				if(cantidadBarbijos <=1000 && cantidadBarbijos >0)
				{
					confirmadorBarbijo = "";
					alert(`usted compro ${cantidadBarbijos} de cantidad`);
				}
			}
		}else
		{
			confirmadorBarbijo = prompt(`tenemos barbijos de la marca ${marcaOscar_Barbijo} y sale ${precioProductoBarbijo_marcaOscar}, quiere llevarlo? `);
			if(confirmadorBarbijo === "si")
			{
				cantidadBarbijos = parseInt(prompt(`cuantas catidades quire llevar ?`));

			if(cantidadBarbijos > 1000 || cantidadBarbijos < 0)
			{
				
				while(bandera == true)
				{
					alert(`la cantidad no puede ser ${cantidadBarbijos}, por favor ingrese una cantidad que este entre 1 hasta 1000`);
					cantidadBarbijos = parseInt(prompt(`cuantas catidades quire llevar ?`));

					if(cantidadBarbijos <1000 && cantidadBarbijos >0)
					{

						bandera = false ;
					}
				}
				bandera = true ;
				alert(`usted compro ${cantidadBarbijos} de cantidad`);
			}else 
			{
				if(cantidadBarbijos <=1000 && cantidadBarbijos >0)
				{
					confirmadorBarbijo = "";
					alert(`usted compro ${cantidadBarbijos} de cantidad`);
				}
			}

			}else
			{
				alert("no tenemos mas marcas de barbijos");
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
