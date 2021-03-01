function mostrar()
{

  let pregunta = "si";
  let tipoProducto;
  let cantidadBolsas ;
  let precioBolsa;
  let descuento = 0;
  let precioDescuento = 0;
  let precioSinDescuento = 0;
  let mensajeA = "";
  let mensajeB = "";
  let mensajeD = "";
  let mensajeF = "";
  let acumulador_cal ;
  let acumulador_cemento ;
  let acumulador_arena ;
  let mayorTipoProducto = "";
  let productoMas_caro = "";
  let precio_cal =0;
  let precio_cemento = 0;
  let precio_arena = 0;
  let acumuladorCantidadBolsas= 0 ;

  while (pregunta == "si")
  {
    tipoProducto = prompt("ingrese el producto que quiere llevar (arena , cal , cemento)");
    while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
    {
      tipoProducto = prompt("ERROR !!!,ingrese el producto que quiere llevar (arena , cal , cemento)");
    }

    precioBolsa = prompt(`Ingrese el precio del producto ${tipoProducto} `);
    precioBolsa = parseInt(precioBolsa);
    while(precioBolsa <=0)
    {
      precioBolsa = prompt(`Ingrese el precio del producto ${tipoProducto} `);
      precioBolsa = parseInt(precioBolsa);
    }

    cantidadBolsas = prompt("Ingrese la cantiadad de bolsas ");
    cantidadBolsas = parseInt(cantidadBolsas);
    while(cantidadBolsas <= 0)
    {
      cantidadBolsas = prompt("ERROR !!!, Ingrese la cantiadad de bolsas ");
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    switch(tipoProducto)
    {
      case "arena":
        acumulador_arena += cantidadBolsas ;
        precio_arena = precioBolsa ;
      break;
      case "cal":
        acumulador_cal += cantidadBolsas ;
        precio_cal = precioBolsa ;
      break
      case "cemento":
        acumulador_cemento += cantidadBolsas ;
        precio_cemento = precioBolsa ;
      break ;
      default :
    }

    pregunta = prompt("quiere seguir comprando ??");
  }

  if(cantidadBolsas > 10 && cantidadBolsas < 30)
  {
    descuento = 15;
  }else 
  {
    if(cantidadBolsas >30)
    {
      descuento = 25 ;
    }
  }
  //a
  precioDescuento = cantidadBolsas * precioBolsa ;
  precioDescuento = precioDescuento * descuento /100 ;

  precioSinDescuento = cantidadBolsas * precioBolsa ;

  mensajeA = `el precio final con descuento es : ${precioSinDescuento} y el precio final sin descuento es : ${precioSinDescuento}`;
  //B
  if(cantidadBolsas > 10)
  {
    mensajeB = `El importe a pagar con descuento es : ${precioDescuento}`
  }else
  {
    mensajeB = `No corresponde`;
  }
  
  //d
  if(acumulador_arena > acumulador_cal && acumulador_arena > acumulador_cemento)
  {
    mayorTipoProducto = "arena";
  }else
  {
    if(acumulador_cemento > acumulador_arena && acumulador_cemento > acumulador_cal)
    {
      mayorTipoProducto = "cemento";
    }else
    {
      if(acumulador_cal > acumulador_cemento && acumulador_cal >acumulador_arena)
      {
        mayorTipoProducto = "cal";
      }
    }
  }
  mensajeD = `el tipo de producto con mas cantidad de bolsas es : ${mayorTipoProducto}`;
  //f
  if(precio_arena > precio_cal && precio_arena > precio_cemento)
  {
    productoMas_caro = "arena";
  }else
  {
    if(precio_cemento > precio_arena && precio_cemento > precio_cal)
    {
      productoMas_caro = "cemento";
    }else
    {
      if(precio_cal > precio_cemento && precio_cal > precio_arena)
      {
        productoMas_caro = "cal";
      }
    }
  }
  mensajeF = `El tipo producto mas caro es : ${productoMas_caro}`
  
  
  alert(`A- ${mensajeA} \n B- ${mensajeB} \n D-${mensajeD} \n ${mensajeF}`);
  
}
/**Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
 Tipo validad("arena";"cal";"cemento")
 Cantidad de bolsas,
 Precio por bolsa (más de cero ),
 
 Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
 Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
 a) El importe total a pagar , bruto sin descuento y...
 b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */
//Miguel Villalba Paez