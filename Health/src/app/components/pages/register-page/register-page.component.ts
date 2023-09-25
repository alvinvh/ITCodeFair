import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      Name:['',[Validators.required]],
      Username:['',[Validators.required]],
      Email:['',[Validators.required, Validators.email]],
      Phone:['',[Validators.required]],
      Password:['',[Validators.required, Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      )]],
      ConfirmPassword:['',[Validators.required]],
  })
  }

  ngOnInit(): void {
  }

  addRegister(){
    console.log(this.form.value);
    this.form.reset();
    }
};


