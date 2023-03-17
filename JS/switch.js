

var dia;
var mes;
var DiaDelMes;



switch (new Date().getDay()) {

case 0:

dia = "Domingo"; break;

case 1:

dia = "Lunes"; break;

case 2:

dia = "Martes"; break;

case 3:

dia = "Miércoles"; break;

case 4:

dia = "Jueves"; break;

case 5:

dia = "Viernes"; break;

case 6:

dia = "Sábado";

}

//document.getElementById("dia").innerHTML = "Hoy es " + dia;










switch (new Date().getMonth())
{
case 0:

mes = "Enero"; break;

case 1:
    
mes = "Febrero"; break;

case 2:

mes = "Marzo"; break;

case 3:

mes = "Abril"; break;

case 4:

mes = "Mayo"; break;

case 5:

mes = "Junio"; break;

case 6:

mes = "Julio";

default:
    mes = "otro mes de agosto a Diciembre"
break;
}

//document.getElementById("mes").innerHTML = "Estamos en " + mes + " bro";





switch (new Date().getDate())

{

    case 0:

    DiaDelMes = "1"; break;
    
    case 1:
    DiaDelMes = "2"; break;
    
    case 2:
    DiaDelMes = "3"; break;
    
    case 3:
    DiaDelMes = "4"; break;
    
    case 4:
    DiaDelMes = "5"; break;
    
    case 5:
    DiaDelMes = "6"; break;
    
    case 6:
    DiaDelMes = "7";break;
    
    case 7:
    DiaDelMes = "8";break;

    case 8:
    DiaDelMes = "9";break;

    case 9:
    DiaDelMes = "10";break;

    case 10:
    DiaDelMes = "11";break;

    case 11:
    DiaDelMes = "12";break;

    case 12:
    DiaDelMes = "13";break;

    case 13:
    DiaDelMes = "14";break;

    case 14:
    DiaDelMes = "15";break;

    case 15:
    DiaDelMes = "16";break;

    case 16:
    DiaDelMes = "17";break;

    case 17:
    DiaDelMes = "17";break;

    case 18:
    DiaDelMes = "19";break;

    case 19:
    DiaDelMes = "120";break;


}

    document.getElementById("DiaDelMes").innerHTML = "Hoy es " + dia + " " + DiaDelMes + " de " + mes ;







