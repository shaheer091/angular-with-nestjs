import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-see-posts',
  templateUrl: './see-posts.component.html',
  styleUrls: ['./see-posts.component.css'],
})
export class SeePostsComponent implements OnInit {
  constructor(private adminServ: AdminService, private router:Router) {}
  posts: any[]=[]
  ngOnInit(): void {
    this.seePost();
  }

  seePost() {
    this.adminServ.seePost().subscribe({
      next: (res) => {
        console.log(res);
        this.posts = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deletePost(id: any) {
    this.adminServ.deletePost(id).subscribe({
      next: (res) => {
        console.log(res);
        this.seePost()
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
