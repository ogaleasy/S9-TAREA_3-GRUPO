function contarDigitos(palabra) {
    let contadorDigitos = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (!isNaN(palabra[i])) {
            contadorDigitos++;
        }
    }

    console.log("El número de dígitos en la palabra es: ", contadorDigitos);
    return "El número de dígitos en la palabra es: " + contadorDigitos
};
