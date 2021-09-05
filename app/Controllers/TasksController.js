import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { tasksService } from "../Services/TasksService.js";



export class TasksController {

    constructor() {}

    addTasks(taskData) {
        event.preventDefault()
        let form = event.target

        let tasksData = {
            // @ts-ignore
            name: form.taskName.value,
            // @ts-ignore
            // done: form.taskDone.value,
            // @ts-ignore
            listId: form.listId.value
        }
        debugger
        tasksService.addTasks(tasksData)
    }

    deleteTasks(taskId) {
        tasksService.deleteTasks(taskId)

    }
}