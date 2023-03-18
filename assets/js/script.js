//Definir variables//
const newTask = document.querySelector("#nuevaTarea");
const btnaddTask = document.querySelector("#agregarTarea");
const textTotal = document.querySelector("#tTotales");
const textDone = document.querySelector("#tRealizadas");
const todoTable = document.querySelector("#tasks");


const toDoList = [
    {
        tarea: "Lavar la loza",
        estado: false
    },
    {
        tarea: "Hacer tareas",
        estado: false
    },
    {
        tarea: "Preparar la cena",
        estado: false
    }
];

//Definición funciones//

function printLista(){
    newTask.value = "";
    let html = ""
    if (toDoList.length === 0 ) {
        tasks.innerHTML = "";
        textTotal.innerHTML = 0;
        textDone.innerHTML = 0;
        return;
    }

    toDoList.forEach((task, index)=>{
        html += `  
        <tr>
            <td>${index}</td>
            <td>${task.tarea}</td>
            <td><input type="checkbox" onclick="completarTask(${index})" ${task.estado ? "checked" : " "}></td>
            <td><button class="borrar" onclick="eliminarTask(${index})">X</button></td>
        </tr>
      `
    })
    todoTable.innerHTML = html;

    let totalRealizadas = toDoList.filter(x => x.estado === true);
    console.log("Task realizados: " + totalRealizadas.length);
    textDone.innerHTML = totalRealizadas.length;

    let taskTotales = toDoList.length;
    console.log("Task totales: " + taskTotales);
    textTotal.innerHTML = taskTotales;
}

printLista();

btnaddTask.addEventListener("click", () => {
        const task = newTask.value;
        const newObjct = {
            tarea: task,
            estado: false
        }
    
        toDoList.push(newObjct);
        printLista();
    
    
})

function eliminarTask(id){
    toDoList.splice(id,1);
    printLista();
}

function completarTask(id){
    toDoList[id].estado  = true;
    printLista();
}