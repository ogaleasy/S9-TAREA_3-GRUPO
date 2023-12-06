function calcularDescuentoVolumenCompra2(cantidadUnidades, precioUnitario) {
    let descuento, precioFinal;

    cantidadUnidades = parseFloat(cantidadUnidades);
    precioUnitario = parseFloat(precioUnitario);

    if (cantidadUnidades >= 51 && cantidadUnidades <= 100) {
        descuento = 0.10; // Aplicar un descuento del 10%
    } else {
        descuento = 0; // No hay descuento si no se cumple la condición
    }

    precioFinal = cantidadUnidades * precioUnitario * (1 - descuento);

    console.log("El precio final con el descuento es: ", precioFinal);
    return "El precio final con el descuento es: " + precioFinal;
};
