class Task{
    constructor (id = 0, title = "", description = "", dueDate = 'dd/mm/yyyy', priority = 0, checkList = [], note = ""){
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

    changeDueDate(newDueDate){
        this.dueDate = newDueDate;
    }

    changePriority(newPriority){
        this.priority = newPriority;
    }

    changeCheckList(newCheckList){
        this.checkList = newCheckList;
    }
    
    changeNote(newNote){
        this.note = newNote;
    }
    
}

export default Task