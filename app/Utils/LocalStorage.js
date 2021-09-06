import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"




export function saveState() {
    localStorage.setItem("myLists", JSON.stringify({ lists: ProxyState.lists, tasks: ProxyState.tasks }))
}

export function loadState() {
    let saveData = JSON.parse(localStorage.getItem("myLists"))
    if (saveData != null) {
        ProxyState.lists = saveData.lists.map(l => new List(l))
        ProxyState.tasks = saveData.tasks.map(t => new Task(t))
    }
}