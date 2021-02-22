function mostrar()
{
    let precio ;
    let descuento ;
    let precioFinal ;

    precio = prompt("Ingrese el precio");
    descuento = prompt("Ingrese el pocentaje de descuento");
    precio = parseInt(precio);
    descuento = parseInt(descuento);

    precioFinal = precio * descuento / 100 ;
    precioFinal = precio - precioFinal;


    document.getElementById("elPrecioFinal").value =`el precio era ${precio} y tuvo un descuento del ${descuento}% , el precio final es : ${precioFinal}`;


}
/**Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. */