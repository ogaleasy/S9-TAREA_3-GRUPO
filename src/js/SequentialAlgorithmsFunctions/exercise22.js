function calcularBonoAntiguedad(anosTrabajados, salario) {
    anosTrabajados = parseInt(anosTrabajados);
    salario = parseFloat(salario);
    let bono;

    if (anosTrabajados > 5) {
        bono = salario * 0.05;
    } else {
        bono = 0; // No hay bono si no ha trabajado más de 5 años
    }

    console.log("Su bono por antigüedad es: ", bono);
    return "Su bono por antigüedad es: " + bono;
};
