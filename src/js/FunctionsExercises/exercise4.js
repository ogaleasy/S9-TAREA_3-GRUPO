function verificarParImpar(_numero) {
    let result
    // Parse input values as float for numerical operations
    _numero = parseFloat(_numero);

    if (_numero % 2 === 0) {
        result = "El número " + _numero + " es par."
    } else {
        result = "El número " + _numero + " es impar."
    }

    return result
};
