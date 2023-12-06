function calcularCostoServicio(horasServicio) {
    let costoTotal, descuento;
    let respuesta

    horasServicio = parseFloat(horasServicio);

    // Calcular el costo total
    costoTotal = horasServicio * 10; // Suponiendo un costo por hora de $10
    respuesta = "El costo total del servicio es: $" + costoTotal + "\n"
    
    if (horasServicio > 10) {
        descuento = 20; // Aplicar un descuento del 20%
        costoTotal = costoTotal - (costoTotal * (descuento / 100));
        respuesta = respuesta + "Se aplicó un descuento del 20%.";
    } else {
        descuento = 0; // No hay descuento si no se cumplen las condiciones
    }

    return respuesta;
};
