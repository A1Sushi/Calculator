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

/* Step 6: Chaining operations together @@@
-> Chaining another operator should store answer of two numbers as 1st number for new calculation 
1. When operator is pressed:
    - Check if displayOne == undefined, if yes; 
        -> Save number to it 
    - if not; 
        -> save number to displayTwo
        -> Perform operation with two values 
        -> save answer to displayOne 
*/

// Clear Function
function clearScreen() {
    screen.textContent = ""
    buttonsClicked = ""
}

function clearValues() {
    displayOne = 0
    displayTwo = 0
}

// Attach clear button to function
const clear = document.querySelector('.cell2');
clear.addEventListener('click', () => {
    clearScreen();
    clearValues()
})

// "=" Key
let displayTwo
function equal() {
    displayTwo = Number(screen.textContent)
    console.log(displayTwo)
    // clearScreen();
    // answer = operate(operator, displayOne, displayTwo)
    // screen.textContent = answer
    result()
}

// Operation for getting answer @@
function result() {
    // Recently changed from answer 
    displayOne = operate(operator, displayOne, displayTwo)
    // console.log(displayOne)
    screen.textContent = displayOne
}

// Attaching = to = button 
const equalButton = document.querySelector('.cell20');
equalButton.addEventListener('click', () => {
    // Fix issue with = button (part 3 step 6)
    if (displayOne == undefined || displayTwo == undefined) {
        return 
    } else {
     equal()
    }
})

// for storing operator selected
let operator 
// EL for Divison 
const divison = document.querySelector('.cell5');
divison.addEventListener('click', () => {
    // Get the current values on screen and store in a variable
    resultCondition()
    console.log(displayOne)
    // Save divide operator
    operator = divide;
    // if...else statement to clear screen or add result
    clearScreen();
    screen.textContent = displayOne
})

// EL for muliplication 
const multiplication = document.querySelector('.cell9');
multiplication.addEventListener('click', () => {
    // Get the current values on screen and store in a variable
    resultCondition()
    console.log(displayOne)
    operator = multiply;
    clearScreen();
    screen.textContent = displayOne
})

// EL for subtraction @
const subtraction = document.querySelector('.cell13');
subtraction.addEventListener('click', () => {
    // Get the current values on screen and store in a variable
    resultCondition()
    console.log(displayOne)
    operator = subtract;
    clearScreen();
    screen.textContent = displayOne
})

// EL for addition
const addition = document.querySelector('.cell17');
addition.addEventListener('click', () => {
    // Get the current values on screen and store in a variable
    resultCondition()
    console.log(displayOne)
    // Save operator
    operator = add;
    clearScreen();
    screen.textContent = displayOne
})

function resultCondition() {
    if (displayOne == undefined) {
        displayOne = Number(screen.textContent)
    } else {
        displayTwo = Number(screen.textContent)
        result()
    }
}

// Question
    // Hey everyone, I'm currently working on step 6 part 1 of project calculator where I have to chain the operations together. So far my code works as long as you press the equals button after selecting 2 numbers, but I'm trying to figure out how to get the answer to display: If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation. I have a feeling this step is very similar to the fibonacci exercise from fundamentals part 5, but I'm trying to figure out how I can apply that to this scenario. 
