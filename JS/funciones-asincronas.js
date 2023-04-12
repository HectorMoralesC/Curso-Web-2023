setTimeout(() => {
    console.log("Esta instrucción se ejecuta después de 5 segundos");
  }, 5000);
  
  setInterval(() => {
    console.log("Esta instrucción se ejecuta cada 5 segundos");
  }, 5000);


  setInterval(() => {
    document.getElementById("setinterval").innerHTML =("Esta instrucción se ejecuta cada 5 segundos");
  }, 5000);




  

  setTimeout(() => {

    console.log("Hola");
    setTimeout(() => {
        console.log("Adiós");
    }, 500);

  }, 1000); 

  setTimeout(() => {

    console.log("Buenas tardes");

        
    }, 100);

console.log("Buenos días");
  