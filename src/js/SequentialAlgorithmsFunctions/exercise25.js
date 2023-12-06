function calcularDescuentoVolumenCompra(cantidadUnidades, precioUnitario) {
    let descuento, precioFinal;
    
    cantidadUnidades = parseFloat(cantidadUnidades);
    precioUnitario = parseFloat(precioUnitario);

    if (cantidadUnidades >= 10 && cantidadUnidades <= 50) {
        descuento = 0.05; // Aplicar un descuento del 5%
    } else {
        descuento = 0; // No hay descuento si no se cumple la condición
    }

    precioFinal = cantidadUnidades * precioUnitario * (1 - descuento);

    console.log("El precio final con el descuento es: ", precioFinal);
    return "El precio final con el descuento es: " + precioFinal;
};
