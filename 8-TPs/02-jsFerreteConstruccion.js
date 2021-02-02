/*2.	Para el departamento de Construcción:
B.mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let area = (largo*ancho)*2;
    area = area*3;
    alert(`La cantidad de alambre a usar seria : ${area}m`);

}
function Circulo () 
{
    let radio = parseFloat(document.getElementById("txtIdRadio").value);
    const pi = 3.14; 
    let perimetro = radio/pi;
    perimetro = perimetro*3;
    alert(`la cantidad de alambre a usar suria : ${perimetro}m`);
}
function Materiales () 
{
	let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let area = largo*ancho;
    let cemento = area *2;
    let cal = area *3;


    alert("se necesitan "+cemento+ " bolsas de cemento" );
    alert("y se necesitan "+cal+" bolsas de cal");

    

}