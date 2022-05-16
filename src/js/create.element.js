function newElement(type = 'div', className){
    let element = document.createElement(type);
    if (className){
        element.classList.add(className);
    }
    return element
}

export default newElement