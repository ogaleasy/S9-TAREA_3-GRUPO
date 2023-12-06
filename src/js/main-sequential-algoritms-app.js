// DOM elements
const titlePage = document.getElementById('titlePage');
const inputValue1 = document.getElementById('inputValue1');
const inputValue2 = document.getElementById('inputValue2');
const inputValue3 = document.getElementById('inputValue3');
const resultContainer = document.getElementById('resultContainer');
const calculateButton = document.getElementById('calculateButton');
const backButton = document.getElementById('backButton')

// Pages
const MAIN_PAGE = '../MainMenuPage/sequential_algorithms.html'

// Dictionary of main functions and titles
const exercises = {
    exercise1Button: {
        title: "Funcion para sumar dos numeros",
        func: sumaDosNumeros,
        input: 2,
        inputLabels: ["Número 1", "Número 2"],
    },
    exercise2Button: {
        title: "Funcion para calcular el area de un triangulo",
        func: calcularAreaTriangulo,
        input: 2,
        inputLabels: ["Base del triángulo", "Altura del triángulo"],
    },
    exercise3Button: {
        title: "Funcion para determinar si un número es par o impar",
        func: verificarParOImpar,
        input: 1,
        inputLabels: ["Número a verificar"],
    },
    exercise4Button: {
        title: "Funcion para una calculadora sencilla",
        func: calculadoraSimple,
        input: 3,
        inputLabels: ["Número 1", "Número 2", "Signo (+ - * /)"],
    },
    exercise5Button: {
        title: "Funcion para imprimir la tabla de multiplicar de un numero",
        func: tablaMultiplicar,
        input: 1,
        inputLabels: ["Número para la tabla de multiplicar"],
    },
    exercise6Button: {
        title: "Funcion para concatenar dos palabras",
        func: copiarPalabra,
        input: 2,
        inputLabels: ["Palabra 1", "Palabra 2"],
    },
    exercise7Button: {
        title: "Funcion para encontrar el numero mayor",
        func: encontrarMayor,
        input: 3,
        inputLabels: ["Número 1", "Número 2", "Número 3"],
    }, 
    exercise8Button: {
        title: "Funcion para determinar la elegibiladad para votar",
        func: verificarElegibilidadVotar,
        input: 1,
        inputLabels: ["Edad"],
    },
    exercise9Button: {
        title: "Funcion para calcular su BMI",
        func: calcularBMI,
        input: 2,
        inputLabels: ["Peso en kilogramos", "Altura en metros"],
    },
    exercise10Button: {
        title: "Funcion para saber si un año es bisiesto",
        func: verificarAnoBisiesto,
        input: 1,
        inputLabels: ["Año"],
    },
    exercise11Button: {
        title: "Funcion para verificar si un numero es positivo o negativo",
        func: verificarPositivoNegativoCero,
        input: 1,
        inputLabels: ["Número a verificar"],
    },
    exercise12Button: {
        title: "Funcion para determinar el signo zodiacal",
        func: determinarSignoZodiacal,
        input: 2,
        inputLabels: ["Mes de nacimiento (1-12)", "Día de nacimiento (1-31)"],
    },
    exercise13Button: {
        title: "Funcion para determinar el día de la semana",
        func: determinarDiaSemana,
        input: 1,
        inputLabels: ["Número del 1 al 7"],
    },
    exercise14Button: {
        title: "Funcion para concatenar dos frases",
        func: determinarDiaSemana,
        input: 2,
        inputLabels: ["Primera frase", "Segunda frase"],
    },
    exercise15Button: {
        title: "Funcion para calcular el precio con descuento",
        func: calcularPrecioConDescuento,
        input: 2,
        inputLabels: ["Precio del artículo", "Porcentaje de descuento"],
    },
    exercise16Button: {
        title: "Funcion para calcular la factura con impuestos",
        func: calcularFacturaConImpuestos,
        input: 2,
        inputLabels: ["Total de la factura", "Porcentaje de impuestos"],
    },
    exercise17Button: {
        title: "Funcion para calcular el sueldo con aumento",
        func: calcularSueldoConAumento,
        input: 2,
        inputLabels: ["Salario actual", "Aumento que recibirá"],
    },
    exercise18Button: {
        title: "Funcion para calcular la compra con descuento",
        func: calcularCompraConDescuento,
        input: 3,
        inputLabels: ["Precio del artículo", "Cantidad comprada", "Descuento"],
    },
    exercise19Button: {
        title: "Funcion para calcular el impuesto sobre el salario",
        func: calcularImpuestoSalario,
        input: 1,
        inputLabels: ["Salario anual"],
    },
    exercise20Button: {
        title: "Funcion para calcular otro tipo de impuesto sobre el salario",
        func: calcularImpuestoSalario2,
        input: 1,
        inputLabels: ["Salario anual"],
    },
    exercise21Button: {
        title: "Funcion para calcular un tercer tipo de impuesto sobre el salario",
        func: calcularImpuestoSalario3,
        input: 1,
        inputLabels: ["Salario anual"],
    },
    exercise22Button: {
        title: "Funcion para calcular el bono por antigüedad",
        func: calcularBonoAntiguedad,
        input: 2,
        inputLabels: ["Años de trabajando en la empresa", "Salario actual"],
    },
    exercise23Button: {
        title: "Funcion para calcular el costo de envío",
        func: calcularCostoEnvio,
        input: 1,
        inputLabels: ["Distancia de envío en kilómetros"],
    },
    exercise24Button: {
        title: "Funcion para calcular el descuento por lealtad",
        func: calcularDescuentoLealtad,
        input: 1,
        inputLabels: ["Total de compras durante un año"],
    },
    exercise25Button: {
        title: "Funcion para calcular el descuento por volumen de compra",
        func: calcularDescuentoVolumenCompra,
        input: 2,
        inputLabels: ["Unidades del producto", "Precio unitario del producto"],
    },
    exercise26Button: {
        title: "Funcion para calcular otro tipo de descuento por volumen de compra",
        func: calcularDescuentoVolumenCompra2,
        input: 2,
        inputLabels: ["Unidades del producto", "Precio unitario del producto"],
    },
    exercise27Button: {
        title: "Funcion para calcular un tercer tipo de descuento por volumen de compra",
        func: calcularDescuentoVolumenCompra3,
        input: 2,
        inputLabels: ["Unidades del producto", "Precio unitario del producto"],
    },
    exercise28Button: {
        title: "Funcion para calcular el costo del servicio",
        func: calcularCostoServicio,
        input: 1,
        inputLabels: ["Horas de servicio"],
    },
    exercise29Button: {
        title: "Funcion para sumar números pares hasta un número máximo",
        func: sumaNumerosPares,
        input: 1,
        inputLabels: ["Número maximo"],
    },
    exercise30Button: {
        title: "Funcion para imprimir la tabla de multiplicar de un numero",
        func: tablaMultiplicar2,
        input: 1,
        inputLabels: ["Número para la tabla de multiplicar"],
    },
    exercise31Button: {
        title: "Funcion para contar vocales en una palabra",
        func: contarVocales,
        input: 1,
        inputLabels: ["Ingrese una palabra"],
    },
    exercise32Button: {
        title: "Funcion para contar dígitos en una palabra",
        func: contarDigitos,
        input: 1,
        inputLabels: ["Ingrese una palabra"],
    },
    exercise33Button: {
        title: "Adivina el número entre 1 y 10.",
        func: adivinaNumero,
        input: 1,
        inputLabels: ["Ingresa tu adivinanza"],
    },
    exercise34Button: {
        title: "Funcion para contar letras del alfabeto en una palabra",
        func: contarLetrasAlfabeto,
        input: 1,
        inputLabels: ["Ingrese una palabra"],
    },
    exercise35Button: {
        title: "Funcion para sumar números impares hasta un número máximo",
        func: sumaNumerosImpares,
        input: 1,
        inputLabels: ["Número maximo"],
    },
    exercise36Button: {
        title: "Funcion para contar caracteres en una palabra",
        func: contarCaracteres,
        input: 1,
        inputLabels: ["Ingrese una palabra"],
    },
    exercise37Button: {
        title: "Funcion para sumar números positivos hasta encontrar uno negativo",
        func: sumaNumerosPositivos,
        input: 1,
        inputLabels: ["Ingrese un número (negativo para terminar)"],
    },
    exercise38Button: {
        title: "Funcion para realizar una cuenta regresiva desde un número",
        func: cuentaRegresiva,
        input: 1,
        inputLabels: ["Ingrese un número"],
    },
    exercise39Button: {
        title: "Función para sumar elementos de un Arreglo",
        func: sumaElementosArreglo,
        input: 2,
        inputLabels: [
            "Arreglo (separado por comas o guiones)",
            "Delimitador (, o -)"
        ],
    },
    exercise40Button: {
        title: "Función promediar calificaciones de un Arreglo",
        func: promedioCalificaciones,
        input: 2,
        inputLabels: [
            "Arreglo (separado por comas o guiones)",
            "Delimitador (, o -)"
        ],
    },
    exercise41Button: {
        title: "Función encontar un número mayor y menor de un Arreglo",
        func: encontrarMayorMenor,
        input: 2,
        inputLabels: [
            "Arreglo (separado por comas o guiones)",
            "Delimitador (, o -)"
        ],
    },
    exercise42Button: {
        title: "Función para buscar un elemento de un Arreglo",
        func: buscarElemento,
        input: 3,
        inputLabels: [
            "Arreglo (separado por comas o guiones)",
            "Delimitador (, o -)",
            "Número a buscar"
        ],
    },
    exercise43Button: {
        title: "Función para contar elementos pares en un arreglo",
        func: contarElementosPares,
        input: 2,
        inputLabels: [
            "Arreglo (separado por comas o guiones)",
            "Delimitador (, o -)"
        ],
    },
    exercise44Button: {
        title: "Función para invertir los elemntos de un Arreglo",
        func: invertirArreglo,
        input: 2,
        inputLabels: [
            "Arreglo (separado por comas o guiones)",
            "Delimitador (, o -)"
        ],
    },
    exercise45Button: {
        title: "Función para  de un Arreglo",
        func: buscarIndiceValor,
        input: 3,
        inputLabels: [
            "Arreglo (separado por comas o guiones)",
            "Delimitador (, o -)",
            "Número a buscar"
        ],
    },

    // Add more exercises as needed
};

