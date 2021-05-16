import { faAddressBook,faColumns } from '@fortawesome/free-solid-svg-icons';
import { AppState } from './../../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  username: string = "user name";
  faAddressBook = faAddressBook;
  faColumns = faColumns;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe( data => {
      this.username = data.user.username;
    })
  }

}
