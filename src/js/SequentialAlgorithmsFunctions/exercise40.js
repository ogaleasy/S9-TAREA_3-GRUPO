function promedioCalificaciones(arregloString, delimiter) {
    // Split the string into an array based on the delimiter
    let calificaciones = arregloString.split(delimiter);

    // Convert array elements from strings to numbers
    calificaciones = calificaciones.map(element => parseFloat(element));

    let suma = 0;
    for (let indice = calificaciones.length - 1; indice >= 0; indice--) {
        suma += calificaciones[indice];
    }

    let promedio = suma / calificaciones.length;

    return "El promedio de las calificaciones es: " + promedio
};
