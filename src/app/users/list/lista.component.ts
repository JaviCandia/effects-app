import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListComponent implements OnInit {

  users: Array<User> = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.store.select('users').subscribe(({users, loading, error}) => {
      this.users = users;
      this.loading = loading;
      console.log(loading);
      this.error = error;
    });

    this.store.dispatch(loadUsers());
  }
}
