function loadLocalStorage(info){
    let titles = [];
    Object.keys(localStorage).forEach(key => {
        info.projects.forEach(project => {
            titles.push(project.title)
        })
        if (!titles.includes(key)){
            info.newProject(key);
        }
    })

    Object.keys(localStorage).forEach(project => {
        let parsedProject = JSON.parse(localStorage[project])
        Object.keys(parsedProject).forEach(task => {
            let projectId = 0;
            info.projects.forEach(projectList => {
                if (projectList.title == project){
                    projectId = info.projects.indexOf(projectList);
                }
            })
            let title = parsedProject[task]['title']
            let description = parsedProject[task]['description']
            let dueDate = parsedProject[task]['dueDate'].slice(0, -3);
            dueDate = new Date(dueDate);
            let priority = parsedProject[task]['priority']
            let checkList = parsedProject[task]['checkList']
            let note = parsedProject[task]['note']
            info.projects[projectId].newTask(title, description, dueDate, priority, checkList, note);
            let lastTaskId = info.projects[projectId].tasks.length - 1;
            info.projects[projectId].tasks[lastTaskId].expired = parsedProject[task]['expired']
            info.projects[projectId].tasks[lastTaskId].completed = parsedProject[task]['completed']
        })
    })
}

export default loadLocalStorage