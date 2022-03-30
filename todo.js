
function newItem() {

    let input = document.getElementById("input").value;
    if (input != "") {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.appendChild(document.createTextNode(input))
        li.appendChild(span);

        let removeButton = document.createElement("button");
        removeButton.setAttribute('class', 'bi bi-trash-fill');
        removeButton.addEventListener("click", removeItem);
        li.appendChild(removeButton);
        
        let editButton = document.createElement("button");
        editButton.setAttribute('class', 'bi bi-pencil-fill');
        li.appendChild(editButton);
        editButton.addEventListener("click", editItem);

        let doneButton = document.createElement("button");
        doneButton.setAttribute('class', 'bi bi-check-lg');
        li.appendChild(doneButton);
        doneButton.addEventListener("click", doneItem);

        let ul = document.getElementById("list");
        ul.appendChild(li);
        document.getElementById("input").value = "";

        function removeItem() {
            li.classList.add("delete");
        }

        function editItem() {
            doneButton.classList.add("delete")         
            editButton.classList.add("delete");
            removeButton.classList.add("delete");
            let editInput = document.createElement("form");
            let editInput1 = document.createElement("input");
            let editInput2 = document.createElement("button");
            editInput2.type = "button";
            editInput2.setAttribute('class', 'bi bi-journal-check');
            editInput1.placeholder = span.textContent;
            span.textContent = "";
            editInput2.onclick = function editing(){
                span.textContent = editInput1.value;
                doneButton.classList.remove("delete");
                editButton.classList.remove("delete");
                removeButton.classList.remove("delete");
            };
            editInput.appendChild(editInput1);
            editInput.appendChild(editInput2);
            span.appendChild(editInput);
           
        }
        function doneItem(){
            if(li.classList.value != "done"){
                li.classList.add("done");
            }else li.classList.remove("done");
        }
    }

    

    
}

