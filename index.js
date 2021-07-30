
var colorArray = []

function num(max,min) {
    return Math.floor(Math.random()* (max-min) + min)
} 
    
function dibujar(g) {
    let canvas = document.getElementById(g.id)
    console.log(canvas)
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    for (let i = 0; i < num(g.maxQuantity, g.minQuantity); i++) {
        ctx.fillStyle = `#${col()}`
        colorArray = []
        let sizeCuadro = num(g.maxSize,g.minSize)
        ctx.fillRect(num(4,window.innerWidth),num(10,window.innerHeight), sizeCuadro,sizeCuadro)
    }
    console.log("dibujado")
    ctx.clearRect(0,0,ctx.canvas.offsetWidth,ctx.canvas.offsetHeigh)
    
}

function col() {
    for (let i = 0; i < 6; i++) {
        let numColor = num(0,16)
        if (numColor === 10) {
            colorArray.push("A")
        }
        else if(numColor === 11){
            colorArray.push("B")
        }
        else if(numColor === 12) {
            colorArray.push("C")
        }
        else if(numColor === 13){
            colorArray.push("D")
        }
        else if(numColor === 14) {
            colorArray.push("E")  
        }
        else if(numColor === 15) {
            colorArray.push("F")  
        }
        else{
            colorArray.push(numColor)
        }
    }
    return colorArray.join('').toString()
}


const getBackPoints = (g)=> window.onresize = dibujar(g) || window.addEventListener('resize', ()=> window.onresize = dibujar(g))


