import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private userServ: UserService) {}
  posts:any;
  ngOnInit(): void {
    this.userServ.getHome().subscribe({
      next: (res) => {
        // console.log(res);
        this.posts = res;
        console.log(this.posts);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
