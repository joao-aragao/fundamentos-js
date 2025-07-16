function validaMaioridade(idade) {

    let objRetorno = {}

    // Converter o parametro recebido da função para numerico
    const idadeNumerica = Number(idade)

    // Debug
    //console.log(typeof(idadeNumerica), isNaN(idadeNumerica))

    // valida se é um número e número menor que 0
    if (isNaN(idadeNumerica) || idadeNumerica < 0 || !Number.isInteger(idadeNumerica)) {
        return 'Não é idade válida'
    }

    // valida se idade é maior ou igual a 18 ou não
    if (idadeNumerica >= 18) {
        objRetorno["idade"] = idadeNumerica
        objRetorno["maioridade"] = true

        return objRetorno

    } else {
        objRetorno["idade"] = undefined
        objRetorno["maioridade"] = false
        return objRetorno
    }
}

function validaStatusEstudantes (nome, idade, bol_estudo) {


    
    if (typeof nome === string) {
        return 'Nome inválido'
    }

    
}

//console.log(validaStatusEstudantes(1, 12, true))

