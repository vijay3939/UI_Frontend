
let todoele = document.getElementById("taskinfo")
let tasklist = document.getElementById("tasklist")

document.getElementById("add").onclick = function () {
    if (todoele.value.length == 0) {
        alert("Enter a task details")
    }
    else {
        tasklist.innerHTML = tasklist.innerHTML + `
        <div class = "task"> 
        <span id="work">${todoele.value}</span>
        <button class = "del"><i class="bi bi-trash3-fill"></i></button>
        </div>`

        let alltasks = document.querySelectorAll(".del")
        for (i = 0; i < alltasks.length; i++) {
            alltasks[i].onclick = function () {
                this.parentNode.remove()

            }
        }
        todoele.value = ""
    }
}