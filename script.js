// Basic Math Functions // 

// Add
function add(x, y) {
    return x + y; 
}
// console.log(add(1, 2))

// Subtract 
function subtract(x, y) {
    return x - y; 
}

// Multiply 
function multiply(x, y) {
    return x * y; 
}

// Divide 
function divide(x, y) {
    return x / y 
}
// console.log(divide(1, 2))

// Function 
function operate(operator, x, y) {
    return operator(x, y); 
}
// console.log(operate(add, 1, 2))

/* Step 4: Function to display # buttons clicked 
    1. Create event listener to return buttons clicked *
        - Using e.target to return DOM node clicked *
        - Store the DOM node in a variable to access later * 
    2. Populating the display when buttons Clicked *
        - Get anything to display using text.content * 
    3. Create a function specifically for uploading to screen * 
    4. Store display value by assigning x.textContent to variable *
*/

// Select on buttons that have class id of num 
const numButtons = document.querySelectorAll('.num');
const screen = document.querySelector('.cell1');
let buttonsClicked = ""
let displayOne 
numButtons.forEach((button) => {
// add 'click' for each number button 
button.addEventListener('click', (e) => {
    // stores and adds each text value of button clicked 
    buttonsClicked += e.target.textContent
    console.log(buttonsClicked)
    display(buttonsClicked)
    // Store 1st number value on screen, might have to use in step 5 
    // displayOne = Number(screen.textContent);
    // console.log(displayOne)
    })
})

// Function is used to display a stored variable on the screen 
function display(value) {
    // Add values to screen 
    screen.textContent = value;
    // console.log(screen.textContent)
}

/* Step 5: Make calculator work!
    1. If user clicks any operator (Ex. divison) button: *
        - Store 1st value on the screen (x) * 
        - Save operator that is chosen in a variable *
        - screen should be cleared (create a clear function) *
    ?. When "=" key is pressed
        - Store 2nd value that is input (y) *
        - Clear Screen *
        - complete operation with saved values *
        - Display answer on screen *
*/

// Clear Function
function clearScreen() {
    screen.textContent = ""
    buttonsClicked = ""
}

// "=" Key
let displayTwo
let answer
function equal() {
    displayTwo = Number(screen.textContent)
    console.log(displayTwo)
    clearScreen();
    answer = operate(operator, displayOne, displayTwo)
    screen.textContent = answer
}

const equalButton = document.querySelector('.cell20');
equalButton.addEventListener('click', () => {
    equal()
})

// for storing operator selected
let operator 
// EL for Divison 
const divison = document.querySelector('.cell5');
divison.addEventListener('click', () => {
    // Get the current values on screen and store in a variable
    displayOne = Number(screen.textContent)
    console.log(displayOne)
    // Save divide operator
    operator = divide;
    clearScreen();
})

// EL for muliplication 
const multiplication = document.querySelector('.cell9');
multiplication.addEventListener('click', () => {
    // Get the current values on screen and store in a variable
    displayOne = Number(screen.textContent)
    console.log(displayOne)
    operator = multiply;
    clearScreen();
})

// EL for subtraction @
const subtraction = document.querySelector('.cell13');
subtraction.addEventListener('click', () => {
    // Get the current values on screen and store in a variable
    displayOne = Number(screen.textContent)
    console.log(displayOne)
    operator = subtract;
    clearScreen();
})

// EL for addition
const addition = document.querySelector('.cell17');
addition.addEventListener('click', () => {
    // Get the current values on screen and store in a variable
    displayOne = Number(screen.textContent)
    console.log(displayOne)
    operator = add;
    clearScreen();
})