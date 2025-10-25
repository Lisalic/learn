const inputBox = document.getElementById("userInput");
const button = document.getElementById("submitBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => 
{
  const text = inputBox.value; // get what the user typed
  output.textContent = text + " noob";   // display it in the <p> tag
});