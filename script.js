const result = document.querySelector('.resultado');
const calcular = document.querySelector('.calcular');

function insert( valor){
    result.innerHTML += valor;
}
function clean(){
    result.innerHTML ='';
}
function back() {
    if( result.textContent ){
      let resul = document.getElementById('result').innerHTML
        result.innerHTML = resul.substring(0,resul.length -1);
        //IF=SE O RESULT=ID 
        //CRIAR UMA VARIAVEL E DENTRO DELA ESTA O ELEMENTO POR ID
        //O ELEMENTO DO ID VAI SER = A VARIAVEL EM SEU COMPRIMENTO////(substring) MENOS UM ELEMENTO A ESQUEDA(length)
    }
}
function confirmar(){
    if(result.textContent != 'Erro'){
        document.getElementById('result').innerHTML = eval(result.innerHTML)
    }
}