function encontrarMayor(num1, num2, num3) {
    let mayor;
    // Ensure the provided values are treated as numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    console.log("El número mayor es: ", mayor);
    return "El número mayor es: " + mayor;
};
