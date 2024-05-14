import { Injectable } from '@angular/core';
import { CommonService } from '../services/common.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserGuardService implements CanActivate {
  constructor(private commonServ: CommonService, private router: Router) {}
  canActivate(): boolean {
    if (this.commonServ.isLoggedIn() && !this.commonServ.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
