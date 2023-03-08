
const form = document.getElementById("form")
const uname = document.getElementById("uname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const tandc = document.getElementById("tc")


var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidCPassword = false;
var isTCChecked = false




form.addEventListener('submit', (e) => {

    e.preventDefault()
    Validate()
})


function Validate() {
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
    // let tandcValue = tandc.value

    isValidName = false;
    isValidEmail = false;
    isValidPassword = false;
    isValidCPassword = false;
    isTCChecked = false

    // user name cheack 

    if (nameValue === '') {
        setError(uname, 'user name cannot be empty')
    }
    else if (nameValue.length < 3) {
        setError(uname, 'user name should be minumum 3 charater')
    } else {
        setSuccess(uname)
        isValidName = true;

    }

    // email cheak 

    if (emailValue === '') {
        setError(email, 'Email cannot be empty')
    }
    else if (!emailCheck(emailValue)) {
        setError(email, 'Enter Valid Email Id')
    }
    else {
        setSuccess(email)
        isValidEmail = true;
    }


    // password check 

    if (passwordValue === '') {
        setError(password, 'password cannot be empty')
    }
    else if (passwordValue.length < 8) {
        setError(password, 'user name should be minimum 8 character')
    } else {
        setSuccess(password)
        isValidPassword = true;
    }

    // confirm password 

    if (cpasswordValue === '') {
        setError(cpassword, 'password cannot be empty')
    }
    else if (cpasswordValue !== passwordValue) {
        setError(cpassword, 'password not matched')
    } else {
        setSuccess(cpassword)
        isValidCPassword = true;
    }

    // Terms and conditions check 

    if (!tandc.checked) {
        setError(tc, 'click on agree terms checkbox')
    } else {
        setSuccess(tc)
        isTCChecked = true;
    }

    if (isValidName && isValidEmail && isValidPassword && isValidCPassword && isTCChecked) {
        
        form.submit()
    }



    function setError(input, massage) {
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = massage
        parent.classList.add('error')
        parent.classList.remove('success')
    }

    function setSuccess(input) {
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }


    function emailCheck(input) {
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let Valid = emailReg.test(input)

        return Valid
    }
}