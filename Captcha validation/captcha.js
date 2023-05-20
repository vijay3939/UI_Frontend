
let captchaText = document.getElementById("captchaText")
let captchEnter = document.getElementById("captchEnter")
let refreshbtn = document.getElementById("refreshbtn")
let checkbtn = document.getElementById("checkbtn")

let chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let Captcha

function generateCaptch() {
    Captcha = "";

    for (i = 0; i < 7; i++) {
        let index = Math.floor(Math.random() * chars.length);
        Captcha = Captcha + chars[index]
    }
    captchaText.value = Captcha
}

function validateCaptcha() {

    if (Captcha == captchEnter.value) {
        alert("Valid captch !!! success")
    }
    else {
        alert("Invalid captcha");
        captchEnter.value = ""
    }
}

generateCaptch()


refreshbtn.onclick = generateCaptch;
checkbtn.onclick = validateCaptcha;
