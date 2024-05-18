import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private adminServ: AdminService, private router:Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d*\.?\d*$/)]],
      isAvailable: [false],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.adminServ.savePost(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          const userConfirm = confirm('do you want to see all post')
          if(userConfirm){
            this.router.navigate(['/admin/seeAll'])
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
