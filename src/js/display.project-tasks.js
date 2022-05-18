import newElement from "./create.element";

function displayProjectTasks(event, info, displayTo){
    let button = event.target.closest('button');
    if (!button || button == null) return
    while (displayTo.firstElementChild){
        displayTo.firstElementChild.remove()
    }
    let selectedProject;
    info.projects.forEach(project => {
        if (project.title == button.textContent){
            selectedProject = project;
            project.tasks.forEach(task => {
                let button = newElement('button', `${task.id}`);
                document.querySelector('.projects').appendChild(button);
                button.textContent = task.title;
            })
        }
    })
    return selectedProject;
}

export default displayProjectTasks