function encontrarMayorMenor(arregloString, delimiter) {
    // Split the string into an array based on the delimiter
    let arreglo = arregloString.split(delimiter);

    // Convert array elements from strings to numbers
    arreglo = arreglo.map(element => parseFloat(element));

    let respuesta
    let _mayor = arreglo[0];
    let _menor = arreglo[0];

    for (let indice = arreglo.length - 1; indice >= 0; indice--) {
        if (arreglo[indice] > _mayor) {
            _mayor = arreglo[indice];
        }

        if (arreglo[indice] < _menor) {
            _menor = arreglo[indice];
        }
    }

    respuesta = "El valor máximo en el arreglo es: " + _mayor + "\n"
    respuesta = respuesta + "El valor mínimo en el arreglo es: " + _menor

    return respuesta
};
