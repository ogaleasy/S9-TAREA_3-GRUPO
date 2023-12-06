function calcularPrecioConDescuento(precio, descuento) {
    precio = parseFloat(precio);
    descuento = parseFloat(descuento);
    let precioFinal = precio - (precio * (descuento / 100));

    console.log("El precio final después del descuento es: ", precioFinal);
    return "El precio final después del descuento es: " + precioFinal;
};
