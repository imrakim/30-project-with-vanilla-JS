const inputBox = document.getElementById("input");
const listItem = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("!You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listItem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}
listItem.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
        saveData()
    }
     else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData()
    }
  },
  false
);
function saveData(){
    localStorage.setItem("data", listItem.innerHTML);
};
function showTask(){
    listItem.innerHTML = localStorage.getItem("data");
};
showTask()