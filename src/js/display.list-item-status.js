function displayStatus(item){
    const button = item.firstElementChild;
    const input = item.lastElementChild;
    if (button.classList.contains('true')){
        button.textContent = 'X';
        input.setAttribute('style', 'text-decoration: line-through');
        input.disabled = true;
    } else {
        button.textContent = '';
        input.setAttribute('style', '');
        input.disabled = false;
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