import { Component, OnInit, inject } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css'],
})
export class AdminHomePageComponent implements OnInit {
  constructor(
    private commonServ: CommonService,
    private adminServ: AdminService
  ) {}
  decodedToken = this.commonServ.parseJwt();
  count:any;
  ngOnInit(): void {
    this.getAdminHomePage();
  }

  getAdminHomePage() {
    this.adminServ.getHomePage().subscribe({
      next: (res) => {
        console.log(res);
        this.count = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
