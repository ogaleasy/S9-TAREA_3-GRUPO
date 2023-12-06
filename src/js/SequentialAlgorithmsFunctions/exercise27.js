function calcularDescuentoVolumenCompra3(cantidadUnidades, precioUnitario) {
    let descuento, precioFinal;

    cantidadUnidades = parseFloat(cantidadUnidades);
    precioUnitario = parseFloat(precioUnitario);

    if (cantidadUnidades > 100) {
        descuento = 0.15; // Aplicar un descuento del 15%
    } else {
        descuento = 0; // No hay descuento si no se cumple la condición
    }

    precioFinal = cantidadUnidades * precioUnitario * (1 - descuento);

    console.log("El precio final con el descuento es: ", precioFinal);
    return "El precio final con el descuento es: " + precioFinal;
};
