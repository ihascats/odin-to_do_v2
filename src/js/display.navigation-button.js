import displayBundleTaskInformation from "./display-bundle.task-information";
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
        })
        button.textContent = "PROJECTS";
        button.classList.toggle('return');
        displayBundleTaskInformation(info)
    
    };
}

export default navigationButton