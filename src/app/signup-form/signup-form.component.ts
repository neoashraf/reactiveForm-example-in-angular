import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from '../common/username.validator';
import { ConfirmPasswordValidator } from '../common/confirm-password.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {

  submitSuccess : boolean = false;
  register : boolean = false;
  
  toRegister(){
    this.register = !this.register;
  }

  form = new FormGroup({
    username : new FormControl('',
     [Validators.required,Validators.minLength(4),Validators.maxLength(10),
      UsernameValidators.cannotContainSpace] , UsernameValidators.shouldBeUnique 
    ),
    email : new FormControl('',[Validators.required,Validators.email]),
    dateofBirth : new FormControl('',Validators.required),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword : new FormControl('',[Validators.required,ConfirmPasswordValidator.doesMatchWithPassword])
  });

  get username(){
    return this.form.get('username');
  }
  
  get email(){
    return this.form.get('email');
  }

  getEmailValidation() {
    return this.email.hasError('required') ? 'Email is required.' :
        this.email.hasError('email') ? 'Not a valid email.' :
            '';
  }

  get dateofBirth(){
    return this.form.get('dateofBirth');
  }

  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  submit(){
    this.submitSuccess = true;
    console.log("asdfas");
  }
}
