function contarElementosPares(arregloString, delimiter) {
    // Split the string into an array based on the delimiter
    let arreglo = arregloString.split(delimiter);

    // Convert array elements from strings to numbers
    arreglo = arreglo.map(element => parseFloat(element));

    let contadorPares = 0;

    for (let indice = arreglo.length - 1; indice >= 0; indice--) {
        let elemento = arreglo[indice];

        if (elemento % 2 === 0) {
            contadorPares++;
        }
    }

    return "El número de elementos pares en el arreglo es: " + contadorPares
};
