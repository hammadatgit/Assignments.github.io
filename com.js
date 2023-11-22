function runCode(textAreaId) {
  const code = document.getElementById(textAreaId).value;

  try {
    eval(code);
  } catch (error) {
    console.error(error);
  }
}
