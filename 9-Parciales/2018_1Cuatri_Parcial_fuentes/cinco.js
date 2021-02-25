function mostrar()
{
    let planetaIngresado ;
    let mensaje = "";

    planetaIngresado = prompt("Ingrese un planeta del sistema solar ");

    switch(planetaIngresado)
    {
        case "Tierra":
            mensaje = `acá vivimos`;
            break ;
        case "Mercurio":
        case "Venus":
            mensaje = "acá hace más calor";
            break ;
        case "Jupiter":
        case "Saturno":
        case "Urano":
        case "Neptuno":
        case "Marte":
            mensaje = "acá hace más frio";
            break ;
        default :
            mensaje = "No es un planeta valido";
    }

    alert(mensaje);




}
/**Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra). 
Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno*/