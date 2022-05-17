import newElement from "./create.element";

function displayProjectTasks(event, info, displayTo){
    let button = event.target.closest('button');
    if (!button || button == null) return
    while (displayTo.firstElementChild){
        displayTo.firstElementChild.remove()
    }
    info.projects.forEach(project => {
        if (project.title == button.textContent){
            project.tasks.forEach(task => {
                let button = newElement('button');
                document.querySelector('.projects').appendChild(button);
                button.textContent = task.title;
            })
        }
    })
}

export default displayProjectTasks