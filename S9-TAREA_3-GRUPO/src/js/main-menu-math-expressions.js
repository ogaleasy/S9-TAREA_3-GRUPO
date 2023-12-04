// DOM elements - Buttons of 'math_expressions.html'
const exercise1Button = document.getElementById('exercise1Button');
const exercise2Button = document.getElementById('exercise2Button');
const exercise3Button = document.getElementById('exercise3Button');
const exercise4Button = document.getElementById('exercise4Button');
const exercise5Button = document.getElementById('exercise5Button');

// Back button
const backButton = document.getElementById('backButton')

// Pages
const MAIN_MATH_EXPRESSIONS_APP = '../../pages/MathExpressionsApp/main_math_expressions_app.html'
const MAIN_PAGE = '../../index.html'

function changePage(page) {
    location.href = page;
};

// Agrega mas 'addEventListener' aqui para cada boton
exercise1Button.addEventListener('click', function() {
    storeSelectedButtonName(this.id);
    changePage(MAIN_MATH_EXPRESSIONS_APP);
});

exercise2Button.addEventListener('click', function() {
    storeSelectedButtonName(this.id);
    changePage(MAIN_MATH_EXPRESSIONS_APP);
});

exercise3Button.addEventListener('click', function() {
    storeSelectedButtonName(this.id);
    changePage(MAIN_MATH_EXPRESSIONS_APP);
});

exercise4Button.addEventListener('click', function() {
    storeSelectedButtonName(this.id);
    changePage(MAIN_MATH_EXPRESSIONS_APP);
});

exercise5Button.addEventListener('click', function() {
    storeSelectedButtonName(this.id);
    changePage(MAIN_MATH_EXPRESSIONS_APP);
});


// Event listener for the back button
backButton.addEventListener('click', function(){
    changePage(MAIN_PAGE)
});
