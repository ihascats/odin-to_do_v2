function changeTaskInformation(task){
    const inputElements = document.querySelectorAll('input');

    let classes = []
    inputElements.forEach(element => {
        if (element.classList[0]){
            classes.push(element.classList[0])
        }
    })

    const textAreaElements = document.querySelectorAll('textarea');
    textAreaElements.forEach(element => {
        if (element.classList[0]){
            classes.push(element.classList[0])
        }
    })

    classes.forEach(item => {
        let capitalized = item[0].toUpperCase() + item.slice(1).toLowerCase();
        if (task['change'+`${capitalized}`]){
            if (item == "dueDate"){
                let itemValue = document.querySelector(`.${item}`).value;
                let date = new Date(itemValue);
                task['change'+`${capitalized}`](date)
            } else {
                let itemValue = document.querySelector(`.${item}`).value
                task['change'+`${capitalized}`](itemValue)
            }
        }
    })

    const checkListItemElements = document.querySelectorAll('li');
    
    checkListItemElements.forEach(element => {
        let id = element.classList[0];
        let text = element.lastElementChild.value;
        let status = element.firstElementChild.classList[0];
        task.changeChecklist(id, text, status);
    })
}

export default changeTaskInformation