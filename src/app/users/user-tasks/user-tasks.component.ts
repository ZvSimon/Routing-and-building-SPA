import {Component, computed, inject, input} from '@angular/core';
import {User} from "../user/user.model";
import {UsersService} from "../users.service";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class UserTasksComponent {
  userId = input.required<string>();
  private userService:UsersService = inject(UsersService);

  userName = computed(()=> this.userService.users.find((user:User) => user.id === this.userId())?.name);
}
