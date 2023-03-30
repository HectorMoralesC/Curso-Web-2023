
//EJ 1. Escribe un programa que dado dos strings compruebe si los dos primeros caracteres son iguales
let txt1="pepito" , text2 = "penganito";

if (txt1.charAt(0) === text2[0]){
    console.log("SI tienen la misma letra inicial");
} else {
    console.log("NO tienen la misma letra incial");
}
//Revisa los dos primeros caracteres
if (txt1.slice(0,2) === text2.slice(0,2)){
    console.log("SI tienen las dos primeras letras iguales");
} else {
    console.log("NO tienen las mismas dos primeras letras");
}


// EJ 2. Escribe un programa que devuelva si un string se escribe igual de alalçnte hacia atrás 

let palindromo = "radar";
let long = palindromo.length;
let palindromo1 ="";

console.log(long)

while(long>= 0){

    palindromo1 += palindromo.charAt(long);

    long = long -1;
}
console.log("palindormo1 " +palindromo1)

if (palindromo === palindromo1){
    console.log("La palabra "+palindromo+" es un palindromo")
}
else {
    console.log("La palabra "+palindromo+" NO es un palindromo")
}

