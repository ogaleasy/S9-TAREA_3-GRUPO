// DOM elements - Buttons of 'sequential_algorithms'
const backButton = document.getElementById('backButton')

// Pages
const MAIN_SEQUENTIAL_EXPRESSIONS_APP = '../../pages/SequentialAlgoritmsApp/main_sequential_algoritms_app.html'
const MAIN_PAGE = '../../index.html'

// Map each button element to its respective ID
//const buttonIds = Array.from({ length: 40 }, (_, index) => `exercise${index + 1}Button`);
const buttonIds = [
    'exercise1Button', 'exercise2Button', 'exercise3Button', 'exercise4Button', 'exercise5Button',
    'exercise6Button', 'exercise7Button', 'exercise8Button', 'exercise9Button', 'exercise10Button',
    'exercise11Button', 'exercise12Button', 'exercise13Button', 'exercise14Button', 'exercise15Button',
    'exercise16Button', 'exercise17Button', 'exercise18Button', 'exercise19Button', 'exercise20Button',
    'exercise21Button', 'exercise22Button', 'exercise23Button', 'exercise24Button', 'exercise25Button',
    'exercise26Button', 'exercise27Button', 'exercise28Button', 'exercise29Button', 'exercise30Button',
    'exercise31Button', 'exercise32Button', 'exercise33Button', 'exercise34Button', 'exercise35Button',
    'exercise36Button', 'exercise37Button', 'exercise38Button', 'exercise39Button', 'exercise40Button',
    'exercise41Button', 'exercise42Button', 'exercise43Button', 'exercise44Button', 'exercise45Button'
];

function changePage(page) {
    location.href = page;
};

// Function to handle button clicks
function handleButtonClick(buttonId) {
    storeSelectedButtonName(buttonId);
    changePage(MAIN_SEQUENTIAL_EXPRESSIONS_APP);
}

// Attach click event listeners to each button
buttonIds.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', function() {
            handleButtonClick(this.id);
        });
    }
});

// Event listener for the back button
backButton.addEventListener('click', function(){
    changePage(MAIN_PAGE)
});
