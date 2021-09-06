import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TasksService {

    constructor() {
        ProxyState.on('tasks', saveState)
    }
    addTasks(taskData) {
        console.log("fromm the army", taskData)
        ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    }


    deleteTasks(taskId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
    }

    taskDone(taskId) {
        let checkedBox = ProxyState.tasks.find(t => t.id == taskId)
        let box = (checkedBox.listId)
        let card = ProxyState.lists.find(l => l.id == box)
        console.log(checkedBox, box, card);

        if (checkedBox.taskDone === false) {
            checkedBox.taskDone = true
            if (card.tasks >= 1) {
                card.tasks--
            }
            ProxyState.lists = ProxyState.lists
            ProxyState.tasks = ProxyState.tasks
        } else if (checkedBox.taskDone === true) {
            checkedBox.taskDone = false
            card.tasks++
                ProxyState.lists = ProxyState.lists
            ProxyState.tasks = ProxyState.tasks
        }
    }

}

export const tasksService = new TasksService()