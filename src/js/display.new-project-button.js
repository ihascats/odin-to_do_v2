import newElement from "./create.element";
import displayProject from "./display.projects";

function newProjectButton(info, projectsSelector){
    let newButton = newElement('button', 'newProjectButton');
    newButton.textContent = '+';
    projectsSelector.appendChild(newButton);
    newButton.onclick = (event) => {
        let button = event.target;
        button.textContent = '';
        button.appendChild(document.createElement('input'));
        newButton.onclick = null;
        newButton.onkeydown = (event) => {
            if (event.key == "Enter"){
                if (button.firstElementChild.value == '') return
                info.newProject(button.firstElementChild.value);
                while (projectsSelector.firstElementChild){
                    projectsSelector.firstElementChild.remove();
                }
                info.projects.forEach(project => {
                    displayProject(project);
                })
                selfCall(info, projectsSelector);
            }
            if (event.key == "Escape"){
                while (projectsSelector.firstElementChild){
                    projectsSelector.firstElementChild.remove();
                }
                info.projects.forEach(project => {
                    displayProject(project);
                })
                selfCall(info, projectsSelector);
            }
        }
    }
}

function selfCall(info, projectsSelector){
    newProjectButton(info, projectsSelector);
}

export default newProjectButton