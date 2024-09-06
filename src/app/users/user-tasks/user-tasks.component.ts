import {Component, computed, DestroyRef, inject, input, OnInit} from '@angular/core';
import {User} from "../user/user.model";
import {UsersService} from "../users.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit{
  userName='';
  private userService:UsersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef=inject(DestroyRef)


  ngOnInit() {
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName = this.userService.users.find((user: User) =>
            user.id === paramMap.get('userId'))?.name || '';
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());

  }
}
