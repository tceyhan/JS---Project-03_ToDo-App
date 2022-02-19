let todoh2 = document.querySelector('h2');
let totalDiv = document.querySelector(".task-div");
let taskInput = document.getElementById('task-input');
let addTaskButton = document.getElementsByClassName('add-btn')[0];
let taskLi = document.querySelector('.task');
let taskList = document.querySelector('.task-list');
let taskName = document.querySelector('.task-name');
let clearButton = document.querySelector('.delete-btn');
let clearIcon = document.querySelector('.delete-icon');
let editTaskButton = document.querySelector('.edit-btn');
let editIcon = document.querySelector('.edit-icon');

// tasklerin herbirine ayrı renk verilmesi için random fonksiyonu kullandım.
function randomColor () {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
}

//task ekleme yapmadan önceki input içerisini düzenleyen kodlar.
taskInput.placeholder = "Add a task";
taskInput.style.textAlign = "center";
taskLi.style.fontSize = "20px";
taskLi.style.textAlign = "center";
taskLi.style.color = "red";

// total task sayısını gösterir kodlar.
let totalTaskSpan = document.createElement("span");
totalDiv.appendChild(totalTaskSpan);
totalTaskSpan.style.fontSize = "20px";
totalTaskSpan.style.textAlign = "center";
totalTaskSpan.style.color = "red";
totalTaskSpan.style.fontWeight = "bold";
totalTaskSpan.style.letterSpacing = "2px";
totalTaskSpan.style.border = "1px solid black";
totalTaskSpan.style.backgroundColor = "black";
totalTaskSpan.style.borderRadius = "50%";


todoh2.animate([
    {opacity: 0},
    {opacity: 1}
], {
    duration: 2000,
    iterations: Infinity
});



// task ekleme butonuna basıldığında

addTaskButton.addEventListener("click", addTask);
   
function addTask() {
        let yeni= taskInput.value; 
        if (yeni == "") {
            alert("Please enter a task");
            taskInput.focus();
            return;
        }
        let yeniTask = document.createElement("li");
        yeniTask.className = "task";
        yeniTask.innerHTML = `<span class="task-name">${yeni}</span>`;
        yeniTask.innerHTML += `<button class="delete-btn"><img src="cop_icon.png" class="delete-icon"></button>`;
        yeniTask.innerHTML += `<button class="edit-btn"><img src="edit_icon.png" class="edit-icon"></button>`;
        taskList.appendChild(yeniTask);
        
        yeniTask.style.color=randomColor();
        yeniTask.style.fontSize = "20px";
        yeniTask.style.textAlign = "center";
        yeniTask.style.fontWeight = "bold";
        yeniTask.style.letterSpacing = "2px";


        // yeniTask.style.textShadow = "0 0 5px black"; // başka projede kullan.
        taskInput.value = "";
        taskInput.focus();
        taskInput.placeholder = "Add a task";
        taskInput.style.textAlign = "center";

        let totalTask = document.querySelectorAll('.task').length;
        totalTaskSpan.innerText = `You have ${totalTask} tasks`; // total task sayısını gösterir.

        //total task anime etme kodları.
        totalTaskSpan.animate([
            {transform: 'translateX(0px)'},
            {transform: 'translateX(100px)'},
            {transform: 'translateX(0px)'}
        ], {
            duration: 1000,
            iterations: 2
        });
    
    }


// task silme butonuna basıldığında

taskList.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(typeof e.target.parentElement);
    if (e.target.className == "delete-btn")  {
        e.target.parentElement.remove();
     }
     else if(e.target.className == "delete-icon") {
        e.target.parentElement.parentElement.remove();
     }

     let totalTask = document.querySelectorAll('.task').length;
        totalTaskSpan.innerText = `You have ${totalTask} tasks`;
    
        //total task anime etme kodları.
            totalTaskSpan.animate([
                {transform: 'translateX(0px)'},
                {transform: 'translateX(100px)'},
                {transform: 'translateX(0px)'}
            ], {
                duration: 1000,
                iterations: 2
            });

    e.preventDefault();
});

// task düzenleme butonuna basıldığında


taskList.addEventListener("click", (e) => {
        
        if (e.target.className == "edit-btn") {
        let taskName = e.target.parentElement.querySelectorAll('span')[0];
        let taskValue = taskName.innerText;
        taskName.innerText = "";
        let editInput = document.createElement("input");
        editInput.className = "edit-input";
        editInput.type = "text";
        editInput.value = taskValue;
        taskName.appendChild(editInput);
        editInput.focus();
        alert("Edit sonrası 'ENTER' tuşuna basınız");
        editInput.addEventListener("keypress", (e) => {
            if (e.keyCode == 13) {
                taskName.innerText = editInput.value;
                editInput.remove();
                taskName.focus();
            }
        
        });
    }else if(e.target.className == "edit-icon") {
        let taskName = e.target.parentElement.parentElement.querySelectorAll('span')[0];
        let taskValue = taskName.innerText;
        taskName.innerText = "";
        let editInput = document.createElement("input");
        editInput.className = "edit-input";
        editInput.type = "text";
        editInput.value = taskValue;
        taskName.appendChild(editInput);
        editInput.focus();
        alert("Edit sonrası 'ENTER' tuşuna basınız");
        editInput.addEventListener("keypress", (e) => {
            if (e.keyCode == 13) {
                taskName.innerText = editInput.value;
                editInput.remove();
                taskName.focus();
            }
        });
    }
e.preventDefault();
});

