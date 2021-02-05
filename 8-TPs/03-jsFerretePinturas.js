/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*///txtIdTemperatura
function FahrenheitCentigrados () 
{
    let fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit= parseInt(fahrenheit);
    let centigrados = fahrenheit - 32 ;
    centigrados = centigrados /18000;


    alert(`${fahrenheit} Fahrenheit son ${centigrados} centígrados`);

}

function CentigradosFahrenheit () 
{
    let centigrados = document.getElementById("txtIdTemperatura").value ;
    centigrados = parseInt(centigrados);
    let fahrenheit = centigrados * 18000
    fahrenheit = fahrenheit + 32.00;

    alert(`${centigrados}  centígrados son ${fahrenheit} Fahrenheit`);
}
//Miguel Villalba Paez
//1D
//Funciona