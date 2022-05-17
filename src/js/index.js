import "../css/styles.css";
import Task from "./create.task";
import { changeStatus } from "./display.list-item-status";
import displayTaskInformation from "./display.task-information";

let fin = new Task(0, "Test", "Just something to test functionality", 'dd/mm/yyyy', 16, {
    // 'do something' : true,
    // 'do something else' : false,
    // 'do nothing' : true,
    // 'do ur mom' : true,
    0 : ['do something', true],
    1 : ['do something else', false],
    2 : ['do nothing', true],
    3 : ['do math', false],
    4 : ['do meth', true],
}, "Something to do");

fin.newListItem('crying', true);

displayTaskInformation(fin);

let checkList = document.querySelector('.checkList');

checkList.onclick = (event) => changeStatus(event);