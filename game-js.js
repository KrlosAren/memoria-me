const colorA = document.getElementById('colorA')
const colorB = document.getElementById('colorB')
const colorC = document.getElementById('colorC')
const colorD = document.getElementById('colorD')

const containerGame = document.getElementById('contenedorGame')
const containerInicio = document.getElementById('contenedorInicio')

const btnStart = document.getElementById('btnInicio')



class Juego{
    constructor(){
        this.iniciar = this.iniciar.bind(this)
        this.iniciar()

    }

    iniciar(){
        this.toggleBtnStart()

        this.colores = {
            colorA,
            colorB,
            colorC,
            colorD
        }
    }

    toggleBtnStart(){

        if (btnStart.classList.contains('hide')) {
            btnStart.classList.remove('hide')
        }else{
            btnStart.classList.add('hide')
            containerGame.classList.remove('hide')
            containerInicio.classList.add('hide')
        }       
    }   

    eventoBotones(){
        this.colores.colorA.addEventListener('click',function(){
            alert('hola')
        })
    }
}

function start(){
    window.juego = new Juego()
}

