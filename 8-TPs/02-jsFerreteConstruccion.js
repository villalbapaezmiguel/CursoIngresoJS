/*2.	Para el departamento de Construcción:
B.mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = document.getElementById("txtIdLargo").value;
    let ancho = document.getElementById("txtIdAncho").value;
    largo= parseInt(largo);
    ancho = parseInt(ancho);
    let area = (largo*ancho)*2;
    area = area*3;
    alert(`La cantidad de alambre a usar seria : ${area}m`);

}
function Circulo () 
{

    let radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    const pi = 3.14;

    let perimetro = radio/pi;
    perimetro = perimetro*3;
    alert(`la cantidad de alambre a usar suria : ${perimetro}m`);
}
function Materiales () 
{
    let largo = document.getElementById("txtIdLargo").value;
    let ancho = document.getElementById("txtIdAncho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    let area = largo*ancho;
    let cemento = area* 2;
    let cal = area* 3;

    alert(`Se necesitan ${cemento} bolsas de Cemento `);
    alert(`Se necesitan ${cal} bolsas de Cal `);
    
}
//Miguel Villalba Paez 
//1D
//Funciona