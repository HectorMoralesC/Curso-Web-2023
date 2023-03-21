
//Ejercicio 1
var numero;
numero = 50;
document.write(numero);


//Ejercicio 2
var CMS = "WordPress";
document.getElementById("cms1").innerHTML = CMS;

//Ejercicio 3
var temperatura = "Frio";
document.getElementById("temp").innerHTML = temperatura;


//Ejercicio 4
var x, y;
x = 2
y = 3
document.getElementById("sum").innerHTML ="2 + 3 = "+ (x+y);



//Ejercicio 5
var z;

z = x + y;
document.getElementById("z").innerHTML ="z = "+ (z);


//Ejercicio 6
var nombre = "Cristina", apellido = "García", edad = 38
document.getElementById("persona").innerHTML = nombre + " " + apellido + " tiene " + edad + " años";


//Ejercicio 7
x = 1;

y = 6;

z = x + y;

document.getElementById("donde").innerHTML = z;


//Ejercicio 8
x = 60;

document.getElementById("division").innerHTML = (x/3);


//Ejercicio 9
x = "6";
y = "9";
document.getElementById("multiplicacion").innerHTML = (x*y);



//Ejercicio 10 
// HECHO


//Ejercicio 11
function saluda() {

    document.getElementById("ejercicio11").innerHTML = "Hola Mundillo!";
}


//Ejercicio 12  

// HECHO




//Ejercicio 13
var txt = "Hola Mundo!";

document.getElementById("txt.length").innerHTML =
txt.length;


//Ejercicio 14

document.getElementById("roto").innerHTML = "Nos gusta WordPress.";

//Ejercicio 15

var str1 = "¡Hola ";

var str2 = "mundo!";
document.getElementById("concatenar").innerHTML = (str1+""+str2);


//Ejercicio 16
var txt = document.getElementById("concatenar").innerHTML = (str1+""+str2);
document.getElementById("txt").innerHTML = (txt);


//Ejercicio 17
random = Math.random(Math.random()*10000);
document.getElementById("random").innerHTML = "Número random = " + random;


//Ejercicio 18

document.getElementById("max").innerHTML = Math.max(0, 150, 30, 20, -8);


//Ejercicio 19

document.getElementById("round").innerHTML = Math.round(5.3);


//Ejercicio 20

document.getElementById("sqrt").innerHTML = "Raíz de 9 = " + Math.sqrt(9);


//Ejercicio 21

document.getElementById("operador +=").innerHTML = "x era = "+ x + " y ahora es = " + (x+= (5));


//Ejercicio 22

document.getElementById("operador -=").innerHTML = "x era = "+ x + " y ahora es = " + (x-= (7));


//Ejercicio 23

document.getElementById("operador *=").innerHTML = "x era = "+ x + " y ahora es = " + (x*= (10));


//Ejercicio 24

document.getElementById("operador /=").innerHTML = "x era = "+ x + " y ahora es = " + (x/= (10));


//Ejercicio 25

document.getElementById("operador %=").innerHTML = "x era = "+ x + " y ahora es = " + (x%= (10/3));


//Ejercicio 26

function myFunction() {

    document.getElementById("ejercicio26").innerHTML = "Hello World1!";
    
    }



//Ejercicio 27

function myFunc() {

    document.getElementById("ejercicio27").innerHTML = "Hello World2!";
    
    }


//Ejercicio 28

function producto() {
    var multi;
    multi = (5*5);



    document.getElementById("ejercicio28").innerHTML = multi;

    
    
    }
    
  producto();   


//Ejercicio 29

function mostraNom() {
    var nombre = "Antonio";
    document.getElementById("ejercicio29").innerHTML = "Hola " + nombre;
  }
  
  mostraNom();



//Ejercicio 30

function mifuncion() {

    document.getElementById("ejercicio30").innerHTML = "Hola Mundo!";
    
    }


    
    

   
    
   