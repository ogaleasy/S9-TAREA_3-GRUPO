function calcularImpuestoSalario3(salarioAnual) {
    salarioAnual = parseFloat(salarioAnual);
    let impuesto;

    if (salarioAnual > 20000) {
        impuesto = salarioAnual * 0.15;
    } else {
        impuesto = 0; // No hay impuesto si el salario no es mayor a $20,000
    }

    console.log("El impuesto sobre la renta es: ", impuesto);
    return "El impuesto sobre la renta es: " + impuesto;
};
