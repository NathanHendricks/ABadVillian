import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TasksService {

    constructor() {
        ProxyState.on('tasks', saveState)
    }
    addTasks(taskData) {
        ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    }


    deleteTasks(taskId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
    }
}

export const tasksService = new TasksService()