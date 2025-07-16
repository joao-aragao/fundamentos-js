function validaMaioridade(idade) {

    // Converter o parametro recebido da função para numerico
    const idadeNumerica = Number(idade)

    // valida se é um número e número menor que 0
    if (isNaN(idadeNumerica) || idadeNumerica < 0 || !Number.isInteger(idadeNumerica)) {
        return 'Não é idade válida'
    }

    // valida se idade é maior ou igual a 18 ou não
    return {
        idade: idadeNumerica,
        maioridade: idadeNumerica >= 18 // retorna true or false
    }

}

function validaStatusEstudante(nome, idade, estaEstudando) {

    const objIdade = validaMaioridade(idade)

    if (typeof objIdade !== 'object' || objIdade === null || !('idade' in objIdade)) {
        return 'Erro: idade inválida'
    }

    if (typeof nome !== 'string') {
        return 'Erro: Nome inválido'
    }

    if (typeof estaEstudando !== 'boolean') {
        return 'Erro: valor de estarEstudando deve ser boolenao true ou false'
    }

    return `Seu nome é ${nome}, sua idade é ${objIdade.idade} anos e hoje você ${estaEstudando === true ? 'está' : 'não está'} estudando`



}

console.log(validaStatusEstudante(1, -10, 1))

