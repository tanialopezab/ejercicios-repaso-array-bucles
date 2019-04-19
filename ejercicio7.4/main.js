'use strict';
console.log('hola');
// Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

// NOTA: Vamos a realizar este ejercicio de forma que, antes de programar nada, escribamos el un papel el listado de las acciones (algoritmo) que tenemos que realizar para conseguir el resultado que buscamos. Una vez escrito este listado, ya nos pondremos a programarlo en JS

///tengo que hacer que aparezcan los años en pantalla
//el ultimo año fue 2017 
//el bucle debe repetirse 15 veces una por cada luna
//la luna se repite cada 3 años este es el incremento
//3 años por 15 lunas = 45



function moon (){
     for(let i = 0; i < 45; i = i+3){
     let año = 2017 + i;
     console.log(`La proxima luna del cazador sera en ${año}.`);
    }


}
moon();