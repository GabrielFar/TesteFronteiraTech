var valor1
var valor2
var operacao
var tela = document.getElementById("idInput")

function igualar() {
    valor2 = Number(tela.value)
    if (operacao == "+"){
        tela.value = Math.round((valor1 + valor2) * 10) / 10

    } else if (operacao == "-"){
        tela.value = Math.round((valor1 - valor2) * 10) / 10

    } else if (operacao == "*"){
        tela.value = Math.round(valor1 * valor2 * 1000000000)/1000000000
        
    } else if (valor2 == 0){
        alert("Não é possível dividir por zero")

    } else if (operacao == "/"){
        if (valor1 % valor2 == 0){
            tela.value = valor1/valor2
        } else{   
            tela.value = Math.round((valor1 / valor2)*1000000000)/1000000000
        }
    }
    valor1 = null
    valor2 = null
    operacao = null
};

function num(num){
    tela.value = tela.value + num
};

function apagar() {
    tela.value = ""    
}

function somar() {
    if (operacao != null) {
        igualar()
    }
    valor1 = Number(tela.value)
    tela.value = ""
    operacao = "+"
}

function subtrair() {
    if (operacao != null) {
        igualar()
    }
    valor1 = Number(tela.value)
    tela.value = ""
    operacao = "-"
}

function multiplicar() {
    if (operacao != null) {
        igualar()
    }
    valor1 = Number(tela.value)
    tela.value = ""
    operacao = "*"
}

function dividir() {
    if (operacao != null) {
        igualar()
    }
    valor1 = Number(tela.value)
    tela.value = ""
    operacao = "/"
}