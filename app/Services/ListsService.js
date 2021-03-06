import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/LocalStorage.js"
import { tasksService } from "./TasksService.js"

class ListsService {

    constructor() {
        ProxyState.on('lists', saveState)
    }
    addToLists(listData) {
        ProxyState.lists = [...ProxyState.lists, new List(listData)]
    }

    deleteLists(listId) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id !== listId)
    }

    // _addNumberOfTasks(listData) {
    //     listData.numberOfTasks++
    //         ProxyState.lists = ProxyState.lists
    // }

}
export const listsService = new ListsService()