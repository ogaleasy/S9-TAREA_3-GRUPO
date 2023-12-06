function invertirArreglo(arregloString, delimiter) {
    // Split the string into an array based on the delimiter
    let arregloOriginal = arregloString.split(delimiter);

    // Convert array elements from strings to numbers
    arregloOriginal = arregloOriginal.map(element => parseFloat(element));

    let longitudArreglo = arregloOriginal.length
    let arregloInvertido = [];
    let respuesta

    for (let indice = 0; indice < longitudArreglo; indice++) {
        //let elemento = arregloOriginal[indice];
        arregloInvertido[indice] = arregloOriginal[longitudArreglo - indice - 1];
        //arregloInvertido[longitudArreglo - indice + 1] = elemento;
    }

    respuesta = "Arreglo invertido: "
    respuesta = respuesta + "\n" + arregloInvertido

    return respuesta
};
