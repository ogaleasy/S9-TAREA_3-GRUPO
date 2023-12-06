function sumaNumerosImpares(numeroMaximo) {
    let suma = 0;
    let numero = 1;

    while (numero <= numeroMaximo) {
        suma += numero;
        numero += 2;
    }
    
    return "La suma de los números impares del 1 al " + numeroMaximo + " es: " + suma
};
