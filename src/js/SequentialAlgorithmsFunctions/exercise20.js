function calcularImpuestoSalario2(salarioAnual) {
    salarioAnual = parseFloat(salarioAnual);
    let impuesto;

    if (salarioAnual > 10000 && salarioAnual <= 20000) {
        impuesto = salarioAnual * 0.10;
    } else {
        impuesto = 0; // No hay impuesto si el salario no está en ese rango
    }

    console.log("El impuesto sobre la renta es: ", impuesto);
    return "El impuesto sobre la renta es: " + impuesto;
};
