import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from './user/user-data';
import { User } from './user/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'devops-demo';
  users: UserData[] = [];
  form: FormGroup;

  constructor(fb: FormBuilder, private dataservice: DataService) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: '',
      department: '',
      role: '',
      contact: ''
    });
   }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser(): void {
    this.dataservice.addUser(this.form.value).subscribe(() => {
      this.getUsers();
    });
  }

  updateUser(user: User): void {
    this.dataservice.getUser(user.id).subscribe(data => {
      data.contact = user.contact;
      this.dataservice.updateUser(user).subscribe(data1 => {
        this.getUsers();
      });
    });
  }

  deleteUser(id): void {
    this.dataservice.deleteUser(id).subscribe(data => {
      this.getUsers();
    });
  }
}
