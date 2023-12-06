function verificarElegibilidadVotar(edad) {
    edad = parseInt(edad);

    if (edad >= 18) {
        console.log("Usted es elegible para votar.");
        return "Usted es elegible para votar."
    } else {
        console.log("Usted no es elegible para votar.");
        return "Usted no es elegible para votar."
    }
};
