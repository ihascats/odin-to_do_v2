import "../css/styles.css";
import checkExpired from "./change.task-expired";
import displayBundleTaskInformation from "./display-bundle.task-information";
import { changeStatus } from "./display.list-item-status";
import navigationButton from "./display.navigation-button";
import newProjectButton from "./display.new-project-button";
import displayProject from "./display.projects";
import ProjectTaskInformation from "./information-holder.project-task-unions";
import loadLocalStorage from "./load.local-storage-information";
import { clearFields, disableFields } from "./manage.input-fields";

const projectsSelector = document.querySelector('.projects')

let info = new ProjectTaskInformation();
info.newProject('Personal')
info.newProject('Work')

loadLocalStorage(info);

let checkList = document.querySelector('.checkList');
checkList.onclick = (event) => changeStatus(event);

info.projects.forEach(project => {
    displayProject(project);
})
newProjectButton(info, projectsSelector);

displayBundleTaskInformation(info);

navigationButton(projectsSelector, info);

checkExpired(info);

clearFields();
disableFields();

window.onclick = () => {
    info.localStorageFormat()
}
window.oninput = () => {
    info.localStorageFormat()
}
window.onkeydown = () => {
    info.localStorageFormat()
}