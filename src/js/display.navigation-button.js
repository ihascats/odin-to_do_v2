import displayBundleTaskInformation from "./display-bundle.task-information";
import newProjectButton from "./display.new-project-button";
import displayProject from "./display.projects";
import { clearFields, disableFields } from "./manage.input-fields";

function navigationButton(projectsSelector, info){
    document.querySelector('.nav').onclick = (event) => {
        let button = event.target.closest('.return');
        if (!button || button == null) return
        while (projectsSelector.firstElementChild){
            projectsSelector.firstElementChild.remove();
        }
        info.projects.forEach(project => {
            displayProject(project);
        });
        newProjectButton(info, projectsSelector)
        button.textContent = "PROJECTS";
        button.classList.toggle('return');
        displayBundleTaskInformation(info);
        clearFields();
        disableFields();
    };
}

export default navigationButton