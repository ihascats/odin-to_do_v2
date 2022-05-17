import newElement from "./create.element";

function displayProjects(project){
    let button = newElement('button');
    document.querySelector('.projects').appendChild(button);
    button.textContent = project.title;
}

export default displayProjects