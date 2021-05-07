import { Subscription } from 'rxjs';
import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import { Profile } from './../../core/services/models/profile';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss'],
})
export class PageProfileComponent implements OnInit ,OnDestroy{
  profile: Profile;
  storeSubcription: Subscription = new Subscription()
  constructor(private store: Store<AppState>) {}
 
  ngOnInit(): void {
    this.storeSubcription = this.store.select('profile').subscribe((profileStore) => {
      this.profile = profileStore.profile;
    });
  }
  ngOnDestroy(): void {
    this.storeSubcription.unsubscribe();
  }


  
}
