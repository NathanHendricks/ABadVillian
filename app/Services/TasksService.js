import { ProxyState } from "../AppState.js"
import { ListsController } from "../Controllers/ListsController.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TasksService {

    constructor() {
        ProxyState.on('tasks', saveState)
        ProxyState.on('lists', saveState)
    }
    addTasks(taskData) {
        console.log("fromm the army", taskData)
        ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
        let currentfound = ProxyState.lists.find(t => t.id == taskData.listId)
        if (currentfound.numberOfTasks > 0) {
            currentfound.numberOfTasksCompleted++
        }
        currentfound.totalNumberTasks++
            ProxyState.lists = ProxyState.lists
    }


    deleteTasks(taskId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)

    }

    taskDone(taskId) {
        let checkedBox = ProxyState.tasks.find(t => t.id == taskId)
        let box = (checkedBox.listId)
        let card = ProxyState.lists.find(l => l.id == box)
        console.log(checkedBox, "tudy", card);

        if (checkedBox.taskDone == false) {
            checkedBox.taskDone = true
            if (card.numberOfTasksCompleted >= 1) {
                card.numberOfTasksCompleted--
            }
        } else if (checkedBox.taskDone == true) {
            card.numberOfTasksCompleted++
                checkedBox.taskDone = false

        }
        ProxyState.lists = ProxyState.lists
        ProxyState.tasks = ProxyState.tasks
    }
}

export const tasksService = new TasksService()