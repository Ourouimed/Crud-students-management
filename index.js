let form = document.querySelector(".students-form"),
    FirstN = document.querySelector("#std-first-name"),
    LastN = document.querySelector("#std-last-name"),
    Bdate = document.querySelector("#bd"),
    Branche = document.querySelector("#select-branche"),
    tbody = document.querySelector("tbody"),
    AddStud = document.querySelector("#add-student")

class Students {
    constructor(fn , ln , bd , br){
        this.fn = fn
        this.ln = ln 
        this.bd = bd
        this.br = br
    }
    CreateStudent(){
        let tRow = document.createElement("tr")
        // Create table row
        tRow.innerHTML = `
        <td id="first-name">${this.fn}</td>
        <td id="last-name">${this.ln}</td>
        <td id="birth-date">${this.bd}</td>
        <td id="branche">${this.br}</td>
        <td class="action-btns">
            <button id="remove-stud"><ion-icon name="trash-outline"></ion-icon></button>
            <button id="update-stud"><ion-icon name="create-outline"></ion-icon></button>
        </td>
        `
        tbody.append(tRow)
        AddStud.innerHTML = "Add Student"
    }
    RemoveStudent(item){
        item.remove()
    }
    UpdateStudent(item){
        item.remove()
        FirstN.value = item.querySelector("#first-name").innerHTML
        LastN.value = item.querySelector("#last-name").innerHTML
        Bdate.value = item.querySelector("#birth-date").innerHTML
        Branche.value = item.querySelector("#branche").innerHTML
        AddStud.innerHTML = "Update Student"
    }
}


// Submit form and create Students 
form.addEventListener("submit" , e =>{
    e.preventDefault()
    let std = new Students(FirstN.value , LastN.value , Bdate.value , Branche.value)
    std.CreateStudent()
    FirstN.value = LastN.value = Bdate.value = ""
})


// Remove and Update Student
tbody.addEventListener("click" , (e)=>{
    let parent = e.target.parentElement.parentElement
    let std = new Students(FirstN.value , LastN.value , Bdate.value , Branche.value)
    if(e.target.id == "remove-stud" ) std.RemoveStudent(parent)
    else if (e.target.id == "update-stud") std.UpdateStudent(parent)
})

