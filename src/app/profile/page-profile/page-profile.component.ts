import { Subscription } from 'rxjs';
import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import { Profile } from './../../core/services/models/profile';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaIconLibrary} from '@fortawesome/angular-fontawesome'
import { faUser,faUsers, faAngleDoubleLeft,faCouch, faCalendar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss'],
})
export class PageProfileComponent implements OnInit ,OnDestroy{
  profile: Profile;
  storeSubcription: Subscription = new Subscription()
  constructor(private store: Store<AppState> , private library: FaIconLibrary) {}
 
  ngOnInit(): void {
    this.storeSubcription = this.store.select('profile').subscribe((profileStore) => {
      this.profile = profileStore.profile;
    });
    this.library.addIcons(
      faUser,
      faUsers,
      faAngleDoubleLeft,
      faCouch,
      faCalendar
    );
  }
  ngOnDestroy(): void {
    this.storeSubcription.unsubscribe();
  }


  
}
