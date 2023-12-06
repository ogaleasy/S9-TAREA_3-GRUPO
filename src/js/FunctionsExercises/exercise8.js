function contarCaracterEnFrase(frase, _caracter) {
    let contador = 0;

    for (let index = 0; index < frase.length; index++) {
        if (frase.charAt(index) === _caracter) {
            contador++;
        }
    }

    return "El carácter: " + _caracter + " aparece " + contador + " veces en la frase."
};
