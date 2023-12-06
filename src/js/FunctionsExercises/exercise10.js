function sumarListaNumeros(arregloString) {
    // Split the string into an array based on the delimiter
    let arreglo = arregloString.split(",");

    // Convert array elements from strings to numbers
    arreglo = arreglo.map(element => parseFloat(element));

    let suma = 0;
    for (let index = 0; index < arreglo.length; index++) {
        suma += arreglo[index];
    }

    return "La suma de los elementos en la lista es: " + suma;
};
