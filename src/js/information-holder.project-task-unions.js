import Project from "./create.project";

class ProjectTaskInformation{
    constructor(){
        this.projects = []
    }

    newProject(projectName){
        let project = new Project(projectName);
        this.projects.push(project);
    }

    localStorageFormat(){
        let taskNumber = 0;
        this.projects.forEach(project => {
            let objTasks = {}
            let projectName = project.title;
            project.tasks.forEach(task => {
                objTasks[`task${taskNumber}`] = {
                    "title":task.title,
                    "description": task.description,
                    "dueDate":task.dueDate,
                    "priority":task.priority,
                    "checkList": task.checkList,
                    "note":task.note,
                    "completed":task.completed,
                    "expired":task.expired
                }
                taskNumber++
            })
            localStorage.setItem(projectName, JSON.stringify(objTasks));
        })
    }

}

export default ProjectTaskInformation