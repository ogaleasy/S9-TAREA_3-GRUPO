function calcularFacturaConImpuestos(totalFactura, impuestos) {
    totalFactura = parseFloat(totalFactura);
    impuestos = parseFloat(impuestos);
    let totalPagar = totalFactura + (totalFactura * (impuestos / 100));

    console.log("El monto total a pagar, incluyendo impuestos, es: ", totalPagar);
    return "El monto total a pagar, incluyendo impuestos, es: " + totalPagar;
};
