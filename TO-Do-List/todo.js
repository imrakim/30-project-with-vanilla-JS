const inputBox = document.getElementById("input");
const listItem = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("!You Must Write Something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listItem.appendChild(li);
    }
}