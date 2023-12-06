// Function for a simple calculator
function calculadoraSimple(num1, num2, operacion) {
    let resultado;
    // Ensure the provided values are treated as numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operacion) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
            return resultado = "Error: No se puede dividir por cero.";
        }
        break;
      default:
        return resultado = "Operación no válida.";
    }

    console.log("El resultado de la operación es: ", resultado)
    return "El resultado de la operación es: " + resultado;
  };
  