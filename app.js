let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //parseInt es para forzar el tipo de dato a un Integer

    console.log(numeroDeUsuario === numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el Numero  en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //coloque un operador ternario para que diga vez o veces segun en cuantas veces acerto
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es Menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;


} function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros de la lista
    if (listaNumerosSorteados.length == numeroMaximo) {
asignarTextoElemento('p','Ya se sortearon todos los numeros Posibles');
    } else {
        //si el numero generado esta incluido en la lista. includes recorre toda la lista
        //para fijarse si ya esta ese numero
        if (listaNumerosSorteados.includes(numeroGenerado)) { //se fija si el numero esta incluido en la lista
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);//incluye el numero sorteado para no volver a repetirlo
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar msj de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

/*
creo una funcion llamada asignarTextoElemento donde entre los parentecis
 llamo un elemento y un texto, luego creo una variable let elementoHTML = document.querySelector(elemento);
 que busca en todo el html el elemento con la etiqueta que le pasen por
 parametros a esta función, si no encuentra ninguno lanza error, si lo encuentra
 pues guarda ese elemento en esa variable para poder trabajar despues con ella.
 Luego utilizo .innerHTML para ponerle el texto que me pasan por parametros
 a la función asignarTextoElemento('h1', 'juego del numero secreto ACTUALIZADO');.

 Ahora la funcion asignarTextoElemento() la puedo reutilizar con distintos ELEMENTOS
 de HTML, pero siempre tendra que ser una etiqueta valida de HTML5, como
 h1, p, div... etc.
 
 Esto hace que no tenga que escribir tanto codigo repetido
 */