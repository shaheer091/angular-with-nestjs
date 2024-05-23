import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.css'],
})
export class SeeUsersComponent implements OnInit {
  constructor(private adminServ: AdminService) {}
  users: any[] = [];
  ngOnInit(): void {
    this.seeAllUsers();
  }
  seeAllUsers() {
    this.adminServ.seeAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        console.log(this.users);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteUser(userId: any) {
    const result = confirm(
      'Do you really want to delete this user? This action cannot be undone.'
    );
    if (result) {
      this.adminServ.deleteUser(userId).subscribe({
        next: (res) => {
          console.log(res);
          alert(res.message);
          this.seeAllUsers();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
