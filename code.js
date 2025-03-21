let SubmitButton = document.getElementById('Submit-BgColor')

SubmitButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(){
    let backgroundcolor = document.getElementById('BgColor')
    document.body.style.backgroundColor = backgroundcolor.value;
}

function addElementButton(){
    let ElType = document.getElementById('ElementType').value
    let ElInnehold = document.getElemenetById('VelgInnehold').value

}

