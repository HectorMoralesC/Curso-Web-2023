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

const colores2 = ["amarillo", "negro", "azul"];

for(let colores3 of colores2){
    console.log(colores3)
}

//Segundo metodo con push

const colores4 = ["amarillo", "negro", "azul"];
console.log("Número colores: " +colores4.length)
let i = 0;


const colores5 =["", "", ""];

while(i <= colores4.length){
    colores5.push(colores4[colores4.length-i])
   
    i++;
}

console.log("colores con push: " +colores5);
console.log("Número colores: " +colores5.length)

colores5.reverse()
console.log("colores con push: " +colores5);

let result1 = colores5.lastIndexOf("azul");
console.log(result1);



result1+1;
while(result<=colores5.length){
delete colores5[result1];
result++;
}
console.log("colores con push final: " +colores5);








