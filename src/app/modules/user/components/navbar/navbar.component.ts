import { Component, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private commonServ: CommonService) {}

  logout() {
    this.commonServ.logout();
  }
}
