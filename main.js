// Define a function that appends the value of the clicked button to the input field
function append(value) {
  // Get the input field
  let inputField = document.getElementById("input");
  // Append the clicked value to the input field
  inputField.value += value;
}

// Define a function that evaluates the input and displays the result in the input field
function calculate() {
  // Get the input field
  let inputField = document.getElementById("input");
  // Get the input value
  let input = inputField.value;
  // Evaluate the input using the eval() function
  let result = eval(input);
  // Display the result in the input field
  inputField.value = result;
}

// In the HTML file, each button has an onclick attribute that calls the append() function with the button's value as an argument
// The equal button calls the calculate() function to evaluate the input and display the result
// Here's an example of the HTML code for the "1" button:
// <button onclick="append('1')">1</button>
