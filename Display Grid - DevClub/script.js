let valInput = document.querySelector('#display').value;

function addCaracter(caracter){
    document.querySelector('#display').value += caracter;
}

function allClean(){
    document.querySelector('#display').value = '';
}

function calcular(){
    let valInput = document.querySelector('#display').value;
    document.querySelector('#display').value = eval(valInput);
}

function inverter(){
    let valInput = document.querySelector('#display').value;
    document.querySelector('#display').value = valInput * -1;

}