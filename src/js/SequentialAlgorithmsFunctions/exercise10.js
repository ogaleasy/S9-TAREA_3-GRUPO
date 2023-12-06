function verificarAnoBisiesto(ano) {
    ano = parseInt(ano);

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log("El año ", ano, " es bisiesto.");
        return "El año " + ano + " es bisiesto."
    } else {
        console.log("El año ", ano, " no es bisiesto.");
        return "El año " + ano + " no es bisiesto."
    }
};
