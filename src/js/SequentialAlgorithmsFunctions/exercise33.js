function adivinaNumero(_numero) {
    let adivinanzaExitosa = true;
    let numeroAdivinar = Math.floor(Math.random() * 10) + 1;
    let numeroUsuario = parseInt(_numero);
    let intento = 1;
    let respuesta

    while (adivinanzaExitosa) {
        if (numeroUsuario === numeroAdivinar) {
            respuesta = "¡Felicitaciones! Adivinaste el número " + numeroAdivinar + " en " + intento, " intentos.";
            adivinanzaExitosa = false;
        } else {
            if (numeroUsuario < numeroAdivinar) {
                alert("El número es mayor.");
            } else {
                alert("El número es menor.");
            }
        }

        intento++;

        if (adivinanzaExitosa) {
            numeroUsuario = parseInt(prompt("Ingresa tu adivinanza: "))
        }
    }

    return respuesta
};
