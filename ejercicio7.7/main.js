'use strict';

// Objeto(elementos iguales ) que contiene array(elementos diferentes)
const adalabers = [
    
    {
        name: "María",
        age: 29,
        job: "diseñadora",
    },

    {
        name: "Lucía",
        age: 31,
        job: "ingeniera quimica",
    },

    {
        name: "Susana",
        age: 34,
        job: "periodista",
    },

    {
        name: "Rocío",
        age: 25,
        job: "actriz",
    },

    {
        name: "Inmaculada",
        age: 21,
        job: "diseñadora",
    },

]

//FUNCION1
//countAdalabers (número de adalabers del listado);

function countAdalabers (arr) {
    const numberMembers = arr.length;
    console.log(numberMembers);
    return numberMembers;
}

countAdalabers(adalabers);

//FUNCION 2
//averageAge que devuelve la media de edad de listado.

function averageAge (arr){
    let acc = 0;
    for(let i = 0; i < arr.length; i++){
    acc = acc +  arr[i].age; //incrementa el contador sumando la edad de cada una
    }
    const resultado = acc/arr.length;
    console.log(resultado);
    return resultado;   
}
averageAge(adalabers);//meto adalaber como argumento 