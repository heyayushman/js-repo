document.getElementById("myButton").addEventListener("click", function() {
    var newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added to the DOM.";
    document.body.appendChild(newElement);
});