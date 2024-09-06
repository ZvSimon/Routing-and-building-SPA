import {TasksComponent} from "./src/app/tasks/tasks.component";
import {Routes} from "@angular/router";
import {NoTaskComponent} from "./src/app/tasks/no-task/no-task.component";
import {UserTasksComponent} from "./src/app/users/user-tasks/user-tasks.component";
import {NewTaskComponent} from "./src/app/tasks/new-task/new-task.component";
import {NotFoundComponent} from "./src/app/not-found/not-found.component";

export const routes:Routes = [
    {
        path: '',
        component:NoTaskComponent
    },
    {
        path: 'users/:userId',
        component:UserTasksComponent,
        children:[{
            path:'',
            redirectTo:'tasks',
            pathMatch:'prefix'
        },{
            path: 'tasks',
            component:TasksComponent,
        },
            {
                path:'tasks/new',
                component:NewTaskComponent,
            }]
    },

    {
        path: '**',
        component:NotFoundComponent
    }

]