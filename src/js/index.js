import "../css/styles.css";
import { changeStatus } from "./display.list-item-status";
import displayProjects from "./display.projects";
import displayTaskInformation from "./display.task-information";
import ProjectTaskInformation from "./information-holder.project-task-unions";

let info = new ProjectTaskInformation();
info.newProject('Personal');
info.newProject('Work');

info.projects[0].newTask("Test", "Just something to test functionality", 'dd/mm/yyyy', 16, {
    0 : ['do something', true],
    1 : ['do something else', false],
    2 : ['do nothing', true],
    3 : ['do math', false],
    4 : ['do meth', true],
}, "Something to do");
info.projects[0].tasks[0].newListItem('cry', 'true')
displayTaskInformation(info.projects[0].tasks[0]);

info.projects[1].newTask("Test", "Just something to test functionality", 'dd/mm/yyyy', 16, {
    0 : ['do something', true],
    1 : ['do something else', false],
    2 : ['do nothing', true],
    3 : ['do math', false],
    4 : ['do meth', true],
}, "Something to do");

let checkList = document.querySelector('.checkList');
checkList.onclick = (event) => changeStatus(event);

info.projects.forEach(project => {
    displayProjects(project);
})
