
function mostrar()
{
    let largo = 0;
    let ancho = 0;
    let perimetro ;

    largo= prompt("Ingrese el largo ");
    ancho = prompt("Ingrese el ancho ");
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro= (largo *ancho)*2 ;
    
    alert(`El perimetro seria : ${perimetro}`);


}
/**Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt 
y que muestre el perímetro por alert. */
