import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListComponent implements OnInit {

  users: Array<User> = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
}
