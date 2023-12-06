function calcularDescuentoLealtad(totalCompras) {
    totalCompras = parseFloat(totalCompras);
    let descuento;

    if (totalCompras > 500) {
        descuento = 0.10; // Aplicar un descuento del 10%
        console.log("Se aplicó un descuento del 10% en su próxima compra.");
        return "Se aplicó un descuento del 10% en su próxima compra."
    } else {
        descuento = 0; // No hay descuento si el total es igual o inferior a $500
        console.log("No se aplicó ningún descuento.");
        return "No se aplicó ningún descuento."
    }
};
