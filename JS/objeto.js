var persona = {
  nombre: "John",
  apellido: "Smith",

  edad: 53,

  colorOjos: "azules",

  //As� para objetos que el nombre de la variable va separado
  "numero de mascotas": 8,
};


document.getElementById("demo").innerHTML =
  persona.nombre + " "+persona.apellido+" tiene " + persona.edad + " a�os y sus ojos son " +persona.colorOjos+ " y tiene " + persona ["numero de mascotas"] + " mascotas";

  

  var tractor = {color:"Amarillo", Ruedas: 4, Tipo: "Agr�cola"};

  document.getElementById("demo1").innerHTML =
  tractor.color + " tiene "+tractor.Ruedas+" y es " + tractor.Tipo + "." ;



  var person = { // Objeto

    firstName: "John",
    
    lastName : "Doe", // Propiedades
    
    id : 5566,
    
    fullName : function() { // M�todo
    
    return this.firstName + " "+this.lastName+" y su ID es " + this.id;
    
    }
    
    };


  document.getElementById("ObjetoComplejo").innerHTML = person.fullName();


//Encontrar el tipo de una variable
document.getElementById("TipoVariable").innerHTML = "John Doe es " +typeof "John Doe "+" y 3.14 es "  + typeof (3.14); //El 1� devuelve string el 2� number



  var coche;

    document.getElementById("VariableIndefinida").innerHTML = coche + " " +
    typeof coche;



//Variable vacia
    var car = "";

    document.getElementById("VariableVacia").innerHTML =
    
    "The value is: " + car + "<br>" + "The type is: " + typeof car;
    //Devuelve un valor vacio