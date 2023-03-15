var x, y, z, mayor, menor, random, absoluto, r;

x = 5.1;
y = 3.003;
z = 3.9999;
absoluto = -50;
r = 30

x = Math.round(x);
document.getElementById("Math.round(x)").innerHTML = "(x es 5.5) El Math.round(x) es: " +x;

y = Math.ceil(y);
document.getElementById("Math.ceil(y)").innerHTML = "(x es 3.003) El Math.ceil(y) es: " +y;

z = Math.floor(z);
document.getElementById("Math.floor(z)").innerHTML = "(z es 3,9999) El Math.floor(z) es: " + z;

mayor = Math.max(x,y,z);
document.getElementById("Math.max(x,y,z)").innerHTML = "El mayor Math de x,y,z es: " + mayor;

menor = Math.min(x,y,z);
document.getElementById("Math.min(x,y,z)").innerHTML = "El menor Math de x,y,z es: " + menor;

random = Math.random(Math.random()*10000);
document.getElementById("Math.random(x,y,z)").innerHTML = "Número Math.random: " + random;

absoluto = Math.abs(absoluto);
document.getElementById("Math.abs(x,y,z)").innerHTML = "(absoluto es -50) el Math.abs de absoluto es: " + absoluto;

r = Math.sqrt(r);
document.getElementById("Math.sqrt(x,y,z)").innerHTML = "(r es 30) La raiz de 30 es: " + r;

