import displayBundleTaskInformation from "./display-bundle.task-information";
import newProjectButton from "./display.new-project-button";
import displayProjects from "./display.projects";

function navigationButton(projectsSelector, info){
    document.querySelector('.nav').onclick = (event) => {
        let button = event.target.closest('.return');
        if (!button || button == null) return
        while (projectsSelector.firstElementChild){
            projectsSelector.firstElementChild.remove();
        }
        info.projects.forEach(project => {
            displayProjects(project);
        });
        newProjectButton(info, projectsSelector)
        button.textContent = "PROJECTS";
        button.classList.toggle('return');
        displayBundleTaskInformation(info)
    
    };
}

export default navigationButton