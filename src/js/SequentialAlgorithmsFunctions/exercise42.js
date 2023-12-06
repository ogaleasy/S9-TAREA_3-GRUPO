function buscarElemento(arregloString, delimiter, _numero) {
    // Split the string into an array based on the delimiter
    let arreglo = arregloString.split(delimiter);

    // Convert array elements from strings to numbers
    arreglo = arreglo.map(element => parseFloat(element));

    _numero = parseInt(_numero);
    let encontrado = false;
    let respuesta

    for (let indice = arreglo.length - 1; indice >= 0; indice--) {
        if (arreglo[indice] === _numero) {
            encontrado = true;
            break; // Salimos del bucle si encontramos el número
        }
    }

    if (encontrado) {
        respuesta = "El número " + _numero + " está presente en el arreglo."
    } else {
        respuesta = "El número " + _numero + " no está presente en el arreglo."
    }

    return respuesta
};
