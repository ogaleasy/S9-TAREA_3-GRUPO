function contarVocales(palabra) {
    let contadorVocales = 0;

    for (let i = 0; i < palabra.length; i++) {
        if ("aeiou".includes(palabra[i].toLowerCase())) {
            contadorVocales++;
        }
    }

    console.log("El número de vocales en la palabra es: ", contadorVocales);
    return "El número de vocales en la palabra es: " + contadorVocales
};
