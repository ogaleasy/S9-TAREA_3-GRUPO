function sumaNumerosPares(maximo) {
    let suma = 0;

    maximo = parseInt(maximo)

    for (let i = 2; i <= maximo; i += 2) {
        suma += i;
    }

    console.log("La suma de los números pares del 1 al ", maximo, " es: ", suma);
    return "La suma de los números pares del 1 al " + maximo + " es: " + suma;
};
