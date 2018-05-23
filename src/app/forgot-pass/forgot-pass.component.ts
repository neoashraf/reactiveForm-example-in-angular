import { Component, OnInit } from '@angular/core';
import {ConfirmPasswordValidator} from '../common/confirm-password.validator'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PassValidator } from '../common/password.validator';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})

export class ForgotPassComponent{

  changePass = false;

  toChangePass(){
    this.changePass = !this.changePass;
  }

  form = new FormGroup({
    oldPassword : new FormControl('',[Validators.required],PassValidator.passMatcher),
    newPassword : new FormControl('',[Validators.required]),
    confirmPassword :  new FormControl('',[Validators.required])
  });

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

}
