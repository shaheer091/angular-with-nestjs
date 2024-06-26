import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  message:any;

  constructor(
    private formBuilder: FormBuilder,
    private commonServ: CommonService,
    private router: Router,
    private notiServ:NotificationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.commonServ.loginUser(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.message=res.message;
          if (res.success) {
            localStorage.setItem('token', res.token);
            const token = this.commonServ.parseJwt();
            this.notiServ.socket = this.notiServ.connectSocket()
            if (token.isAdmin) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/user']);
            }
            console.log(token);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      alert('enter fields properly')
      // Handle form validation errors
    }
  }
}
