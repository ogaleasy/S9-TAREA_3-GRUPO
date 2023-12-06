function calcularCostoEnvio(distancia) {
    distancia = parseFloat(distancia);
    let costoEnvio;

    if (distancia < 50) {
        costoEnvio = 10;
    } else {
        costoEnvio = 20;
    }

    console.log("El costo de envío es: $", costoEnvio);
    return "El costo de envío es: $" + costoEnvio;
};
