
/*
TO DO
Evitar que se pueda sobreescribir filas terminadas

Poner letras amarillas en letras que estén pero no bien colocadas

Clase Diccionario de palabras y que la palabra secreta salga random de ahí además de poder comprobar
que la palabra escrita en la fila existe en ella

Historia de victorias y derrotas (localStorage) que se pueda consultar en un botón

Poder jugar diferentes partidas pulsando botón para iniciar nuevo juego

*/



const PALABRA = 'PERRO'
var juegoSuperado = false
var palabraEscrita = ''

function mostrarErrorPalabra () {
    let mensajeError = document.getElementById('mensajeError')
    mensajeError.innerHTML = "La palabra escrita no existe"
    mensajeError.style.display = ''
    setTimeout(function(){
        mensajeError.style.display = 'none'
    }, 2000);

}

function comprobarResultado(fila){

    if ( palabraEscrita == PALABRA ) {
        juegoSuperado = true
        alert("Ganaste, la palabra era: " + PALABRA)
    }
    if (( !juegoSuperado ) && ( fila == "fila5" )){
        alert("Perdiste")
    }

    palabraEscrita = ''

}


function cambiarCelda (e, numCelda) {

    let tecla = e.keyCode || e.which
    if (tecla>64 && tecla<91){
        let celda = document.getElementById(numCelda)
        console.log("tecla pulsada: " + celda.value)
        celda.value = celda.value.toUpperCase()
        let nextCelda = document.getElementById(numCelda + 1);
        nextCelda.focus()
        
    }else console.log('pulsa letra válida')

    //celda.style.backgroundColor = "red";
}

function resolverFila (e, numCelda, numFila) {

    let tecla = e.keyCode || e.which
    if (tecla>64 && tecla<91){
        console.log("fila: " + numFila)

        let numPrimeraCeldaFila = numCelda - 4
        for (let i = 0; i < 5; i++) {
            let celda = document.getElementById(numPrimeraCeldaFila + i)
            celda.value = celda.value.toUpperCase()
            palabraEscrita += celda.value
                if (celda.value == PALABRA.charAt(i)) {
                    celda.style.backgroundColor = "green"
                }else {
                    celda.style.backgroundColor = "red"
                }
        }
        console.log(palabraEscrita.length)
        console.log(palabraEscrita)
        comprobarResultado(numFila, palabraEscrita)
        mostrarErrorPalabra()

            if (numFila !='fila5') { 
                let nextCelda = document.getElementById(numCelda + 1);
                nextCelda.focus()
            }
        

    }else console.log('pulsa letra válida')

    
}

