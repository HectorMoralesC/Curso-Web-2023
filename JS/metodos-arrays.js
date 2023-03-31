
//Método toString() convierte un array a string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("toString()").innerHTML = fruits.toString();

//Método join() une arrays y devuelve un string

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("join()").innerHTML = fruits1.join(" * ");

//Método pop() quita el último elemento del array

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("pop1").innerHTML = fruits2;
fruits2.pop();
document.getElementById("pop2").innerHTML = fruits2;


//Método push() añade un elemento al final del array

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("push1").innerHTML = fruits3;
fruits3.push("Kiwi");
document.getElementById("push2").innerHTML = fruits3;

//Método concat() concatena constantes

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("concat()").innerHTML = myChildren;

//Método shift() quita el primer valor del array y recoloca los valores siguientes moviendolos al principio

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("shift1").innerHTML = fruits4;
fruits4.shift();
document.getElementById("shift2").innerHTML = fruits4;


//Método unshift() añade un valor al principio del array y recoloca los valores siguientes moviendolos al final

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("unshift1").innerHTML = fruits5;
fruits5.unshift("Lemon");
document.getElementById("unshift2").innerHTML = fruits5;


//Método .length añade un elemento en la ultima posicion del array

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("length1").innerHTML = fruits6;
fruits6[fruits6.length] = "Kiwi";
document.getElementById("length2").innerHTML = fruits6;


//Método indexOf() busca el primer elemento con el nombre dado el array y nos devuelve la posicion en la que empieza .

let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");

document.getElementById("indexOf()").innerHTML = result;

//Método lastindexOf() busca el ultimo elemento con el nombre dado el array y nos devuelve la posicion en la que empieza .

let text1 = "Hello planet earth, you are a great planet.";
let result1 = text.lastIndexOf("great");
document.getElementById("lastIndexOf()").innerHTML = result;