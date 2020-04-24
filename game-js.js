const parrafo = document.getElementById('p')
const btnStart = document.getElementById('btnInicio')
const background = document.getElementById('background')


class Juego{
    constructor(){
        this.iniciar = this.iniciar.bind(this)
        this.iniciar()
    }

    iniciar(){
        this.toggleBtnStart()
    }

    toggleBtnStart(){
        btnStart.classList.add('hide')  
        this.cambiarBack()
    }

    cambiarBack(){
        background.classList.add('back-2')
    }
}   

function start(){
    window.juego = new Juego()
}

function cambiarModoOscuro(){
    let cuerpoWeb = document.body
    cuerpoWeb.classList.toggle('oscuro')
}