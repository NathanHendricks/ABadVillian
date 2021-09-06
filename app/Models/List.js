import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {
    constructor(listData) {
        this.id = listData.id || generateId()
        this.listName = listData.listName
        this.color = listData.color
        this.numberOfTasks = listData.numberOfTasks
    }

    get CardTemplate() {
        return /*html*/ `
    <div class="col-md-4">
        <div class="card my-2">
            <div class="card-header" style="background-color: ${this.color}">
                <div>
                    <h3>${this.listName}</h3> 
                    <button type="btn" class="my-2 btn btn-danger d-flex justify-content-center" onclick="app.listsController.deleteLists('${this.id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> 
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg></button>
                </div>
            </div>
            <div card="card-body">
                <div class="container-fluid">
                    <div class="row p-3 d-flex justify-content-between align-items-center">
                    <h3>Tasks:</h3> 
                    ${this.Tasks}
                        <div class="col">
                        <form onsubmit="app.tasksController.addTasks('${this.id}')">
                        <div class="form-group">
                        <label for="taskName"> Task Name: </label>
                        <input type="text" name="taskName" class="form-control" id="taskName" required minlength="3" maxlength="50">
                        </div>
                        <div class="form-group mt-2 d-flex justify-content-between">
                        <button type="submit" class="btn btn-primary" onsubmit="app.tasksController.addTasks('${this.id}')">Submit</button>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }



    get Tasks() {
        let template = ""
        let foundTasks = ProxyState.tasks.filter(t => t.listId == this.id)
            // console.log('after filter', foundTasks);
        foundTasks.forEach(t => template += t.CardTemplate)
        return template

    }

}