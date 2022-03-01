function input(numero) {
    let numeros = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numeros + numero;
}

function clean() {
    document.getElementById("resultado").innerHTML = ""
}

function deletar() {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado).toFixed(2);
    } else{
        document.getElementById("resultado").innerHTML = "INVALIDO";
    }
}

