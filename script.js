// script.js

// Function to display a pop-up when the button is clicked
function sayHello() {
    alert("Hello, world!");
}

// Add an event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("helloButton");
    button.addEventListener("click", sayHello);
});
