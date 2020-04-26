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
        this.iluminarCuadrados()
        this.eventoBotones()
    }

    cambiarNumeroAColores(numero){
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

    cambiarColoresANumero(color){
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

    encenderSecuencia(){
        for(let i = 0; i < this.nivel; i++){
            const color = this.cambiarNumeroAColores(this.secuencia[i])
            setTimeout(() =>  this.iluminarCuadrados(color), 1000 * i)
        }
    }

   iluminarCuadrados(color){
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
       const numeroColor = this.cambiarColoresANumero(nombreColor)
       this.iluminarCuadrados(nombreColor)
       if(numeroColor === this.secuencia[this.subnivel]){
            this.subirNivel++
            if(this.subirNivel == this.nivel){
                this.nivel++
                this.removerEventosBotones()
                if(this.nivel == (ULTIMO_NIVEL + 1)){
                    this.ganaste()
                }
            }else{
                setTimeout(this.subirNivel(), 1000);
            }
       }else{
           this.perdiste()
       }
    }

    ganaste(){
        alert('ganaste')
    }

    perdiste(){
        alert('perdiste')
    }

}

function start(){
    window.juego = new Juego()
}





/*
window.addEventListener('click',function(ev){
    this.console.log(ev.target)
})*/