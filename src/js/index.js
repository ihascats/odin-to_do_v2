import "../css/styles.css";
import displayBundleTaskInformation from "./display-bundle.task-information";
import { changeStatus } from "./display.list-item-status";
import navigationButton from "./display.navigation-button";
import newProjectButton from "./display.new-project-button";
import displayProject from "./display.projects";
import ProjectTaskInformation from "./information-holder.project-task-unions";

const projectsSelector = document.querySelector('.projects')

let info = new ProjectTaskInformation();
info.newProject('Personal');
info.newProject('Work');

info.projects[0].newTask("PersonalTask", "Just something to test functionality", '', 16, {
    0 : ['do something', true],
    1 : ['do something else', false],
    2 : ['do nothing', true],
    3 : ['do math', false],
    4 : ['do meth', true],
}, "Something to do");
info.projects[0].tasks[0].newListItem('cry', 'true')

info.projects[0].newTask("PersonalTask2", "Just something to test functionality", '', 16, {
    0 : ['do something', true],
    1 : ['do something else', false],
    2 : ['do nothing', true],
    3 : ['do math', false],
    4 : ['do meth', true],
}, "Something to do");

info.projects[1].newTask("WorkTask", "Just something to test functionality", '', 16, {
    0 : ['do something', true],
    1 : ['do something else', false],
    2 : ['do nothing', true],
    3 : ['do math', false],
    4 : ['do meth', true],
}, "Something to do");

let checkList = document.querySelector('.checkList');
checkList.onclick = (event) => changeStatus(event);

info.projects.forEach(project => {
    displayProject(project);
})
newProjectButton(info, projectsSelector);

displayBundleTaskInformation(info);

navigationButton(projectsSelector, info);