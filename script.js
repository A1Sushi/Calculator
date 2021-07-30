// Basic Math Functions 
// 1. Add
function add(x, y) {
    return x + y; 
}
// console.log(add(5, 5)); 

// 2. Subtract 
function subtract(x, y) {
    return x - y; 
}
// console.log(subtract(5, 5)); 

// 3. Multiply 
function multiply(x, y) {
    return x * y; 
}
// console.log(multiply(5, 5)); 

// 4. Divide 
function divide(x, y) {
    return x / y 
}
// console.log(divide(10, 5)); 

// Operate Function 
function operate (operator, x, y) {
    return operator(x, y); 
}
// console.log(operate(add, 2, 2)); 

/* Function to display # buttons clicked 
    - Store value clicked in variable *
    - if values match are between 0-9 *
        - Convert the value to a number *
        - display it on the screen *
    - Will create sepearte functions for those buttons late
*/

function display() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        // add 'click' for each single button 
        button.addEventListener('click', (e) => {
            // Call function here for when button is clicked
            // return the text value as a number 
            // let value = Number(e.target.textContent)
            let value = e.target.textContent
            isNum(value)
        })
    })
}
display()

function isNum(value) {
    if (value >= 0 && value <= 10) {
        const screen = document.querySelector('.cell1')
        // Add display value based on what was clicked 
        screen.textContent = value
        value = Number(value)
        console.log(value)
    // will be to call other functions 
    } else {
        // console.log("naw")
    }
}








