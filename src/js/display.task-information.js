import { newListItem, listItemGenerator } from "./create.newListItem";

function displayTaskInformation(task){
    Object.keys(task).forEach(key => {
        const query = document.querySelector(`.${key}`);
        if (query){
            if (key == 'checkList'){
                while(query.firstElementChild){
                    query.firstElementChild.remove();
                }
                displayCheckList(task[key], query);
                query.appendChild(listItemGenerator());
            } else {
                query.value = task[key];
            }
        }
    })
}

function displayCheckList(checkList, element){
    Object.keys(checkList).forEach(key =>{
        console.log(key);
        console.log(checkList[key][0]);
        console.log(checkList[key][1]);
        const listItem = newListItem(key, checkList[key][1], checkList[key][0]);
        element.appendChild(listItem)
    })
}

export default displayTaskInformation