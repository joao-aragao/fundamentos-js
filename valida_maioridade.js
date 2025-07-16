function validaMaioridade(idade) {

    // Converter o parametro recebido da função para numerico
    const idadeNumerica = Number(idade)

    // Debug
    //console.log(typeof(idadeNumerica), isNaN(idadeNumerica))

    // valida se é um número e número menor que 0
    if (isNaN(idadeNumerica) || idadeNumerica < 0 || !Number.isInteger(idadeNumerica)) {
        return 'Não é idade válida'
    }

    // valida se idade é maior ou igual a 18 ou não
    return idadeNumerica >= 18 
        ? `Maior de idade: ${idadeNumerica} anos`
        : `Menor de idade: ${idadeNumerica} anos`
}

