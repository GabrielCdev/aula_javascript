function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Agora aqui!!!</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar!!!");
}

function redirecionar(){
    // window.open("https://github.com/GabrielCdev"); // Abre em outra aba
    window.location.href = "https://github.com/GabrielCdev"; //Abre na mesma aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    // alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

/*
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    // alert("Trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}
*/

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function validaIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2){
    return n1+n2;
}  

alert(soma(5,10));

*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
// alert(d.getMonth()+1); //+1 pq ele conta do 0.
// alert(d.getMinutes());
// alert(d.getDay());
alert(d.getHours());
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual a sua idade?");
// var idade = 18;
if(idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};
*/

/* 
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

// var lista = ["maçã", "pêra", "laranja"];
//console.log(lista[1]);
//alert(lista[1]);
// lista.push("uva"); //Inserir
// lista.pop(); //Retira o último elemento inserido
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista[0]);
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "));


// var nome = "Gabriel C."; //JS é tipagem dinâmica
// var n1 = 20;
// var n2 = 10;    
// var teste = "20";
// var teste2 = "10";
// var frase = "Japão é o melhor time do mundo!!";
// alert(nome + " tem " + idade + " anos.");
// alert(n1 + n2); */
// alert(teste + teste2)
//  console.log(nome);
// console.log(n1 + n2); //Qualquer operação matemática
// console.log(frase.replace("Japão", "Brasil"));
//  console.log(frase.toUpperCase()); //Tudo maiúsculo
// console.log(frase.toLowerCase()); //Tudo minúsculo
// alert(frase.replace("Japão", "Brasil"));

//O console informa quando dá erro!
