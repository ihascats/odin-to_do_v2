import "../css/styles.css";
import Task from "./create.task";
import displayTaskInformation from "./display.task-information";

let fin = new Task(0, "Test", "Just something to test functionality", 'dd/mm/yyyy', 16, [], "Something to do");
displayTaskInformation(fin);