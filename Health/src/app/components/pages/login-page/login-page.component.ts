import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginStatus = true;
  username: string = '';
  password: string = '';
  form: FormGroup;
  constructor(private loginService: AuthService, private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      Email:[''],
      Password:[''],
  })
   }

  ngOnInit(): void {
  }
  login(){
    this.loginService.login(this.form.value.Email, this.form.value.Password);
    if (this.loginService.isAuthenticated()){
      this.router.navigate(['/index'])
    }
    else{
      this.loginStatus = false;
    }
  }
}
