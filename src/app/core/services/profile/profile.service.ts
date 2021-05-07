import { SetProfileAction } from './profile.actions';
import { Store } from '@ngrx/store';
import { Profile, ProfileObj } from './../models/profile';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  urlApi = 'https://java.bocetos.co/userred-0.0.1-SNAPSHOT/myprofile';
  profileListenerSubcription: Subscription = new Subscription();
  constructor(private http: HttpClient, private store: Store) {}

  private getProfile(): Observable<ProfileObj> {
    return this.http.get<ProfileObj>(this.urlApi);
  }
  private addProfileToStore(): void {
    this.profileListenerSubcription = this.getProfile().subscribe((profile) => {
      const profileDB = new Profile(profile);
      this.store.dispatch(new SetProfileAction(profileDB));
    });
  }

  initProfileListner(): void{
    this.addProfileToStore();
  }

  canselSubscriptions(): void{
    this.profileListenerSubcription.unsubscribe();
  }
}
