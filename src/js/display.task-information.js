import changeTaskInformation from "./change.task-information";
import {newListItem, listItemGenerator } from "./create.newListItem";
import displayStatus from "./display.list-item-status";
import { enableFields } from "./manage.input-fields";

function displayTaskInformation(task){
    enableFields();
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
            } else if (key == "dueDate"){
                if (task[key]){
                    let year = task[key].getFullYear();
                    let month = ('0' + task[key].getMonth()).slice(-2);
                    let day = ('0' + task[key].getDate()).slice(-2);
                    query.value = `${year}-${month}-${day}`
                } else {
                    query.value = '';    
                }
            } else {
                if (key == 'priority'){
                    query.onchange = () => {
                        changeTaskInformation(task);
                    }
                }
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
        if (text!=''){
            const listItem = newListItem(id, status, text);
            listItem.onkeydown = (event)=>{
                let li = event.target.closest('li');
                checkList[li.classList[0]][0] = '';
                if (!li || li == null) return
                if (event.key == 'Delete'){
                    li.remove();
                }
            }
            element.appendChild(listItem)
            if (status){
                displayStatus(listItem)
            }
        }
    })
}

export default displayTaskInformation