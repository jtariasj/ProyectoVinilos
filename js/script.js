let pantalla = document.getElementById("pantalla");
let numero;
let signo;
//var
//las ias las declaran con var, pero las variables declaradas con
//var estan obsoletas, son variables de tipo global por lo que son inseguras
function agregar(valor){
    if(pantalla.value == "0")
        pantalla.value = valor
    else
        pantalla.value += valor;

}

function limpiar(){
    pantalla.value = "0"
}

function operacion(oper){
    numero = pantalla.value;
    limpiar();
    signo = oper;

}
function calcular(){
    let actual = Number(pantalla.value);
    let anterior = Number(numero);
    if (signo == "+")
        pantalla.value = anterior + actual;
    else if (signo == "-")
        pantalla.value = anterior - actual;
    else if (signo == "*")
        pantalla.value = anterior * actual;
    else if (signo == "/"){
            if(actual == 0){
                pantalla.value = "ERR";
                
            }else{ 
                pantalla.value = anterior / actual;
            }
    }

    
}

