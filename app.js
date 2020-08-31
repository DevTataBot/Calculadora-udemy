const botonNum = document.getElementsByName('data-numbrer');
const botonOp = document.getElementsByName('data-operador');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('entrada');
var opActual ='';
var opAnterior = '';
var calcula = undefined;

// eventos
botonNum.forEach(function(botones){
    botones.addEventListener('click',function(){
        agregarNum(botones.innerText);
    });
});
botonOp.forEach(function(botones){
    botones.addEventListener('click',function(){
        operacion(botones.innerText);
    });
});
botonIgual.addEventListener('click',function(){
    calcular();
    actualizaDisplay();
});
botonDelete.addEventListener('click',function(){
    clear();
    actualizaDisplay();
});

function agregarNum(num){
    opActual = opActual.toString() + num.toString();
    actualizaDisplay();
}
function actualizaDisplay(){
   result.value = opActual;
}
function operacion(op){
    if(opActual === '')return;
    if(opAnterior !==''){
        calcular();
    }
    calcula = op.toString();
    opAnterior = opActual;
    opActual ='';
}
function calcular(){
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);
    if(isNaN(anterior || isNaN(actual)))return;
    switch(calcula){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opActual = calculo;
    calcula = undefined;
    opAnterior = '';
}
function clear(){
    opActual = '';
    opAnterior = '';
    calcula = undefined;
}
clear();