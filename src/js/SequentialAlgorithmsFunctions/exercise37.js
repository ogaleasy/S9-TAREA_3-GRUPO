function sumaNumerosPositivos(_numero) {
    let suma = 0;
    let numeroUsuario = parseInt(_numero);
    let respuesta

    do {
        if (numeroUsuario >= 0) {
            suma += numeroUsuario;
            numeroUsuario = parseInt(prompt("Ingrese un número: "));
        }
    } while (numeroUsuario >= 0);

    respuesta = "La suma de los números ingresados es: " + suma;
    return respuesta
};
