import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private fb: FormBuilder, private adminServ: AdminService) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Form Submitted!', this.postForm.value);
      this.adminServ.savePost(this.postForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.postForm.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      alert('Form is invalid');
    }
  }
}
