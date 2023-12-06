function calcularSueldoConAumento(salarioActual, aumento) {
    salarioActual = parseFloat(salarioActual);
    aumento = parseFloat(aumento);
    let nuevoSalario = salarioActual + (salarioActual * (aumento / 100));

    console.log("Su nuevo salario después del aumento es: ", nuevoSalario);
    return "Su nuevo salario después del aumento es: " + nuevoSalario;
};
