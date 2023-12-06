// DOM elements
const titlePage = document.getElementById('titlePage');
const inputValue1 = document.getElementById('inputValue1');
const inputValue2 = document.getElementById('inputValue2');
const inputValue3 = document.getElementById('inputValue3');
const resultContainer = document.getElementById('resultContainer');
const calculateButton = document.getElementById('calculateButton');
const backButton = document.getElementById('backButton')

// Pages
const MAIN_PAGE = '../MainMenuPage/function_exercises.html'

// Dictionary of main functions and titles
const exercises = {
    exercise1Button: {
        title: "Funcion para saludar",
        func: saludar,
        input: 0,
        inputLabels: [],
    },
    exercise2Button: {
        title: "Funcion para sumar dos número",
        func: sumarDosNumeros,
        input: 2,
        inputLabels: ["Número 1", "Número 2"],
    },
    exercise3Button: {
        title: "Funcion para multiplicar dos número",
        func: multiplicarDosNumeros,
        input: 2,
        inputLabels: ["Número 1", "Número 2"],
    },
    exercise4Button: {
        title: "Funcion para verificar si un número es par o impar",
        func: verificarParImpar,
        input: 1,
        inputLabels: ["Número"],
    },
    exercise5Button: {
        title: "Funcion para calcular el área de un rectángulo",
        func: calcularAreaRectangulo,
        input: 2,
        inputLabels: ["Base", "Altura"],
    },
    exercise6Button: {
        title: "Funcion para imprimir un nombre",
        func: imprimirNombre,
        input: 1,
        inputLabels: ["Nombre"],
    },
    exercise7Button: {
        title: "Funcion para convertir Celsius a Fahrenheit",
        func: celsiusToFahrenheit,
        input: 1,
        inputLabels: ["Temperatura en Celsius"],
    },
    exercise8Button: {
        title: "Funcion para contar un caracter en una frase",
        func: contarCaracterEnFrase,
        input: 2,
        inputLabels: ["Frase", "Caracter a buscar"],
    },
    exercise9Button: {
        title: "Funcion para imprimir los números del uno al diez",
        func: imprimirNumerosDelUnoAlDiez,
        input: 0,
        inputLabels: [],
    },
    exercise10Button: {
        title: "Funcion para sumar una lista de números",
        func: sumarListaNumeros,
        input: 1,
        inputLabels: ["Lista (separado por comas)"],
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
    let selectedExercise = exercises[selectedButtonName];

    // Check if the first input is empty and the exercise expects at least one input
    if (inputValue1.value === "" && selectedExercise.input !== 0) {
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
            document.getElementById('inputContainer1').style.display = 'none';
            document.getElementById('inputContainer2').style.display = 'none';
            document.getElementById('inputContainer3').style.display = 'none';
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
