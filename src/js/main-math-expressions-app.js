// DOM elements
const titlePage = document.getElementById('titlePage');
const inputValue1 = document.getElementById('inputValue1');
const inputValue2 = document.getElementById('inputValue2');
const resultContainer = document.getElementById('resultContainer');
const calculateButton = document.getElementById('calculateButton');
const backButton = document.getElementById('backButton')

// Pages
const MAIN_PAGE = '../MainMenuPage/math_expressions.html'

// Dictionary of main functions and titles
const exercises = {
    exercise1Button: {
        title: "2 * value1 + value2 - (value1 % 3)",
        func: exercise1,
    },
    exercise2Button: {
        title: "(value1 * value2 + 3) % (value1 + value2)",
        func: exercise2,
    },
    exercise3Button: {
        title: "a - b + 2 * (a % b)",
        func: exercise3,
    },
    exercise4Button: {
        title: "2 * value2 + Math.floor(value1 / 2) + 4 * (value2 % value1)",
        func: exercise4,
    },
    exercise5Button: {
        title: "b - a + 3 * (a % b)",
        func: exercise5,
    },

    exercise6Button: {
        title: "b - a + 3 * (a % b)",
        func: exercise6,
    },

    exercise7Button: {
        title: "calcularExpresion7",
        func: exercise7,
    },

    exercise8Button: {
        title: "calcularExpresion8",
        func: exercise8,
    },

    exercise9Button: {
        title: "calcularExpresion9",
        func: exercise9,
    },

    exercise10Button: {
        title: "calcularExpresion10",
        func: exercise10,
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
        let result = selectedExercise.func(inputValue1.value, inputValue2.value);
        showResult(result);
    }
};

// Call initializePage on window load
function initializePage() {
    let selectedButtonName = getSelectedButtonName();

    if (selectedButtonName) {
        let selectedExercise = exercises[selectedButtonName];
        titlePage.innerText = selectedExercise.title;
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