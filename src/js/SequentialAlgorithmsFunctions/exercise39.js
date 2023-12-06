function sumaElementosArreglo(arregloString, delimiter) {
    // Split the string into an array based on the delimiter
    let arreglo = arregloString.split(delimiter);

    // Convert array elements from strings to numbers
    arreglo = arreglo.map(element => parseFloat(element));

    // Sum the elements
    let suma = 0;
    for (let indice = arreglo.length - 1; indice >= 0; indice--) {
        suma += arreglo[indice];
    }

    return "La suma de los elementos en el arreglo es: " + suma;
};
