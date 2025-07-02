const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    //tamanhoSenha = tamanhoSenha-1;
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector("#campo-senha");

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';

const chekbox = document.querySelectorAll('.chekbox');

function gerasenha() {
    let alfabeto = '';
        if (chekbox[0].cheked)  {
            alfabeto =alfabeto + letrasMinusculas;
        }
         if (chekbox[1].cheked)  {
            alfabeto =alfabeto + letrasMaiusculas;
        }
         if (chekbox[2].cheked)  {
            alfabeto =alfabeto + numeros;
        }
         if (chekbox[3].cheked)  {
            alfabeto =alfabeto + simbolos;
        }
        console.log(alfabeto);
        let senha = '';
        for (let i=0; i < tamanhoSenha; i++) {
            let numeroAleatorio = math.random()*alfabeto.length;
            numeroAleatorio = math.floor(numeroAleatorio);
            senha = senha + alfabeto[numeroAleatorio];
        }
        campoSenha.value = senha;
}

gerasenha();

for (i=0; i< chekbox.length; i++) {
    chekbox[i].onclik = geraSenha;
}
