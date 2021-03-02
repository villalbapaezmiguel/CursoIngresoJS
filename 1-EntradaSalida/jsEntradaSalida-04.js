/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let pregunta = "si";
	let nombreProducto ;
	let tipoProducto = "";
	let importeProducto ;
	let tipoDeStock ;
	let procedencia ;
	let peso ;
	let nombreMasPesado_comestible ;
	let acumuladorPesado_comestible = 0;
	let nombreProductoMas_caro = "";
	let productoMasCaro = 0;
	let nombreMasBarato_elaborados = "";
	let acumuladorImporteProducto = 0;
	let contadorPrecio = 0;
	let promedioPrecioStock = 0;


	while(pregunta == "si")
	{
		tipoProducto = prompt("ingrese tipo de producto (limpieza , comestible , otros) ");
		tipoProducto = tipoProducto.toLocaleLowerCase();
		while(tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros")
		{
			tipoProducto = prompt("ERROR , ingrese tipo de producto (limpieza , comestible , otros) ");
			tipoProducto = tipoProducto.toLocaleLowerCase();
		}
		nombreProducto = prompt(`Ingrese el nombre del producto ${tipoProducto}`);
		nombreProducto = nombreProducto.toLocaleLowerCase();
		while(isNaN(nombreProducto) == false)
		{
			nombreProducto = prompt(`ERROR , Ingrese el nombre del producto ${tipoProducto}`);
			nombreProducto = nombreProducto.toLocaleLowerCase();	
		}

		tipoDeStock = prompt(`Ingrese tipo destock("Pedido","sin stock", "con stock")`);
		tipoDeStock = tipoDeStock.toLocaleLowerCase();
		while(tipoDeStock != "Pedido" && tipoDeStock != "sin stock" && tipoDeStock != "con stock")
		{
			tipoDeStock = prompt(`ERROR , Ingrese tipo destock("Pedido","sin stock", "con stock")`);
			tipoDeStock = tipoDeStock.toLocaleLowerCase();	
		}


		importeProducto = prompt("Ingrese el importe del producto ,mayor a 1 y no mayor 1000 pesos")
		importeProducto = parseInt(importeProducto);
		while(importeProducto >1000 || importeProducto <1)
		{
			importeProducto = prompt(`ERROR ,Ingrese el importe del producto ,mayor a 1 y no mayor 1000 pesos`);
			importeProducto = parseInt(importeProducto);
		}

		procedencia = prompt(`Ingrese procedencia (importado, nacional, elaborado)`);
		procedencia = procedencia.toLocaleLowerCase();

		while(procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado" )
		{
			procedencia = prompt(`ERROR , Ingrese procedencia (importado, nacional, elaborado)`);
			procedencia = procedencia.toLocaleLowerCase();
		
		}

		peso = prompt("Ingrese peso no mayor a 30 k");
		peso = parseInt(peso);
		while(peso < 0 || peso >30)
		{
			peso = prompt("ERROR , Ingrese peso no mayor a 30 k");
			peso = parseInt(peso);
		}

		switch(procedencia)
		{
			case "elaborado":
				break;
			case "importado":
				break;
			case "nacional":
				break;
			default :
		}

		//a
		if(tipoProducto == "comestible" || peso > acumuladorPesado_comestible)
		{
			acumuladorPesado_comestible = peso ;
			nombreMasPesado_comestible = nombreProducto ;
		}

		//B
		if(importeProducto > productoMasCaro)
		{
			nombreProductoMas_caro = nombreProducto ;
		}

		//c
		if(importeProducto < productoMasCaro)
		{
			nombreMasBarato_elaborados = nombreProducto ;
		}
		
		//d
		if(procedencia == "nacional" && tipoDeStock == "con stock")
		{
			acumuladorImporteProducto = importeProducto ;
			contadorPrecio ++;
			promedioPrecioStock = acumuladorImporteProducto /contadorPrecio ; 
		}

		pregunta = prompt("quiere continuar ??");
	}

}
/**
 * pedir mercaderia hasta que el usuario quiera (whille)
  
	validar tipo de productos (limpieza , comestible , otros)

	condicional de no mayor a 1000 pesos

	validar TipoDeStock("Pedido","sin stock", "con stock")
	
	validar procedencia (importado, nacional, elaborado)

	condicional Peso (no mayor a 30 kilos)
  
 */



/**Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
TipoDeStock("Pedido","sin stock", "con stock")
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a)  el NOMBRE del mas pesado de los comestibles
b)  el NOMBRE del  mas caro de todos los productos
c)  el NOMBRE del  mas barato de los elaborados
d)  de los Productos nacionales con stock , el promedio de precio
e)  el tipo de mercadería  que mas aparece
f)  el porcentaje de productos elaborados por sobre el total
g)  el promedio de pesos por cada tipo ingresado
h)  cual es el tipo con mayor promedio de pesos
i)  el importe total de la compra para productos nacionales que pesen entre 10 y 20 kg (ambos inclusive)
h)  De los tipos de stock , cual tiene mas productos nacionales
 */

