import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { tasksService } from "../Services/TasksService.js";



export class TasksController {

    constructor() {}

    addTasks(listId) {
        event.preventDefault()
        let form = event.target

        let taskData = {
            // @ts-ignore
            name: form.taskName.value,
            // @ts-ignore
            // done: form.taskDone.value,
            // @ts-ignore
            listId: listId
        }
        tasksService.addTasks(taskData)
    }

    deleteTasks(taskId) {
        tasksService.deleteTasks(taskId)
            // Swal.fire({
            //     title: 'Are you sure?',
            //     text: "You won't be able to revert this!",
            //     icon: 'warning',
            //     showCancelButton: true,
            //     confirmButtonColor: '#3085d6',
            //     cancelButtonColor: '#d33',
            //     confirmButtonText: 'Yes, delete it!'
            // }).then((result) => {
            //     if (result.isConfirmed) {
            //         Swal.fire(
            //             'Deleted!',
            //             'Your file has been deleted.',
            //             'success'
            //         )
            //     }
            // })

    }
}