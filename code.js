let backgroundcolor = document.getElementById('BgColor')

let SubmitButton = document.getElementById('Submit-BgColor')
SubmitButton.addEventListener("click", changeBackgroundColor);
SubmitButton.addEventListener("mouseleave", leave);
SubmitButton.addEventListener("mouseenter", enter);



function changeBackgroundColor(){
    document.body.style.backgroundColor = backgroundcolor.value;
}

