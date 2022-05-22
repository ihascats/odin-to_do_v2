function clearFields(){
    let input = document.querySelectorAll('input')
    input.forEach(item => {
        item.value = '';
    })
    let textArea = document.querySelectorAll('textarea')

    textArea.forEach(item => {
        item.value = '';
    })
    let priority = document.querySelector('.priority')
    priority.value = 0;
}

function disableFields(){
    let checkList = document.querySelector('.checkList')
    
    while(checkList.firstElementChild){
        checkList.firstElementChild.remove();
    }

    let input = document.querySelectorAll('input')
    input.forEach(item => {
        item.disabled = true;
    })
    let textArea = document.querySelectorAll('textarea')

    textArea.forEach(item => {
        item.disabled = true;
    })
    let priority = document.querySelector('.priority')
    priority.disabled = true;

}

function enableFields(){
    let input = document.querySelectorAll('input')
    input.forEach(item => {
        item.disabled = false;
    })
    let textArea = document.querySelectorAll('textarea')

    textArea.forEach(item => {
        item.disabled = false;
    })
    let priority = document.querySelector('.priority')
    priority.disabled = false;
}

export {clearFields, disableFields, enableFields}