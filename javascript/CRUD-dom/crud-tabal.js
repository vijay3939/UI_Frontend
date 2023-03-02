

var raju;

var info = JSON.parse(localStorage.getItem("info"))
if (info == null) {
    info = []
}

// createValue

function createValue() {
    var Details = {
        Name: "",
        Age: "",
        Mobile: "",
        Address: ""
    }
    for (a in Details) {
        Details[a] = document.getElementById(a).value
    }

    console.log(Details)

    ReadValue()
    info.push(Details)
    CleareForm(Details)
    localStorage.setItem("info", JSON.stringify(info))
}

// ReadValue

function ReadValue() {
    document.querySelector("tbody").innerHTML = ""
    info.forEach((Details, i) => {

        var mytr = document.createElement("tr")
        document.querySelector("tbody").appendChild(mytr)

        for (a in Details) {
            var mytd = document.createElement("td")
            mytd.innerHTML = Details[a]
            mytr.appendChild(mytd)

        }

        var Edittd = document.createElement("td")
        var Editbtn = document.createElement("button")
        mytr.appendChild(Edittd)
        Edittd.appendChild(Editbtn)
        Editbtn.innerHTML = "Edit"
        Editbtn.style.backgroundColor="green"
        Editbtn.setAttribute("onclick", "EditValue(" + i + ")")

        var Delecttd = document.createElement("td")
        var Delectbtn = document.createElement("button")
        mytr.appendChild(Delecttd)
        Delecttd.appendChild(Delectbtn)
        Delectbtn.innerHTML = "Delete"
        Delectbtn.setAttribute("onclick", "DeleteValue(" + i + ")")


    });
}
ReadValue()

// Cleare
function CleareForm(Details) {
    for (a in Details) {
        document.getElementById(a).value = ""
    }
}

// EditValue
function EditValue(i) {
    document.getElementById("Submit").style.display = "none"
    document.getElementById("Update").style.display = "block"


    raju = i
    var Surya = info[i]
    for (a in Surya) {
        document.getElementById(a).value = Surya[a]
    }
}

// delectValeue

function DeleteValue(i) {

    info.splice(i, 1)
    localStorage.setItem("info", JSON.stringify(info))
    ReadValue()

}

// updateValue

function UpdateValue() {
    var Details = {
        Name: "",
        Age: "",
        Mobile: "",
        Address: ""
    }
    for (a in Details) {
        Details[a] = document.getElementById(a).value
    }
    info[raju] = Details
    localStorage.setItem("info", JSON.stringify(info))
    CleareForm(Details)
    ReadValue()
    document.getElementById("Submit").style.display = "block"
    document.getElementById("Update").style.display = "none"

}



