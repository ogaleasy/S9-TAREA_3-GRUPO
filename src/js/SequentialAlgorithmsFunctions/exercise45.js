function buscarIndiceValor(arregloString, delimiter, _numero) {
    // Split the string into an array based on the delimiter
    let arreglo = arregloString.split(delimiter);

    // Convert array elements from strings to numbers
    arreglo = arreglo.map(element => parseFloat(element));

    let _valor = parseInt(_numero);
    let encontrado = false;
    let respuesta

    respuesta = "Los índices del valor " + _valor, " en el arreglo son: "

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === _valor) {
            respuesta = respuesta + "\n " + (i + 1)
            encontrado = true;
        }
    }

    if (!encontrado) {
        respuesta = "El valor " + _valor, " no se encuentra en el arreglo."
    }

    return respuesta
};
