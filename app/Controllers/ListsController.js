import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { listsService } from "../Services/ListsService.js";
import { tasksService } from "../Services/TasksService.js";

function _drawLists() {
    let template = ''
    ProxyState.lists.forEach(l => template += l.CardTemplate)
    document.getElementById('lists').innerHTML = template

}

export class ListsController {
    constructor() {
        ProxyState.on('lists', _drawLists)
        ProxyState.on('tasks', _drawLists)
        _drawLists()
    }

    addToLists(event) {
        event.preventDefault()
        const form = event.target
        const listData = {
            // @ts-ignore
            // id: form.listData.value,
            // @ts-ignore
            listName: form.listName.value

        }
        try {
            listsService.addToLists(listData)
        } catch {
            // @ts-ignore
            form.make.classlist.add('danger')
            return
        }
        // @ts-ignore
        form.reset()
    }

    deleteLists(listId) {
        listsService.deleteLists(listId)
            // Swal.fire({
            //     title: 'Are you sure?',
            //     text: "You won't be able to revert this!",
            //     icon: 'warning',
            //     showCancelButton: true,
            //     confirmButtonColor: '#3085d6',
            //     cancelButtonColor: '#d33',
            //     confirmButtonText: 'Yes, delete it!'
            //   }).then((result) => {
            //     if (result.isConfirmed) {
            //       Swal.fire(
            //         'Deleted!',
            //         'Your file has been deleted.',
            //         'success'
            //       )
            //     }
            //   })

    }








    toggleListForm() {
        document.getElementById('list-form').classList.toggle('visually-hidden')
    }
}