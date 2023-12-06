function cuentaRegresiva(_numero) {
    let respuesta = "Cuenta regresiva desde " + _numero + " hasta 1:"

    // Get the absolute value to ensure it's positive
    _numero = Math.abs(_numero);

    // Ensure it's an integer
    _numero = Math.floor(_numero);

    while (_numero >= 1) {
        respuesta = respuesta + "\n" + _numero
        _numero--;
    }

    return respuesta
};
