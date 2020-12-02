let task;
function getTask(){
    task=document.getElementById("myInput").value;
    console.log(task);
    display();

}
function display(){
    document.getElementById("task").innerHTML+=`<li>${task}<li>`;
}

