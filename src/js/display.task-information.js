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
                let itemGen = listItemGenerator();

                itemGen.onclick = (event) => {
                    let val = event.target.value;
                    let input = event.target;
                    if (val == '+'){
                        event.target.value = '';
                        document.onclick = (event) => {
                            if (event.target != input)
                            input.value = '+';
                        }
                    }
                }
                
                itemGen.onkeydown = (event) => {
                    let val = event.target.value;
                    if (val == '+'){
                        val = '';
                    }
                    if (event.key == "Enter" && val != ''){
                        task.newListItem(val, false);
                        selfCall(task)
                    }
                    if (event.key == "Escape"){
                        event.target.value = '+';
                    }
                }
                query.appendChild(itemGen);
            } else {
                query.value = task[key];
            }
        }
    })
}

function selfCall(task){
    displayTaskInformation(task);
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