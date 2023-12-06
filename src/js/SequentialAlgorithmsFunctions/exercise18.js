function calcularCompraConDescuento(precioArticulo, cantidadArticulo, descuento) {
    let totalCompra = 0;
    let respuesta

    precioArticulo = parseFloat(precioArticulo);

    if (precioArticulo > 0) {
        cantidadArticulo = parseFloat(cantidadArticulo);
        totalCompra += precioArticulo * cantidadArticulo;
        respuesta = "El total de la compra es: " + totalCompra + "\n"
    }

    if (totalCompra > 100) {
        descuento = descuento;
        totalCompra -= totalCompra * (descuento / 100);
        respuesta = respuesta + "Se aplicó un descuento del 10%.";
    }

    return respuesta;
};
