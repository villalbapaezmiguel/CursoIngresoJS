/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
txtIdCantidad
 */
function CalcularPrecio () 
{
    let cantidadLampara = document.getElementById("txtIdCantidad").value ;
    let resultado = document.getElementById("txtIdprecioDescuento").value ;
    let marca = document.getElementById("Marca").value ;
    cantidadLampara = parseInt(cantidadLampara);
    let lamparas = 35;
    let descuento = 0;
    let ingresosBrutos =0;
    let mensaje = "";
    let precioFinal = 0;

    if(cantidadLampara >= 6){
        descuento = 50 ;
        resultado = descuento; 
        mensaje = `el precio final es : ${precioFinal}`;
    }

    if(cantidadLampara == 5){
        if(marca === "ArgentinaLuz"){
            descuento = 40;
            lamparas = lamparas * 5;
        }else if (marca != "ArgentinaLuz"){
            descuento = 30 ;
        }
    }

    if(cantidadLampara == 4){
        if(marca == "ArgentinaLuz" || "FelipeLamparas"){
            descuento = 25;
            lamparas = lamparas * 4;
        }else if(marca != "ArgentinaLuz" || "FelipeLamparas"){
            descuento = 20 ;
        }
    }

    if(cantidadLampara == 3){
        if(marca == "ArgentinaLuz"){
            descuento == 15;
            lamparas = lamparas * 3;
        }
        if(marca == "FelipeLamparas"){
            descuento = 10;
            lamparas = lamparas * 3;
        }
        if(marca != "ArgentinaLuz" || "FelipeLamparas"){
            descuento = 5;
            lamparas = lamparas * 3;
        }
    }
    precioFinal = lamparas * descuento /100;
    /**if(lamparas > 120){
        ingresosBrutos = 10;
        mensaje = `Usted pago ${lamparas} de IIBB.”, siendo ${ingresosBrutos} el impuesto que se pagó`;
    } */
    alert(mensaje);
}
