using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Text; 
using System.IO;  

namespace files 
{     
    class Program       
    {         
        
        static void Main(string[] args)      
        {
            
            bool encontrado;
            encontrado = false;
            Console.Writeline ("Escribe un número:");
            int i = console.readline();
            
            if ((i>0)&& (!encontrado))
            {
                console.Writeline("Tu número es " + i + " y por tanto es mayor que 0" );
            
            }
            else 
            console.Writeline("Tu número es " + i + " y por tanto es menor que 0");




        }  

    }

}