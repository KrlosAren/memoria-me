const colorA = document.getElementById('colorA')
const colorB = document.getElementById('colorB')
const colorC = document.getElementById('colorC')
const colorD = document.getElementById('colorD')


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
        setTimeout(this.subirNivel()
        ,500)
    }

    iniciar(){
        this.subirNivel = this.subirNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.toggleBtnStart()

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
            containerGame.classList.add('hide')
            containerInicio.classList.remove('hide')
        }else{
            btnStart.classList.add('hide')
            containerGame.classList.remove('hide')
            containerInicio.classList.add('hide')
        }     
    }
    
    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map( n => Math.round(Math.random() * 3) + 1 )  
        
    }
    
    subirNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.eventoBotones()
    }

    cambiarNumeroAColor(numero){
        switch (numero) {
            case 1:
                return 'colorA'
            case 2:
                return 'colorB'    
            case 3:
                return 'colorC' 
            case 4:
                return 'colorD' 
        }
    }   

    cambiarColorANumero(color){
        switch (color) {
            case 'colorA':
                    return 1
            case 'colorB':
                    return 2
            case 'colorC':
                    return 3
            case 'colorD':
                    return 4
        }
    }

    iluminarSecuencia(){
        for ( let i = 0; i < this.nivel; i++ ) {
                const color = this.cambiarNumeroAColor(this.secuencia[i])
                setTimeout(() =>  this.iluminarColor(color), 1000 * i)
            }
        }

    iluminarColor(color){
       this.colores[color].classList.add('opacity')
       setTimeout(() => this.apagarColor(color), 350)
    }   
    apagarColor(color){
        this.colores[color].classList.remove('opacity')
    }

    eventoBotones(){
        this.colores.colorA.addEventListener('click',this.elegirColor)
        this.colores.colorB.addEventListener('click',this.elegirColor)
        this.colores.colorC.addEventListener('click',this.elegirColor)
        this.colores.colorD.addEventListener('click',this.elegirColor)
    }

    removerEventosBotones(){
        this.colores.colorA.removeEventListener('click',this.elegirColor)
        this.colores.colorB.removeEventListener('click',this.elegirColor)
        this.colores.colorC.removeEventListener('click',this.elegirColor)
        this.colores.colorD.removeEventListener('click',this.elegirColor)
    }

    elegirColor(ev){
       const nombreColor = ev.target.dataset.color
       const numeroColor = this.cambiarColorANumero(nombreColor)
       this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]) 
        {
            this.subnivel++
            if (this.subnivel == this.nivel) {
                this.nivel++
                this.removerEventosBotones()
                if(this.nivel == ULTIMO_NIVEL + 1){
                    this.ganaste()
                }else{
                    setTimeout(this.subirNivel, 1000)
                }
            } 
        } else {
            this.perdiste()
        }
    }

    ganaste(){
        swal({
            icon: "success",
          })
          .then( this.iniciar() )
    }

    perdiste(){
        swal({
    title: "Fallaste, lo sentimos!!",
    text: "Intentalo de nuevo. Supera tu marca",
    icon: "error",
    button: "OK"
  })
        .then(() => {
            this.removerEventosBotones()
            this.iniciar() 
        })
    }


}

function start(){
    window.juego = new Juego()
}





/*
window.addEventListener('click',function(ev){
    this.console.log(ev.target)
})*/