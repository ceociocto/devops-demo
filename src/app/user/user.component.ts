import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { UserData } from './user-data';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  editMode: boolean;

  @Input()
  user: User;

  @Output() updateEvent = new EventEmitter<User>();

  @Output() deleteEvent = new EventEmitter<number>();

  constructor() { }

  updateUser(user: User): void {
    this.updateEvent.emit(
      user
    );
  }

  deleteUser(id: number): void {
    this.deleteEvent.emit(id);
  }

}
