// JavaScript code for demonstrating arrays

function runCode() {
  const code = `// Declare and initialize an array
let myArray = [1, 'two', true];

// Log the array and its length
console.log('Array:', myArray);
console.log('Array Length:', myArray.length);
  `;

  try {
    eval(code);
  } catch (error) {
    console.error(error);
  }
}
