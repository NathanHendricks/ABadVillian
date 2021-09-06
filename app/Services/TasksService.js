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
    }


    deleteTasks(taskId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
    }

    totalTasks() {
        for (let i = 0; i <= ProxyState.tasks.length; i++) {
            let number = ProxyState.tasks[i]
            let newLength = number.length
            if (newLength = number.length) {
                console.log(newLength);
            }
        }
    }

    taskDone(taskId) {
            let checkedBox = ProxyState.tasks.find(t => t.id == taskId)
            let box = (checkedBox.listId)
            let card = ProxyState.lists.find(l => l.id == box)
            console.log(checkedBox, box, card);

            if (checkedBox.taskDone === false) {
                checkedBox.taskDone = true
                if (card.numberOfTasks >= 1) {
                    card.numberOfTasks--
                }
                ProxyState.lists = ProxyState.lists
                ProxyState.tasks = ProxyState.tasks
            } else if (checkedBox.taskDone === true) {
                checkedBox.taskDone = false
                card.numberOfTasks++
                    ProxyState.lists = ProxyState.lists
                ProxyState.tasks = ProxyState.tasks
            }
        }
        // it kinda works but not...
    _addNumberOfTasks(listData) {
        listData.numberOfTasks++
            console.log(listData.numberOfTasks);
        ProxyState.lists = ProxyState.lists
    }
}

export const tasksService = new TasksService()