// Function to show the result
function showResult(result) {
    resultContainer.value = result;
};

// Function to go back the main menu
function changePage(page) {
    location.href = page;
};

// Function to handle the calculation when the button is clicked
function handleCalculateButtonClick() {
    let selectedButtonName = getSelectedButtonName();

    if (inputValue1.value === "") {
        alert("Please enter a value before calculating.");
        console.error("Please enter a value before calculating.");
        return;
    }

    if (selectedButtonName) {
        let selectedExercise = exercises[selectedButtonName];
        let result = selectedExercise.func(inputValue1.value, inputValue2.value, inputValue3.value);
        showResult(result);
    }
};

// Call initializePage on window load
function initializePage() {
    let selectedButtonName = getSelectedButtonName();

    if (selectedButtonName) {
        let selectedExercise = exercises[selectedButtonName];
        titlePage.innerText = selectedExercise.title;

        // Update the number of input fields based on the selected function
        if (selectedExercise.input === 1) {
            // Show one input field
            document.getElementById('inputContainer2').style.display = 'none';
            document.getElementById('inputContainer3').style.display = 'none';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
        } else if (selectedExercise.input === 2) {
            // Show two input fields
            document.getElementById('inputContainer2').style.display = 'block';
            document.getElementById('inputContainer3').style.display = 'none';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
            inputValue2.placeholder = selectedExercise.inputLabels[1];
        } else if (selectedExercise.input === 3) {
            // Show three input fields
            document.getElementById('inputContainer2').style.display = 'block';
            document.getElementById('inputContainer3').style.display = 'block';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
            inputValue2.placeholder = selectedExercise.inputLabels[1];
            inputValue3.placeholder = selectedExercise.inputLabels[2];
        } else {
            // Handle other cases if needed
        }
    }
};

// Event listener for the calculate button
calculateButton.addEventListener('click', handleCalculateButtonClick);

// Event listener for the back button
backButton.addEventListener('click', function(){
    changePage(MAIN_PAGE)
});

// Call initializePage on window load
window.addEventListener('load', initializePage);
