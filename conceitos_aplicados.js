import readlineSync from 'readline-sync'

//1. Dobre os valores
//Dado um array de números, retorne um novo array com todos os números dobrados.
const numeros1 = [1, 2, 3, 4, 5];

const numerosDobrados = (numeros) => {
    return numeros.map((n) => n * 2);
}

//console.log(numerosDobrados(numeros1))

//2. Filtrar maiores de idade
//Filtre apenas os usuários com 18 anos ou mais de um array de objetos.
const usuarios2 = [
    { nome: "Ana", idade: 17 },
    { nome: "João", idade: 21 },
    { nome: "Carlos", idade: 16 },
    { nome: "Paula", idade: 19 }
];

const maioresIdade = (pessoas) => {
    return pessoas.filter((p => p.idade >= 18))
}

//3. Imprimir nomes com for
//Percorra um array de nomes e imprima cada nome no console.
const nomes3 = ["Ana", "Carlos", "Bianca", "João"];

const imprimirNome = (nomes) => {
    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i])
    }
}

//4. Contar de 1 a 10 com for
//Crie uma função que imprime os números de 1 a 10 no console.

const zeroadez = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}


//5, Imprimir índice e nome com forEach
//Dado um array de nomes, imprima no formato 0 - Ana.
const nomes5 = ["Lucas", "Mariana", "Pedro", "Aline"];

const nomesIndices = (array) => {

    array.forEach((array, i) => {
        console.log(`${i} - ${array}`)
    });
}

//6. Imprimir os dados de um objeto com for...in
//Dado um objeto com nome, idade e profissão, imprima cada chave e valor.
const pessoa6 = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor"
};

const imprimirDados = (pessoa) => {
    for (const dados in pessoa) {
        console.log(`${dados}: ${pessoa[dados]}`)
    }
}

//7. Imprimir nomes com mais de 5 letras
const nomes7 = ["Ana", "Beatriz", "Carlos", "Eva", "Fernanda"];

const imprimirNomesCincoLetras = (nomes) => {
    for (let n of nomes) {
        n.length > 5
            ? console.log(n)
            : false
    }
}

// 8. Somar todos os números de um array (for...of)
const valores8 = [10, 20, 30, 40];

const somarNumeros = (array) => {

    let somaArray = 0

    for (const numero of array) {
        somaArray += numero
    }

    return somaArray
}

const whileAteDez = () => {

    var i = 1

    const texto = readlineSync.question("Digite algo: ")

    if (texto === 'Sair' ) {
        return true
    }

    while (i <= 10) {
        console.log(i)
        i++
    }

}

whileAteDez()



