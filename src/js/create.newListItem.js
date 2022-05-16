import newElement from "./create.element";

function newListItem(id, status, text){
    const li = newElement('li');
    const button = newElement('button');
    li.appendChild(button);
    const input = newElement('input');
    li.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', '64');
    li.classList.add(id);
    button.classList.add(`${status}`);
    input.value = text;
    return li;
}

function listItemGenerator(){
    const div = newElement();
    const input = newElement('input', 'newListItem');
    div.appendChild(input);
    input.setAttribute('type', 'text');
    input.value = '+';
    return div;
}

export {newListItem, listItemGenerator};