'use strict'

const li        = document.querySelectorAll('.li')
const bloque    = document.querySelectorAll('.bloque')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .bloque quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .bloque con la posicion se añadimos la clase activo

// Recorriendo todos los LI
li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('active')
            // Quitando la clase activo de cada bloque
            bloque[i].classList.remove('active')
        })

        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('active')
        // En el bloque con la misma posición le añadimos la clase activo
        bloque[i].classList.add('active')

    })
})