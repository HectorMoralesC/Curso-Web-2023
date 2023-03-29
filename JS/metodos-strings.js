        
        let texto = "Hola, Buenas, Tardes";
        
        let long = texto.length;
        let part = texto.slice(6, 12);
        console.log (part + " " + long)

        let unparametro = texto.slice(6);
        console.log (unparametro)

        let parametronegativo = texto.slice(-20,-16);
        console.log(parametronegativo)


        //Substring
        let str = "Manzana, Plátano, Kiwi";
        document.getElementById("subs").innerHTML = str.substring(9,16);
        console.log(str);
        

        //Método replace()

        function reemplaza() {
        let textoReemplazable = document.getElementById("replace").innerHTML;
        document.getElementById("replace").innerHTML = textoReemplazable.replace(/IPSUM/g, "MUSPI");
        }


        //Método replaceAll()

        function reemplazaTodo(){

            let textoReemplazable = document.getElementById("replace").innerHTML;
            document.getElementById("replace").innerHTML = textoReemplazable.replaceAll("Lorem", "Memo")

        }

        //Método upperCase para cambiar a mayusculas
        function myFunction() {
            let text = document.getElementById("upperCase").innerHTML;
            document.getElementById("upperCase").innerHTML =
            text.toUpperCase();
          }

        //Método loweCase para cambiar a minusculas
        function myFunction() {
            let text = document.getElementById("lowerCase").innerHTML;
            document.getElementById("lowerCase").innerHTML =
            text.toLowerCase();
        }

        //Método concat()
        let text1 = "Hello";
        let text2 = "World!";
        let text3 = text1.concat(" ",text2);
        document.getElementById("concat").innerHTML = text3;

        //Método trim() para quitar los espacios

        let texto1 = "     Hello World!     ";
        let texto2 = text1.trim();
        document.getElementById("trim").innerHTML =
        "Length text1 = " + texto1.length + "<br>Length text2 = " + texto2.length;


        //Método trimStart() elimina espacios del inicio del string
        let textoo1 = "     Hello World!     ";
        let textoo2 = text1.trimStart();
        document.getElementById("trimStart").innerHTML =
        "Length text1 = " + textoo1.length + "<br>Length text2 = " + textoo2.length;


        //Método trimStart() elimina espacios del inicio del string
        let textooo1 = "     Hello World!     ";
        let textooo2 = text1.trimEnd();

        document.getElementById("trimEnd").innerHTML =
        "Length text1 = " + textooo1.length + "<br>Length text2 = " + textooo2.length;

        //Método charAt() devuelve el caracter de la posicion escogida
        var textu = "HELLO WORLD";
        document.getElementById("charAt").innerHTML = textu.charAt(0);