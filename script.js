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

// Step 4) Function to display # buttons clicked 
    // if text is a num convert it to one *
        // else, return just the text value
        // Will create sepearte functions for those buttons later
    // should change text.content or add to it 
        // 


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    // add 'click' for each single button 
    button.addEventListener('click', (e) => {
        // Call function here for when button is clicked
        // return the text value as a number 
        let displayValue = Number(e.target.textContent)
        const screen = document.querySelector('.cell1')
        screen.textContent = displayValue
        console.log(displayValue)
    })
})

/* Plan 
1. Should change text.content on cell1 / screen, 
    
*/






