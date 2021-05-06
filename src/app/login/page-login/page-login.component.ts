import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  form: FormGroup ;
  formIncorrect = false
  errosMessages ={
    error: 'Usuario o Contrase;a incorrecta'
  }
  constructor(private authService: AuthService) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  
  login(): void{
    if (!this.form.valid) {
      return;
    }
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    
    this.authService.requestAuth(username, password).subscribe( data => {} , error => {
      console.log(error);
      this.form.reset();
      this.formIncorrect = true;
    });
      
    

  }


}
