function calcularImpuestoSalario(salarioAnual) {
    salarioAnual = parseFloat(salarioAnual);
    let impuesto;

    if (salarioAnual <= 10000) {
        impuesto = salarioAnual * 0.05;
    } else {
        impuesto = 0;
    }

    console.log("El impuesto sobre la renta es: ", impuesto);
    return "El impuesto sobre la renta es: " + impuesto;
};
