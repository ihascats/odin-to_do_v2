function checkExpired(info){
    window.onload = () => {
        let currentDate = new Date();
        currentDate.setHours(0,0,0,0);
        info.projects.forEach(project => {
            project.tasks.forEach(task => {
                if (task.dueDate && task.dueDate.getTime() != 0)
                if (task.dueDate.getTime() < currentDate.getTime()){
                    task.setExpired();
                }
            })
        })
    }
}

export default checkExpired