/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    let precioUno = document.getElementById("txtIdPrecioUno").value;
    let precioDos = document.getElementById("txtIdPrecioDos").value;
    let precioTres = document.getElementById("txtIdPrecioTres").value;
    precioUno = parseInt(precioUno) ;
    precioDos = parseInt(precioDos) ;
    precioTres = parseInt(precioTres) ;
    let precioSumados = precioUno + precioDos + precioTres;
    alert(`La suma es ${precioSumados}`);

}
function Promedio () 
{
    let precioUno = document.getElementById("txtIdPrecioUno").value;
    let precioDos = document.getElementById("txtIdPrecioDos").value;
    let precioTres = document.getElementById("txtIdPrecioTres").value;
    precioUno = parseInt(precioUno) ;
    precioDos = parseInt(precioDos) ;
    precioTres = parseInt(precioTres) ;
    let promedio = precioUno + precioDos + precioTres;
    promedio = promedio/3;
    alert(`El promedio es ${promedio}`);
}
function PrecioFinal () 
{
    let precioUno = document.getElementById("txtIdPrecioUno").value;
    let precioDos = document.getElementById("txtIdPrecioDos").value;
    let precioTres = document.getElementById("txtIdPrecioTres").value;
    precioUno = parseInt(precioUno) ;
    precioDos = parseInt(precioDos) ;
    precioTres = parseInt(precioTres) ;
    let sumaPrecios = precioUno + precioDos + precioTres;
    let precioFinal = sumaPrecios*21/100 + sumaPrecios;
    alert(`El precio final es ${precioFinal}`);
}
//Miguel Villalba Paez
//1D
//Funciona