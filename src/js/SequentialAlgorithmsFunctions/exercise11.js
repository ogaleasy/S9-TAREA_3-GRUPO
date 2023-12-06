function verificarPositivoNegativoCero(numero) {
    let respuesta
    numero = parseFloat(numero);

    if (numero > 0) {
        console.log("El número es positivo.");
        respuesta = "El número es positivo."
    } else if (numero < 0) {
        console.log("El número es negativo.");
        respuesta = "El número es negativo."
    } else {
        console.log("El número es cero.");
        respuesta = "El número es cero."
    }

    return respuesta
};
