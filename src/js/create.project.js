import Task from "./create.task";

class Project {
    constructor (title){
        this.title = title;
        this.tasks = [];
    }

    newTask(id = 0, title = "", description = "", dueDate = 'dd/mm/yyyy', priority = 0, checkList = {}, note = ""){
        let task = new Task(id, title, description, dueDate, priority , checkList, note);
        this.tasks.push(task)
    }
}

export default Project