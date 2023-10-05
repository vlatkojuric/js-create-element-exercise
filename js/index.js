console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

//we use event listener on addButton to "hear" whenever the button is clicked
addButton.addEventListener("click", () => {
  //we have to store the new created element into a variable so we can grab it later down below
  const toastMessage = document.createElement("li");
  //this is used to add a class element from the css file to add to our new created element
  toastMessage.classList.add("toast-container__message");
  //this variable(with our stored new created li item in Javascript) shows the new message we want our new created element to show
  toastMessage.textContent = "new message";
  // this "append" makes sure our new created element show in the html file on the webpage,we have to use the element where our element is stored not the new element itself
  toastContainer.append(toastMessage);
  // Exercise: Append a new entry to the toast messages container
});
//this function is used in this file to clear all the messages that we created by clicking the "addButton"
clearButton.addEventListener("click", () => {
  toastContainer.innerText = "";
  // Exercise: Clear the stack of toast messages
});
