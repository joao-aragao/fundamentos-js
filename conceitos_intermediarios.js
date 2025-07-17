//1. Dobre os valores
//Dado um array de números, retorne um novo array com todos os números dobrados.
const numeros = [1, 2, 3, 4, 5];

function dobrarValor(valor) {
    return valor.map((v) => v * 2)
}

//2. Filtrar maiores de idade
//Filtre apenas os usuários com 18 anos ou mais.

const usuarios = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 20 },
    { nome: "Bianca", idade: 15 },
    { nome: "Daniel", idade: 22 }
];

function filtrarMaioridade(objUsuario) {
    return objUsuario.filter((o) => o.idade >= 18)
}


//3. Imprimir nomes com for
//Percorra o array abaixo e imprima no console:

const nomes = ["João", "Maria", "José"];

function imprimirArray(array) {


    // for enquanto tamanho do array for menor que imprima
    for (let i = 0; array.length > i; i++) {
        console.log(array[i]);
    }


    // utilizando foreach
    array.forEach((array) => {
        console.log(array)
    });


    // for of
    for (const element of array) {
        console.log(element)
    }

    // for in 
    for (let i in array) {
        console.log(array[i])
    }


    //

}

//1. Imprimir os números de 1 a 10 (use for tradicional)
//Enunciado:
//Crie uma função contarAteDez() que imprime os números de 1 a 10 no console.

function contarAteDez() {

    // let começa printando 1 e vai enquanto for menor ou igual a 10
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

// 2. Imprimir cada nome com índice (use forEach)
// Enunciado:
// Dado: nomesNovos
// Retorno esperado
// 0 - Ana
// 1 - Bruno
// 2 - Carla


/*
const nomesNovos = ["Ana", "Bruno", "Carla"];

nomesNovos.forEach((nomesNovos, i) => {
    console.log(`${i} - ${nomesNovos}`)
})
*/


//3. Somar todos os valores de um array (use for...of)
const numeros3 = [10, 20, 30];

function somarNumerosOf(array) {
    let soma = 0

    for (const numero of array) {
        soma += numero
    }

    return soma
}

console.log(somarNumerosOf(numeros3))


//4. Imprimir as propriedades de um objeto (use for...in)
//Resultado: 
/**
 * nome: Lucas
 * idade: 30
 * profissao: Dev
 */

const pessoa = {
    nome: "Lucas",
    idade: 30,
    profissao: "Dev"
};

function imprimirObjeto(objetos) {

    for (const dados in objetos) {
        console.log(`${dados}: ${objetos[dados] }`)
    }
}


const nomes2 = ["Ana", "Marcelo", "Igor", "Fernanda", "Lu"];

function imprimirNomesInteiros(nomes) {
    for (let n = 0; n < nomes.length; n++) {
        nomes[n].length > 5 ? console.log(nomes[n]) : false
    }
}









