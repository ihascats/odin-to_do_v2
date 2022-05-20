class Task{
    constructor (id = 0, title = "", description = "", dueDate = '', priority = 0, checkList = {}, note = ""){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
        this.note = note;
    }

    changeId(newId){
        this.id = newId;
    }

    changeTitle(newTitle){
        this.title = newTitle;
    }

    changeDescription(newDescription){
        this.description = newDescription;
    }

    changeDuedate(newDueDate){
        this.dueDate = newDueDate;
    }

    changePriority(newPriority){
        this.priority = newPriority;
    }

    changeChecklist(id, task, status){
        this.checkList[id] = [task, status];
    }

    changeNote(newNote){
        this.note = newNote;
    }

    newListItem(task, status){
        let id = Object.keys(this.checkList).length;
        this.checkList[id] = [task, status];
    }
    
}

export default Task