function mostrar()
{
    
    let numUno ;
    let numDos ;
    let resultado ;
    let mensaje = "";

    numUno = prompt("Ingrese primer numero");
    numDos = prompt("Ingrese segundo numero");
    numUno = parseInt(numUno);
    numDos = parseInt(numDos);

    if(numUno == numDos)
    {
        
        resultado = `${numUno}${numDos}` ;
        alert(resultado);
        
    }else{

        if(numUno > numDos)
        {
            resultado = numUno - numDos ;
            mensaje = `La resta da ${resultado}`;
        }else
        {
            resultado = numUno + numDos ;
            mensaje = `La suma da ${resultado}`;
        }
    }

    if( typeof"number" && resultado > 10)
    {
        mensaje = `la suma es ${resultado} y supero el 10`
    }

    if(mensaje = "")
    {
        
        alert(mensaje);
    }

}
/**Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10". */
