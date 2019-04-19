'use strict';

// EJERCICIO 6
// Tenemos mucho en común
// Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra

const inputElement = document.getElementById('insert_response');
const inputElement2 = document.getElementById('insert_response2');
const buttonElement = document.querySelector('.btn');
let arrFilms = [];

function handlerButtonClick(){
    
    //recojo el valor de los input 1
    let film1 = inputElement.value;
    if(film1 !==""){//si está vacío no se inserta nada (igual con input2)
    //guardo el primer valor  en el array 
    arrFilms.push(film1);
    }
    //recojo el valor del input 2
    let film2 = inputElement2.value;
    if(film2 !==""){
    //guardo los valores en un array
    arrFilms.push(film2);
    }
    console.log(arrFilms);
    
    // cuando el array tiene contenido//lo recorro con un for... of
    for(const film of arrFilms){//LA CONSTANTE FILM CADA VUELTA TENDRA UN ELEMENTO DEL BUCLE Y VA A SER LA FORMA RECORRERLO
        console.log(`¡A mí también me encantó ${film}! Tenemos mucho en común, humana.`);
    }
    //imprimo en pantalla el mensaje que me piden con el titulo del la OBRA siendo esta uno de los elementos del array
    //
}

buttonElement.addEventListener('click', handlerButtonClick);



