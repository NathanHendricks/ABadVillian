import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { tasksService } from "../Services/TasksService.js";



export class TasksController {

    constructor() {}

    addTasks(listId, ) {
        event.preventDefault()
        let form = event.target

        let taskData = {
            // @ts-ignore
            taskName: form.taskName.value,
            // @ts-ignore
            listId: listId
        }
        console.log("TCP", taskData);
        tasksService.addTasks(taskData)
    }

    taskDone(taskId) {
        tasksService.taskDone(taskId)

    }

    // totalTasks() {
    //     tasksService.totalTasks()
    // }


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