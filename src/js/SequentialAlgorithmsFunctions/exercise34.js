function contarLetrasAlfabeto(palabra) {
    let contadorLetras = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (/^[a-zA-Z]+$/.test(palabra[i])) {
            contadorLetras++;
        }
    }

    return "El número de letras del alfabeto en la palabra es: " + contadorLetras
};
