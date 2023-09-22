const prompt = require("prompt-sync")();


let rein = true
let capInitial
let tempoMes 
let result 
let tax 


function dados(){
    console.log("calculadora - JUROS COMPOSTOS\nValor a ser investido:")
        capInitial = parseFloat(prompt())

    console.log("Digite o valor da taxa de juros(%):")
        tax = parseFloat(prompt())

    console.log("Digite a quantidade de meses:")
        tempoMes = parseFloat(prompt())
        console.clear() 
}

function calCompound(){

        result = (capInitial*Math.pow(1+tax/100, tempoMes)).toFixed(2)
        console.log("calculadora - JUROS COMPOSTOS\n\nValor total final: R$",result, "\nValor total investido: R$",capInitial, "\nValor total em juros: R$", (result - capInitial).toFixed(2))
}

dados()
calCompound()
reinicio()

function reinicio(){   
    console.log("\nDeseja efetuar outra operação? Digite 'y' para sim ou 'n' para finalizar.")
    
    let verifyReinicio = prompt();

    if(verifyReinicio === "y" ){
        console.clear()
        rein = true
    } else {
        rein = false

    }
}