function AddTask(){
    var input=document.getElementById('input').value
    var element=document.getElementById('task-container')
    console.log(element)
    var newelement=document.createElement('div')
    newelement.setAttribute('id','ind-task')
    newelement.innerHTML=`<h6>${input}</h6><button onclick="DeleteTask(event)">Delete </button>`
    element.append(newelement)
}
function DeleteTask(event){
    event.target.parentElement.remove()
}