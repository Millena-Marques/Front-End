const check = document.querySelector('input#check')
const pass = document.querySelector('input#pass')

function show(){
    if(check.checked){
        pass.type = 'text';
    }
    else{
        pass.type = 'password';
    }
}