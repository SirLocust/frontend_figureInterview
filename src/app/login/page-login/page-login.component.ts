import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  form: FormGroup;
  formIncorrect = false;
  faSpinner = faSpinner;
  isLoginLoading = false;
  errosMessages = {
    error: 'Usuario o Contraseña incorrecta',
  };
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.store.select('ui').subscribe((data) => {
      this.isLoginLoading = data.loginLoading;
    });
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(): void {
    if (!this.form.valid) {
      return;
    }
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    this.authService.requestAuth(username, password).subscribe(
      (data) => {},
      (error) => {
        console.log(error);
        this.form.reset();
        this.formIncorrect = true;
      }
    );
  }
}
