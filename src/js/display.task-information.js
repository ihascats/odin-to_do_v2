import {newListItem, listItemGenerator } from "./create.newListItem";
import displayStatus from "./display.list-item-status";

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
        let id = key;
        let text = checkList[key][0];
        let status = checkList[key][1];
        const listItem = newListItem(id, status, text);
        element.appendChild(listItem)
        if (status){
            displayStatus(listItem)
        }
    })
}

export default displayTaskInformation