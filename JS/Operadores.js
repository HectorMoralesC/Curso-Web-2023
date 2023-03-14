var x,y;
x = 8;
y = 4;

document.getElementById("result1").innerHTML ="8 + 4 = "+ (x+y);
document.getElementById("result2").innerHTML ="8 - 4 = "+ (x-y);
document.getElementById("result3").innerHTML ="8 * 4 = "+ (x*y);
document.getElementById("result4").innerHTML ="8 / 4 = "+ (x/y);
document.getElementById("result5").innerHTML ="8 % 4 = "+ (x%y);  

document.write("<p>El valor de x es: " + x + "</p>");
document.write("<p>El valor de x es: " + x++ + "</p>"); // Si pones ++ despues de variable primero muestra y luego incrementa
document.write("<p>El valor de x es: " + ++x + "</p>"); //Si pones ++ antes de la variable primero se incrementa y despues se muestra
