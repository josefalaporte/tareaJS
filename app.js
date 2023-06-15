//*Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”. (pantalla) 1

alert('Hello World');


//*Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).(pantalla) 2

const hola = document.write('Hello World');

//*Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.(consola) 3

console.log(3 + 5);

//const suma = document.write(3 + 5);

//*Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”(pantalla) 4
 var nombreUsuario = prompt("Escriba su nombre:");
 console.log("Hola" + nombreUsuario);

 //*Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.(consola) 5

 let num1 = parseFloat(prompt("Ingresa primer Número:"))
 let num2 = parseFloat(prompt("Ingresa segundo Número:"))
 console.log("La suma es: " +(num1 + num2));

 //*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola) 6
 
 var num3 = parseFloat(prompt("Ingrese el primer Número:"));
 var num4 = parseFloat(prompt("Ingrese el segundo Número:"));

    if (num3 > num4) {
        console.log('El primer número es mayor:'
        + num3);
    }else if(num4 > num3) {
        console.log('El segundo número es mayor:' + num4);
    }else {
        console.log("Los números son iguales");
    }

    //*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola) 7

    let numb1 = parseFloat(prompt("Ingrese el primer número:"));
    let numb2 = parseFloat(prompt("Ingrese el segundo número"));
    let numb3 = parseFloat(prompt("Ingrese el tercer número"));

    //comprobar y mostrar mayor 
    let mayor;
    if (numb1 >= numb2 && numb1 >= numb3) {
        mayor = numb1;
    }else if (numb2 >= numb1 && numb2 >= numb3) {
        mayor = numb2;
    }else {
        mayor =numb3;
    }
    
    console.log("El número mayor es:" + mayor);

    //*Escribe un programa que pida un número y diga si es divisible por 2(consola) 8
    let numero =parseInt(prompt("ingrese un numero: "));
    
    if (numero % 2 === 0) {
        console.log("El numero", numero, "es divisible por 2.");
    }else {
        console.log("El numero", numero, "no es divisible por 2.");
    }

    //*Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla) 9
        

  

