import changeTaskInformation from "./change.task-information";
import displayProjectTasks from "./display.project-tasks";
import displayTaskInformation from "./display.task-information";

function displayBundleTaskInformation(info){
    const projectsSelector = document.querySelector('.projects');
    // onclick event displays tasks from within a project
    projectsSelector.onclick = (event) => {

        // if button used to create new project is clicked, do nothing
        let project = event.target.closest('button');
        if (!project || project == null || project.classList.contains("newProjectButton")) return

        let returnButton = document.querySelector('.nav > button');
        returnButton.textContent = "<< RETURN TO PROJECTS";
        returnButton.classList.toggle('return');
        
        let selectedProject = displayProjectTasks(event, info, projectsSelector);
        let selectedProjectEvent = event;

        

        // change onclick event to display task information
        projectsSelector.onclick = (event) => {
            let button = event.target.closest('button');
            if (!button || button == null) return
            let selectedTask;
            selectedProject.tasks.forEach(task =>{
                if (button.classList.contains(task.id)){
                    displayTaskInformation(task)
                    selectedTask = task;
                }
            })
            document.querySelector('.task').oninput = () =>{
                changeTaskInformation(selectedTask);
                selectedProject = displayProjectTasks(selectedProjectEvent, info, projectsSelector);
            }
            document.querySelector('.task').onclick = () =>{
                changeTaskInformation(selectedTask);
                selectedProject = displayProjectTasks(selectedProjectEvent, info, projectsSelector);
            }

        }
    };
}

export default displayBundleTaskInformation