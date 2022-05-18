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
            let itemValue = document.querySelector(`.${item}`).value
            task['change'+`${capitalized}`](itemValue)
        }
    })
}

export default changeTaskInformation