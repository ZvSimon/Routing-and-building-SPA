import {Component, computed, inject, input} from '@angular/core';
import {User} from "../user/user.model";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();
  private userService:UsersService = inject(UsersService);

  userName = computed(()=> this.userService.users.find((user) => user.id === this.userId())?.name);
}
