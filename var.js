// JavaScript code for demonstrating variables

function runCode() {
  const code = `// Declare and initialize variables
let num = 10;
const str = 'Hello';
var flag = true;

// Log the variables
console.log('Number:', num);
console.log('String:', str);
console.log('Boolean:', flag);
  `;

  try {
    eval(code);
  } catch (error) {
    console.error(error);
  }
}
