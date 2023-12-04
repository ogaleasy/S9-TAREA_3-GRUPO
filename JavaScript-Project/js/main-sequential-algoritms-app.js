// DOM elements
const titlePage = document.getElementById('titlePage');
const inputValue1 = document.getElementById('inputValue1');
const inputValue2 = document.getElementById('inputValue2');
const resultContainer = document.getElementById('resultContainer');
const calculateButton = document.getElementById('calculateButton');

// Back button
const backButton = document.getElementById('backButton')

// Pages
const MAIN_PAGE = '../../index.html'

// Dictionary of main functions
const mainFunctions = {
    exercise1Button: exercise1,

    // Agregua más funciones según sea necesario
    // Add more main functions as needed
};

// Dictionary of main tittles
const mainTittles = {
    exercise1Button: "Nombre del ejercicio 1",
    
    // Agregua más titulos según sea necesario
    // Add more buttons as needed
};

// Function to show the result
function showResult(result) {
    resultContainer.value = result;
};

// Function to go back the main menu
function changePage(page) {
    location.href = page;
};

// Event listener for the calculate button
calculateButton.addEventListener('click', function() {
    let selectedButtonName = getSelectedButtonName();

    if (selectedButtonName) {
    let selectedFunction = mainFunctions[selectedButtonName];
    let result = selectedFunction(inputValue1.value, inputValue2.value);
    showResult(result);
    } else {
        console.error("Please select an exercise before calculating.");
    }
});

// Event listener for the back button
backButton.addEventListener('click', function(){
    changePage(MAIN_PAGE)
});

//
function windownsLoad() {
    let selectedButtonName = getSelectedButtonName();

    if (selectedButtonName) {
        let selectedTittle = mainTittles[selectedButtonName];
        titlePage.innerText = selectedTittle;
    }
};
