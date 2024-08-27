//Ejercico 1
/*let respuesta =  prompt("¿Eres bellisimo?")

if (respuesta == "si")
{
    console.log("Ciertamente")
}
if(respuesta == "no")
{
    console.log("No te creo")
}

//Ejercicio 2
let numero = prompt("Digite un numero");

if(numero % 2 === 0)
{
    console.log(numero + " es divisible entre 2");
}
if(numero % 2 != 0)
{
    console.log(numero + " no es divisible entre 2");
}

//Ejercicio 3
let numero = prompt("Digite un numero");

if(numero % 2 === 0)
{
    alert(numero + " es par");
}
if(numero % 2 != 0)
{
    alert(numero + " es impar");
}

//Ejecicio 4
let numero = parseInt(prompt("Digite un numero de cliente"));

if(numero === 1000)
{
    console.log("Ganaste un premio");
}
else
{
    console.log("Lo sentimos, sigue participando")
}

//Ejecicio 5
let n1 = parseInt(prompt("Ingrese un numero")), n2 = parseInt(prompt("Ingresa otro numero"));

if(n1>n2)
{
    console.log(n2 + " es el numero menor ");
}
else if(n1<n2)
{
    console.log(n1 + " es el numero menor");
}

//Ejecicio 6
let n1 = parseInt(prompt("Ingrese un numero")), n2 = parseInt(prompt("Ingresa otro numero")), n3 = parseInt(prompt("Ingresa otro numero"));

if(n1>n2 && n1>n3)
{
    console.log(n1 + " es el numero mayor");
}
if(n2>n1 && n2>n3)
{
    console.log(n2 + " es el numero mayor");
}
if(n3>n1 && n3>n2)
{
    console.log(n3 + " es el numero mayor");
}

if(n1===n2)
{
    console.log(n1 + " es igual a " + n2);
}

if(n1===n3)
{
    console.log(n1 + " es igual a " + n3);
}

if(n2===n3)
{
    console.log(n2 + " es igual a " + n3);
}

//Ejercicio 7
let diasem = prompt("Igresa un dia de la semana");

if(diasem === "lunes")
{
    console.log("Excelente incio de semana :)");
}

else if(diasem === "viernes")
{
    console.log("Disfruta el fin de semana");
}

else if(diasem === "sabado" || diasem === "domingo")
{
    console.log("Disfruta de tu día");
}

else
{
    console.log("venga tu puedes, espera al viernes");
    
}

//Ejercicio 8
let cal = parseInt(prompt("Ingresa tu calificación"));

if(cal < 6)
{
    console.log("Reprobado");
}

else if(cal <= 6 || cal <= 8)
{
    console.log("Regular");
}

else if(cal === 9)
{
    console.log("Muy bien");
}

else if(cal === 10)
{
    console.log("Excelente :)");
}

else
{
    alert("ERROR")
}

//Ejercicio 9
let res = prompt("¿Qué topping desea agregar?");

if(res === "oreo")
{
    console.log("El topping de oreo cuesta 10 MXN");
}

else if(res === "kitkat")
{
    console.log("El topping de KitKat cuesta 15 MXN");
}

else if(res === "brownie")
{
    console.log("El topping de Brownie cuesta 20 MXN");    
}

else
{
    console.log("No tenemos ese topping, lo sentimos");
    console.log("El helado sin topping cuesta 50 MXN");
}

//Ejercicio 10
let precio = parseFloat(null), res = null, res2 = null;
alert("MENU: \n1.Course: $4999 MXN \n2.Carrera: $3999 MXN \n3.Master: $2999 MXN" );
opc = prompt("Escoja el programa que desea");

switch(opc)
{
    case '1':
        precio = 4999;
        res = prompt("¿Cuentas con beca?");
        if(res === "si")
        {    
            res2 = prompt("¿Cuál?");
            if(res2 === "beca facebook")
            {
                precio = precio *80/100;
                console.log("Usted pagaría mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*2);
            }
            if(res2 === "beca google")
            {
                precio = precio *75/100;
                console.log("Usted pagaria mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*2);            
            }
            if(res2 === "beca jesua")
            {
                precio = precio *50/100;
                console.log("Usted pagaria mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*2);            
            }
        } 
        else if(res === "no")
        {
            console.log("Usted pagaría $" + precio);
            console.log("En total pagaría $" + precio*2);
        }
        break;
    case '2':
        precio = 3999;
        res = prompt("¿Cuentas con beca?");
        if(res === "si")
        {    
            res2 = prompt("¿Cuál?");
            if(res2 === "beca facebook")
            {
                precio = precio *80/100;
                console.log("Usted pagaría mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*6);
            }
            if(res2 === "beca google")
            {
                precio = precio *75/100;
                console.log("Usted pagaria mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*6);            
            }
            if(res2 === "beca jesua")
            {
                precio = precio *50/100;
                console.log("Usted pagaria mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*6);            
            }
        }
        else if(res === "no")
        {
            console.log("Usted pagaría $" + precio);
            console.log("En total pagaría $" + precio*6);
        }
        break;
    case '3':    
        precio = 2999;
        res = prompt("¿Cuentas con beca?");
        if(res === "si")
        {    
            res2 = prompt("¿Cuál?");
            if(res2 === "beca facebook")
            {
                precio = precio *80/100;
                console.log("Usted pagaría mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*12);
            }
            if(res2 === "beca google")
            {
                precio = precio *75/100;
                console.log("Usted pagaria mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*12);            
            }
            if(res2 === "beca jesua")
            {
                precio = precio *50/100;
                console.log("Usted pagaria mensualmente $" + precio);
                console.log("En total usted pagaría $" + precio*12);            
            }
        }
        else if(res === "no")
        {
            console.log("Usted pagaría $" + precio);
            console.log("En total pagaría $" + precio*12);
        }
        break;
    default: null;
}

//Ejercicio 11
alert("Menu: \n1.Coche \n2.Moto \n3.Autobús");
opc = prompt("Elija su vehículo");

switch (opc)
{
    case '1':
        resp = parseFloat(prompt("¿Cuantos kilometros recorrió?"));
        respk = resp * 0.20;
        if(resp >= 0 && resp <=100)
        {
            respk += 5;
            console.log(respk);
        }
        else if(resp > 100)
        {
            respk += 10;
            console.log(respk);
        } 
    break;
    case '2':
        resp = parseFloat(prompt("¿Cuantos kilometros recorrió?"));
        respk = resp * 0.10;
        if(resp >= 0 && resp <=100)
        {
            respk += 5;
            console.log(respk);
        }
        else if(resp > 100)
        {
            respk += 10;
            console.log(respk);
        }
    break;
    case '3':
        resp = parseFloat(prompt("¿Cuantos kilometros recorrió?"));
        respk = resp * 0.5;
        if(resp >= 0 && resp <=100)
        {
            respk += 5;
            console.log(respk);
        }
        else if(resp > 100)
        {
            respk += 10;
            console.log(respk);
        }
    break;
    default: null;
}

let num = parseInt(prompt("Ingresa un número: ")), sum = 0;

for(let i=0; i<=num; i++)
{
    sum += i; 
}
console.log(sum);

let num = parseInt(prompt("Ingresa un número: ")), cuadrado=0;

for(let i=1; i<=num; i++)
{
    cuadrado = i**2;
    console.log("El cuadrado de " + i + " " + "es " + cuadrado);
}*/

let num = parseInt(prompt("Ingresa un número: ")), asterisco=0;

for(let i=1; i<=num; i++)
{
    asterisco = "$".repeat(i)  + "\n";
    console.log(asterisco);
}
