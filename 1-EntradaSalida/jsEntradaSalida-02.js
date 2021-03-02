/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let paisIngresado ;
    let continente ;
    let cantidadHabitantes = 0;
    let nivelPobresa ;
    let temperatiraMininima = 0;
    let contador = 0;
    let temperaturaPares =0;
    let temperaturaimpares = 0;
    let nombrePaisMenor_habitantes ="";
    let pasisMenor_habitantes = 0;
    let banderaNombrePaisMenor_habitantes = true ;
    let paisesSuperanCuarentaGradros = 0;
    let paisesAmericaMenosCero = 0; 
    let cantidadHabitantes_america = 0;
    let cantidadHabitantes_asia = 0;
    let cantidadHabitantes_europa = 0;
    let cantidadHabitantes_africa = 0;
    let cantidadHabitantes_oceania = 0;
    let mayorContienenteHbitantes = 0;
    let promedioHabitantes = 0;
    let sumaPromedioHabitantesIngresados = 0; 
    let bandera_TemperaturaMinimaINgresada = true ;
    let temperatura_minimaIngresadad = 0;
    let nombrePais_temperatura_minima = "";
    let mansaje = "";
    while(contador  < 5)
    {

        paisIngresado = prompt("ingrese el nombre del pasis");
        while(isNaN(paisIngresado)== false)
        {
            paisIngresado = prompt("ingrese el nombre del pasis");
        }
        
        continente = prompt("ingrese el continente (america , asia , europa ,africa y oceania) ")
        while(continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" && continente != "oceania" )
        {
            continente = prompt("ERROR , ingrese el continente (america , asia , europa ,africa y oceania) ");
        }
    
        cantidadHabitantes = prompt("INgrese la cantidad de habitantes entre 1 y 7000");
        cantidadHabitantes = parseInt(cantidadHabitantes);
        while(cantidadHabitantes < 0 || cantidadHabitantes > 7000)
        {
            cantidadHabitantes = prompt("ERROR ,INgrese la cantidad de habitantes entre 1 y 7000");
            cantidadHabitantes = parseInt(cantidadHabitantes);
        }
    
        nivelPobresa = prompt("ingrese el nivel de pobresa entre (pobre, rico , muy rico) ");
        while(nivelPobresa != "pobre" && nivelPobresa != "rico" && nivelPobresa != "muy rico")
        {
            nivelPobresa = prompt("ERROR , ingrese el nivel de pobresa entre (pobre, rico , muy rico) ");
        }
    
        temperatiraMininima = prompt("ingrese la temperaruta mínima que se registra en su territorio(entre -50 y 50)")
        temperatiraMininima = parseInt(temperatiraMininima);
        while( isNaN(temperatiraMininima)== true )
        {
            temperatiraMininima = prompt("ERROR , ingrese la temperaruta mínima que se registra en su territorio(entre -50 y 50)")
            temperatiraMininima = parseInt(temperatiraMininima);
        }       

        switch(continente)
        {
            case "america":
                cantidadHabitantes_america = cantidadHabitantes ;
                break;
            case "europa":
                cantidadHabitantes_europa = cantidadHabitantes ;
                break;
            case "asia":
                cantidadHabitantes_asia = cantidadHabitantes ;
                break;
            case "oceania":
                cantidadHabitantes_oceania = cantidadHabitantes ;
                break;
            case "africa":
                cantidadHabitantes_africa = cantidadHabitantes ;
                break;
        }
        //C
        if(banderaNombrePaisMenor_habitantes == true || cantidadHabitantes  < pasisMenor_habitantes)
        {
            nombrePaisMenor_habitantes = paisIngresado ;
        }

        //H
        if(bandera_TemperaturaMinimaINgresada == true || temperatiraMininima < temperatura_minimaIngresadad)
        {
            temperatura_minimaIngresadad = temperatiraMininima ;
            nombrePais_temperatura_minima = paisIngresado ;
        }
        

    }

    if(continente == "europa" && nivelPobresa == "pobre")
    {
        alert("en europa no hay paises pobres");
    }
    //a
    if(temperatiraMininima %2 == 0)
    {
        temperaturaPares ++;
    }
    //B
    if(temperatiraMininima %2 == 1 && continente == "europa")
    {
        temperaturaimpares ++;
    }
    //D
    if(temperatiraMininima > 40)
    {
        paisesSuperanCuarentaGradros ++;
    }
    //E
    if(continente == "america" && temperatiraMininima < 0)
    {
        paisesAmericaMenosCero ++;
    }
    //F
    sumaPromedioHabitantesIngresados = cantidadHabitantes_america + cantidadHabitantes_europa + cantidadHabitantes_africa + cantidadHabitantes_oceania + cantidadHabitantes_asia ;
    promedioHabitantes = sumaPromedioHabitantesIngresados / 5 ;

    //I
    if(cantidadHabitantes_america > cantidadHabitantes_africa && cantidadHabitantes_america > cantidadHabitantes_europa && cantidadHabitantes_america > cantidadHabitantes_oceania && cantidadHabitantes_america > cantidadHabitantes_asia)
    {
        mayorContienenteHbitantes = "America";
    }else
    {
    
        if(cantidadHabitantes_europa > cantidadHabitantes_africa && cantidadHabitantes_europa > cantidadHabitantes_america && cantidadHabitantes_europa > cantidadHabitantes_oceania && cantidadHabitantes_europa > cantidadHabitantes_asia)
        {
            mayorContienenteHbitantes = "Europa";
        }else
        {
            if(cantidadHabitantes_africa > cantidadHabitantes_europa && cantidadHabitantes_africa > cantidadHabitantes_america && cantidadHabitantes_africa > cantidadHabitantes_oceania && cantidadHabitantes_africa > cantidadHabitantes_asia)
            {
                mayorContienenteHbitantes = "Africa";
            }else
            {
                if(cantidadHabitantes_asia> cantidadHabitantes_africa && cantidadHabitantes_asia > cantidadHabitantes_europa && cantidadHabitantes_asia > cantidadHabitantes_oceania && cantidadHabitantes_asia > cantidadHabitantes_america)
                {
                    mayorContienenteHbitantes = "Asia";
                }else
                {
                    if(cantidadHabitantes_oceania > cantidadHabitantes_africa && cantidadHabitantes_oceania > cantidadHabitantes_europa && cantidadHabitantes_oceania > cantidadHabitantes_america && cantidadHabitantes_oceania > cantidadHabitantes_asia)
                    {
                        mayorContienenteHbitantes = "America";
                    }    
                }    
            }        
        }        
    }

    mensaje = `
    A- La cantidad de temperaturas pares es : ${temperaturaPares}
    B- la cantidad de temperaturas impares de europa es : ${temperaturaimpares}
    C- El nombre del pais con menos habitantes es : ${nombrePaisMenor_habitantes}
    D- la cantidad de paises que superan los 40 grados es : ${paisesSuperanCuarentaGradros}
    E- la cantidad de paises de america que tienen menos de 0 grados es : ${paisesAmericaMenosCero}
    F- el promedio de habitantes entre los paises ingresados  es : ${promedioHabitantes}
    H- la temperatura mínima ingresada es : ${temperatura_minimaIngresadad} y nombre del pais que registro esa temperatura es : ${nombrePais_temperatura_minima}
    I- dl continente que tiene mas habitantes es : ${mayorContienenteHbitantes}
    `;

    alert(mensaje);



}
/**Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados ./
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.
 */
/**crear 5 pasises () */
//Miguel Villalba Paez 
//me falto la (G)