
//Función con argumento

function funcArg(nombre,trabajo) {

    document.getElementById("demo").innerHTML =
    
    "Aquí tenemos a " + nombre + ", es " + trabajo + ".";
    
    }

//otra función con argumento

function myfunction(txt) {

    document.getElementById("demo1").innerHTML = txt

    
        
    }


//Función que devuelve un valor

var x = multiplicacion(4, 3);
var y = suma(4, 3);
var z = resta(4, 3);

document.getElementById("demo2").innerHTML ="El resultado de multiplicar 4 * 3 es: " +x;

function multiplicacion(a, b) {

return a * b;

}


document.getElementById("suma").innerHTML ="El resultado de sumar 4 + 3 es: " +y;

function suma(a, b) {

    return a + b;
}


document.getElementById("resta").innerHTML ="El resultado de restar 4 - 3 es: " +z;

function resta(a, b) {

    return a - b;
}





// Crear una funcion con una constante y demostrar en consola la suma
//sumar (2, 3); siempre va después de crear la funcion

const sumar = function (a, b){
    console.log(a + b);
}
sumar (2, 3);
sumar (8, 3);


//Funcion autoejecutable
//Error saludar() , A ÉSTA FUNCION NO SE LE PUEDE LLAMAR!!!
(function saludar (){
    console.log("Hola");
})();


//Función normal

function funcion1 (altura){
    return (5 * altura) / 2;
}
//LLAMADA
console.log(funcion1(8));

//Función de flecha 

const funcion2 = (altura) => {
    return (5 * altura ) / 2;
};
//LLAMADA
console.log(funcion2(8));

//Forma simplificada de la funcion de flecha

const funcion3 = (altura) => (5 * altura) / 2;
//LLAMADA
console.log(funcion3(8));





//Una función que convierte Fahrenheit en Celsius

function FahrenheiTaCelsius(f) {

   

    return (5/9) * (f-32);
    
    }
    
    document.getElementById("grados").innerHTML = "32 Fahrenheit son "+FahrenheiTaCelsius (32)+ " celsius";


