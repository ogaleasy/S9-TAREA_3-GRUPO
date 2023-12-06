function calcularBMI(peso, altura) {
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    let bmi = peso / (altura * altura);
    let resultado = "Su BMI es: " + bmi + ":\n";
    console.log("Su BMI es: ", bmi);

    if (bmi < 18.5) {
        console.log("Usted está bajo peso.");
        resultado = resultado + "Usted está bajo peso."
    } else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("Usted tiene un peso saludable.");
        resultado = resultado + "Usted tiene un peso saludable."
    } else if (bmi >= 25 && bmi < 29.9) {
        console.log("Usted tiene sobrepeso.");
        resultado = resultado + "Usted tiene sobrepeso."
    } else {
        console.log("Usted tiene obesidad.");
        resultado = resultado + "Usted tiene obesidad."
    }

    return resultado;
};
