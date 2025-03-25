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

let felt = document.getElementById("knappe-felt")
let erik_knapp = document.createElement("button");
erik_knapp.innerText = "Erik Knapp";
erik_knapp.style.color = "red";
felt.appendChild(erik_knapp);  

erik_knapp.addEventListener("click", function() {
    var flytt = document.getElementById("erik")
    var box = document.getElementById("customContainer")
    var box2 = document.getElementById("container")

    if (box.contains(flytt)) {
        box2.appendChild(flytt);
    } else {
        box.appendChild(flytt);
    }
});

