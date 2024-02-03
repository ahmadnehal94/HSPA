import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit() {
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl('Mark', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
        ]),
      },
      this.passwordMatchingValidator(this.registrationForm)
    );
  }
  ngOnSubmit() {
    console.log(this.registrationForm);
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value
      ? { notmatched: false }
      : { notmatched: true };
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
