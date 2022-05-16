function displayTaskInformation(task){
    Object.keys(task).forEach(key => {
        const query = document.querySelector(`.${key}`);
        if (query){
            query.value = task[key];
        }
    })
}

export default displayTaskInformation