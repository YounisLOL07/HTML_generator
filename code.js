document.getElementById("bgColorSubmit").addEventListener("click", function() {
    let color = document.getElementById("bgColor").value
    document.body.style.backgroundColor = color;
});

function addElement() {
    let elementType = document.getElementById("elementType").value;
    let content = document.getElementById("elementContent").value;
    let color = document.getElementById("elementColor").value;
    let parent = document.getElementById(document.getElementById("parentElement").value);

    let newElement = document.createElement(elementType);
    newElement.textContent = content;
    newElement.style.color = color;


    parent.appendChild(newElement);
}
