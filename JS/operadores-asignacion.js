var x,y;
x = 8
y = 4;

x+=y;
document.getElementById("result1").innerHTML ="x += y es equivalente a x = x + y (siendo x=8 y y=4) es: "+ x; 
document.write(x)
//Ahora x es 12

x-=y;
document.getElementById("result2").innerHTML ="x -= y es equivalente a x = x - y (siendo x=12 y y=4) es: "+ x; 
document.write(x)
//Ahora x es 16

x*=y;
document.getElementById("result3").innerHTML ="x *= y es equivalente a x = x * y (siendo x=16 y y=4) es: "+ x;
document.write(x)
//Ahora x es 32


