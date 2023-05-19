
let container = document.querySelector(".container");
let qrInput = document.querySelector("#text");
let genearateBtn = document.querySelector("#generate");
let img = document.querySelector("#qr-img")


let preInput

genearateBtn.onclick = function () {
    let input = qrInput.value.trim()

    if (!input || input === preInput) {

        alert("this field should be empty and different with previouse input")
        return
    }

    else {
        preInput = input;
        genearateBtn.innerHTML = "Generating QR Code....";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
        img.onload = function () {
            container.classList.add("active")
            genearateBtn.innerHTML = "Generating QR Code";

        }
    }
}