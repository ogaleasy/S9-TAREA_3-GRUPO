function determinarDiaSemana(numeroDia) {
    numeroDia = parseInt(numeroDia);
    let nombreDia;

    switch (numeroDia) {
        case 1:
            nombreDia = "Domingo";
            break;
        case 2:
            nombreDia = "Lunes";
            break;
        case 3:
            nombreDia = "Martes";
            break;
        case 4:
            nombreDia = "Miércoles";
            break;
        case 5:
            nombreDia = "Jueves";
            break;
        case 6:
            nombreDia = "Viernes";
            break;
        case 7:
            nombreDia = "Sábado";
            break;
        default:
            nombreDia = "Número de día no válido.";
    }

    console.log("El día de la semana correspondiente al número ", numeroDia, " es ", nombreDia);
    return "El día de la semana correspondiente al número " + numeroDia, " es " + nombreDia;
};
