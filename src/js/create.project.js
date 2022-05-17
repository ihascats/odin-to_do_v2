import Task from "./create.task";

class Project {
    constructor (title){
        this.title = title;
        this.tasks = [];
    }

    newTask(title = "", description = "", dueDate = 'dd/mm/yyyy', priority = 0, checkList = {}, note = ""){
        let id = this.tasks.length;
        let task = new Task(id, title, description, dueDate, priority , checkList, note);
        this.tasks.push(task)
    }
}

export default Project