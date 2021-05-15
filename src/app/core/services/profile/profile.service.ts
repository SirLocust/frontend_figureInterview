import { SetProfileAction } from './profile.actions';
import { Store } from '@ngrx/store';
import { Profile, ProfileObj } from './../models/profile';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  urlApi = environment.api_url;
  profileListenerSubcription: Subscription = new Subscription();
  constructor(private http: HttpClient, private store: Store) {}

  private getProfile(): Observable<ProfileObj> {
    return this.http.get<ProfileObj>(`${this.urlApi}/myprofile`);
  }
  private addProfileToStore(): void {
    this.profileListenerSubcription = this.getProfile().subscribe((profile) => {
      const profileDB = new Profile(profile);
      this.store.dispatch(new SetProfileAction(profileDB));
    });
  }

  initProfileListener(): void{
    this.addProfileToStore();
  }

  canselSubscriptions(): void{
    this.profileListenerSubcription.unsubscribe();
  }
}
