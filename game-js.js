const colorA = document.getElementById('colorA')
const colorB = document.getElementById('colorB')
const colorC = document.getElementById('colorC')
const colorD = document.getElementById('colorD')

colorD.addEventListener('click', function(){
    this.classList.add('opacity')
})


const containerGame = document.getElementById('contenedorGame')
const containerInicio = document.getElementById('contenedorInicio')

const btnStart = document.getElementById('btnInicio')

const ULTIMO_NIVEL = 10



swal({
    title: "Desafia Tu Memoria!",
    text: "Recuerda la serie de colores y pasa al siguiente nivel.\n Son 10 niveles que desafiaran tu mente",
    icon: "info",
    button: "Empezemos"
  });

class Juego{
    constructor(){
        this.iniciar = this.iniciar.bind(this)
        this.iniciar()
        this.generarSecuencia()

    }

    iniciar(){
        this.toggleBtnStart()
        this.elegirColor = this.elegirColor.bind(this)
        this.nivel = 1
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
    
    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map( n => Math.round(Math.random() * 3) + 1 )  
    }

    cambiarNumeroAColores(numero){
        switch (numero) {
            case 1:
                return 'ColorA'
            case 2:
                return 'ColorB'    
            case 3:
                return 'ColorC' 
            case 4:
                return 'ColorD' 
        }
    }   

    encenderCuadros(){
        console.log('hola')
    }

    /*
 
   iluminarCuadrados(){
        for (let i = 0; i < this.nivel; i++) {         
            console.log(this.cambiarNumeroAColores(this.secuencia[i]))
        }
       
    }*/

    iluminarColor(){
        this.colores[color].classList.add('opacity')
    }

    apagarColor(){
        this.colores[color].classList.remove('light')
    }

    eventoBotones(){
        this.colores.colorA.addEventListener('click',this.iluminarColor)
        this.colores.colorB.addEventListener('click',this.iluminarColor)
        this.colores.colorC.addEventListener('click',this.iluminarColor)
        this.colores.colorD.addEventListener('click',this.iluminarColor)
    }

    elegirColor(){
        alert('hola')
    }
}

function start(){
    window.juego = new Juego()
}


window.addEventListener('click',function (ev) {
    console.log(this.ev)
})

