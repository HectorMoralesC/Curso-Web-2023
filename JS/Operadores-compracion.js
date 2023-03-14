var x,y;
x = 8;
y = 4;

document.getElementById("result1").innerHTML ="Es 8 igual que 4? = "+ (x==y);
document.getElementById("result2").innerHTML ="Es 8 igual en valor y tipo que 4? "+ (x===y);
document.getElementById("result3").innerHTML ="Es 8 difernte que 4? "+ (x!=y);
document.getElementById("result4").innerHTML ="Es 8 diferente en valor y tipo que 4? "+ (x!==y);
document.getElementById("result5").innerHTML ="Es 8 mayor que 4? "+ (x>y);  
document.getElementById("result6").innerHTML ="Es 8 menor que 4? "+ (x<y);
document.getElementById("result7").innerHTML ="Es 8 mayor o igual que 4? "+ (x>=y);                                                              
document.getElementById("result8").innerHTML ="Es 8 menor o igual  que 4? "+ (x<=y);   
   

/*document.write("<p>El valor de x es: " + x + "</p>");
document.write("<p>El valor de x es: " + x++ + "</p>"); // Si pones ++ despues de variable primero muestra y luego incrementa
document.write("<p>El valor de x es: " + ++x + "</p>"); //Si pones ++ antes de la variable primero se incrementa y despues se muestra

*/
