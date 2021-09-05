import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/LocalStorage.js"

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

}
export const listsService = new ListsService()