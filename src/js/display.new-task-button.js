import newElement from "./create.element";
import displayProjectTasks from "./display.project-tasks";

function addNewTaskButton(info, projectsSelector, selectedProject){
    let newTaskButton = newElement('button', 'newTaskButton');
    projectsSelector.appendChild(newTaskButton);
    newTaskButton.textContent = '+';
    newTaskButton.onclick = (event) => {
        let button = event.target;
        button.textContent = '';
        button.appendChild(document.createElement('input'));
        newTaskButton.onclick = null;
        newTaskButton.onkeydown = (event) => {
            if (event.key == "Enter"){
                selectedProject.newTask(button.firstElementChild.value);
                button.textContent = selectedProject.title;
                displayProjectTasks(button, info, projectsSelector);
                selfCall(info, projectsSelector, selectedProject);
            }
            if (event.key == "Escape"){
                button.textContent = selectedProject.title;
                displayProjectTasks(button, info, projectsSelector);
                selfCall(info, projectsSelector, selectedProject);
            }
        }
    }
}

function selfCall(info, projectsSelector, selectedProject){
    addNewTaskButton(info, projectsSelector, selectedProject);
}

export default addNewTaskButton