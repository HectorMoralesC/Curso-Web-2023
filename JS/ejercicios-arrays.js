/*Ejercicio 1: escribe un programa que genere un array de 6 valores de tipo number y sean
mostrados en pantalla utilizando un bucle for clásico y un bucle for...of*/

const numeros = ["", "", "", "", "", ""];
length = numeros.length
console.log(length)

for(let i =0; i < length; i++)
{


    numeros[i]   = Math.random(Math.random());
 }

 console.log(numeros);



for(let numeros1 of numeros){
    console.log(numeros1)
}

/*Ejercicio 2 : escribe un programa que almacene los nombres de tres colores en un array y
los muestre por pantalla mediante un bucle for...of*/

const colores = ["amarillo", "negro", "azul"];

for(let colores1 of colores){
    console.log(colores1)
}


/*Ejercicio 3: escribe un programa con un array que almacene los nombres de tres colores.
A continuación, crea otro array vacío e inserta en él todos los elementos del primer array
mediante un for...of y el método push.*/


/*var colores1 = [];
for (let i = 0; i <= 2; i++) {

    let color = prompt("Escribe un color", "");
    colores1[i] = color;
    if (color != null) {
      document.getElementById("demo3").innerHTML =
        "los colores son: " + colores1;
    };

};*/


var nombrecompleto = [];
for (let i = 0; i <= 0; i++){

    let nombre = prompt("Cómo te llamas?");
    nombrecompleto[i] = nombre;
    
}
for (let i = 1; i <= 1; i++){
    
    let apellido1 = prompt("Cuál es tu primer apellido?");
    nombrecompleto[i] = apellido1;
}

for (let i = 2; i <= 2; i++){
    
    let apellido2 = prompt("Cuál es tu segundo apellido?");
    nombrecompleto[i] = apellido2;
}


if (nombre != null) {
    document.getElementById("nombre").innerHTML =
      "El nombre del cliente es: " + nombrecompleto;
  };








