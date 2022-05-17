function displayStatus(item){
    if (item.firstElementChild.classList.contains('true')){
        item.firstElementChild.textContent = 'X';
        item.lastElementChild.setAttribute('style', 'text-decoration: line-through');
    } else {
        item.firstElementChild.textContent = '';
        item.lastElementChild.setAttribute('style', '');
    }
}

function changeStatus(event){
    let button = event.target.closest('button');
    if (!button || button == null) return
    let currentClass = button.classList[0] === "true";
    button.classList.replace(currentClass, !currentClass);
    displayStatus(button.parentElement);
}

export default displayStatus
export {changeStatus}