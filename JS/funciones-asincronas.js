setTimeout(() => {
    console.log("Esta instrucci�n se ejecuta despu�s de 5 segundos");
  }, 5000);
  
  setInterval(() => {
    console.log("Esta instrucci�n se ejecuta cada 5 segundos");
  }, 5000);


  setInterval(() => {
    document.getElementById("setinterval").innerHTML =("Esta instrucci�n se ejecuta cada 5 segundos");
  }, 5000);




  

  setTimeout(() => {

    console.log("Hola");
    setTimeout(() => {
        console.log("Adi�s");
    }, 500);

  }, 1000); 

  setTimeout(() => {

    console.log("Buenas tardes");

        
    }, 100);

console.log("Buenos d�as");
  