import newElement from "./create.element";

function displayProjectTasks(button, info, displayTo){
    if (!button || button == null) return
    while (displayTo.firstElementChild){
        displayTo.firstElementChild.remove()
    }
    let selectedProject;
    info.projects.forEach(project => {
        if (project.title == button.textContent){
            selectedProject = project;
            project.tasks.forEach(task => {
                if (!task.completed && !task.expired){
                    let button = newElement('button', `${task.id}`);
                    document.querySelector('.projects').appendChild(button);
                    button.textContent = task.title;
                    if (task.priority == 1) {
                        button.setAttribute('style', 'color: #83d7d3')
                    }
                    if (task.priority == 2) {
                        button.setAttribute('style', 'color: #cecf90')
                    }
                    if (task.priority == 3) {
                        button.setAttribute('style', 'color: #ff6d6d')
                    }
                }

            })
        }
    })
    return selectedProject;
}

export default displayProjectTasks