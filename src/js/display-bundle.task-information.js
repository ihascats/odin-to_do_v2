import changeTaskInformation from "./change.task-information";
import addNewTaskButton from "./display.new-task-button";
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
        
        let selectedProject = displayProjectTasks(project, info, projectsSelector);

        addNewTaskButton(info, projectsSelector, selectedProject);

        

        // change onclick event to display task information
        projectsSelector.onclick = (event) => {
            let button = event.target.closest('button');
            if (!button || button == null) return
            let selectedTask;
            selectedProject.tasks.forEach(task =>{
                if (button.classList.contains(task.id)){
                    displayTaskInformation(task);
                    selectedTask = task;
                }
            })
            document.querySelector('.task').oninput = () =>{
                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)
            }
            document.querySelector('.task').onclick = () =>{
                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)
            }

            const keyInfoElement = document.querySelector('.keyInfo');
            const completeTaskElement = keyInfoElement.firstElementChild;
            const deleteTaskElement = keyInfoElement.childNodes[3];
            keyInfoElement.oninput = () => {
                displayProjectTasks(project, info, projectsSelector);
                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)
            }
            completeTaskElement.onclick = () => {
                selectedTask.setCompleted();
                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)
            }
            deleteTaskElement.onclick = () => {
                console.log("test")
                let index = selectedProject.tasks.indexOf(selectedTask);
                if ( index != -1){
                    selectedProject.tasks.splice(index, 1);
                }
                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)
            }
            
            

        }
    };
}

function bundleChange(info, projectsSelector, selectedProject, project, selectedTask){
    changeTaskInformation(selectedTask);
    selectedProject = displayProjectTasks(project, info, projectsSelector);
    addNewTaskButton(info, projectsSelector, selectedProject);
}

export default displayBundleTaskInformation