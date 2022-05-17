import Project from "./create.project";

class ProjectTaskInformation{
    constructor(){
        this.projects = []
    }

    newProject(projectName){
        let project = new Project(projectName);
        this.projects.push(project);
    }

}

export default ProjectTaskInformation