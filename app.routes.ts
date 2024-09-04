import {TasksComponent} from "./src/app/tasks/tasks.component";
import {Routes} from "@angular/router";
import {NoTaskComponent} from "./src/app/tasks/no-task/no-task.component";
import {UserTasksComponent} from "./src/app/users/user-tasks/user-tasks.component";

export const routes:Routes = [
    {
        path: '',
        component:NoTaskComponent
    },
    {
        path: 'users/:userId',
        component:UserTasksComponent
    }
]