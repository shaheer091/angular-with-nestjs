import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commonServ: CommonService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (!passwordControl || !confirmPasswordControl) {
      return null; // Return null if controls are not found
    }

    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.commonServ.signUpUser(this.signupForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      // Handle form validation errors
    }
  }
}
