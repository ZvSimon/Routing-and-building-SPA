import {TasksComponent} from "./src/app/tasks/tasks.component";
import {Routes} from "@angular/router";
import {NoTaskComponent} from "./src/app/tasks/no-task/no-task.component";

export const routes:Routes = [
    {
        path: '',
        component:NoTaskComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    }
]