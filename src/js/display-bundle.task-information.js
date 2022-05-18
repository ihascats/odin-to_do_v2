import changeTaskInformation from "./change.task-information";
import displayProjectTasks from "./display.project-tasks";
import displayTaskInformation from "./display.task-information";

function displayBundleTaskInformation(info){
    const projectsSelector = document.querySelector('.projects');
    projectsSelector.onclick = (event) => {

        let selectedProject = displayProjectTasks(event, info, projectsSelector);
        let selectedProjectEvent = event;
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
        }
    };
}

export default displayBundleTaskInformation