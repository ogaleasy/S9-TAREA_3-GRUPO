// Function to add two numbers
function sumaDosNumeros(num1, num2) {
    // Ensure the provided values are treated as numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    // Perform the addition operation
    let resultado = num1 + num2;
  
    // Display the result to the user
    return "La suma de " + num1 + " y " + num2 + " es: " + resultado;
  };
