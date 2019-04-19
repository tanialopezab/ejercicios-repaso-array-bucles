'use strict';

// La media

// a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.

const numbers = [8, 7, 32, 45, 100, 16, 95];


  function average (arr){//se pone como PARAMETRO arr para que reciba CUALQUIER array
     let acc = 0;
    for(let i = 0; i < arr.length; i++){
    //console.log(numbers[i]);
    acc = acc + arr[i];//el bucle hace la SUMA solo, luego para dividir SALGO fuera del bucle, pero DENTRO de la funcion
    console.log(acc);
     }
///cuando ya TENGO LA SUMA OBTENIDA dentro del bucle, me salgo de el y dentro de la funcion hago la division y muestro el resultado
     const resultado = acc / numbers.length;
     return console.log(`esta es la media ${resultado}`);
}

average(numbers);///se pone como ARGUMENTO el nombre del array que lo reciba
